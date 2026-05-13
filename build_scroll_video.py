from __future__ import annotations

import argparse
import json
import subprocess
import time
from pathlib import Path


def log(message: str, log_file: Path | None = None) -> None:
    stamp = time.strftime("%H:%M:%S")
    line = f"[{stamp}] {message}"
    print(line, flush=True)
    if log_file:
        with log_file.open("a", encoding="utf-8") as handle:
            handle.write(line + "\n")


def ffprobe_duration(path: Path) -> float:
    result = subprocess.run(
        [
            "ffprobe",
            "-v",
            "error",
            "-show_entries",
            "format=duration",
            "-of",
            "json",
            str(path),
        ],
        check=True,
        capture_output=True,
        text=True,
    )
    data = json.loads(result.stdout)
    return float(data["format"]["duration"])


def run_ffmpeg(command: list[str], duration: float, log_file: Path) -> None:
    process = subprocess.Popen(
        command,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        encoding="utf-8",
        errors="replace",
        bufsize=1,
    )

    started = time.time()
    last_log = 0.0
    last_frame = "?"
    last_time = 0.0

    assert process.stdout is not None
    for raw_line in process.stdout:
        line = raw_line.strip()
        if line.startswith("frame="):
            last_frame = line.split("=", 1)[1]
        elif line.startswith("out_time_ms="):
            try:
                last_time = int(line.split("=", 1)[1]) / 1_000_000
            except ValueError:
                pass
        elif line.startswith("progress="):
            now = time.time()
            if now - last_log >= 1.0 or line.endswith("end"):
                last_log = now
                progress = min(100.0, (last_time / max(duration, 0.001)) * 100)
                elapsed = now - started
                eta = (elapsed / max(progress, 0.1)) * (100 - progress) if progress < 100 else 0
                log(
                    f"ffmpeg frame={last_frame} progress={progress:5.1f}% "
                    f"elapsed={elapsed:5.1f}s eta={eta:5.1f}s",
                    log_file,
                )

    code = process.wait()
    if code != 0:
        raise RuntimeError(f"ffmpeg failed with exit code {code}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Merge assets/1.mp4 and assets/2.mp4 into a 1080p scroll-scrubbable video.")
    parser.add_argument("--first", type=Path, default=Path("assets/1.mp4"))
    parser.add_argument("--second", type=Path, default=Path("assets/2.mp4"))
    parser.add_argument("--output", type=Path, default=Path("assets/scroll-sequence-1080p.mp4"))
    parser.add_argument("--height", type=int, default=1080)
    parser.add_argument("--fps", type=int, default=60)
    parser.add_argument("--crf", type=int, default=24)
    parser.add_argument("--preset", default="medium")
    parser.add_argument("--gop", type=int, default=6, help="Small GOP improves scroll seeking precision.")
    parser.add_argument("--log-file", type=Path, default=Path("build_scroll_video.log"))
    args = parser.parse_args()

    if args.log_file.exists():
        args.log_file.unlink()

    for path in (args.first, args.second):
        if not path.exists():
            raise FileNotFoundError(path)

    args.output.parent.mkdir(parents=True, exist_ok=True)
    tmp_output = args.output.with_suffix(args.output.suffix + ".tmp.mp4")
    if tmp_output.exists():
        tmp_output.unlink()

    total_duration = ffprobe_duration(args.first) + ffprobe_duration(args.second)
    log(
        f"start merge first={args.first} second={args.second} output={args.output} "
        f"target=1920x{args.height} fps={args.fps} crf={args.crf} gop={args.gop}",
        args.log_file,
    )

    scale_filter = f"scale=-2:{args.height}:flags=lanczos,fps={args.fps},setpts=PTS-STARTPTS"
    command = [
        "ffmpeg",
        "-hide_banner",
        "-y",
        "-i",
        str(args.first),
        "-i",
        str(args.second),
        "-filter_complex",
        f"[0:v]{scale_filter}[v0];[1:v]{scale_filter}[v1];[v0][v1]concat=n=2:v=1:a=0[v]",
        "-map",
        "[v]",
        "-an",
        "-c:v",
        "libx264",
        "-preset",
        args.preset,
        "-crf",
        str(args.crf),
        "-pix_fmt",
        "yuv420p",
        "-movflags",
        "+faststart",
        "-g",
        str(args.gop),
        "-keyint_min",
        str(args.gop),
        "-sc_threshold",
        "0",
        "-progress",
        "pipe:1",
        "-nostats",
        str(tmp_output),
    ]

    run_ffmpeg(command, total_duration, args.log_file)
    tmp_output.replace(args.output)
    log(f"done output={args.output} size={args.output.stat().st_size:,} bytes", args.log_file)


if __name__ == "__main__":
    main()
