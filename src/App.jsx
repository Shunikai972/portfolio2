import React from "react";
import { Animation, Root, Waypoint } from "@bsmnt/scrollytelling";
import scrollVideo from "../assets/scroll-sequence-1080p.mp4?url";

const navItems = [
  ["home", "Home"],
  ["current", "Current Project"],
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["contact", "Contact"],
];

const words = ["PYTHON DEVELOPER", "SYSTEM ARCHITECT", "AUTOMATION SPECIALIST", "WEB DEVELOPER"];

const projectCategories = [
  ["professional", "Professionnel"],
  ["personal", "Personnel"],
  ["academic", "Académique"],
  ["school", "Scolaire"],
];

const projectData = {
  professional: [
    {
      icon: "fas fa-robot",
      title: "Moteur de Logique d'Événements Automatisé",
      desc: "Script d'automation haute performance en Python utilisant la vision par ordinateur pour détecter les changements d'état en temps réel avec une latence inférieure à 50ms.",
      features: ["Vision par ordinateur avec latence < 50ms", "Machine d'état fini pour la gestion d'exceptions", "99,9% de disponibilité sans intervention", "Architecture AsyncIO haute performance"],
      tags: ["Python 3.11", "OpenCV", "Win32 API", "AsyncIO"],
    },
    {
      icon: "fab fa-discord",
      title: "Développement de Bot Discord",
      desc: "Bot de modération et utilitaire en Python et discord.py gérant plus de 10 000 requêtes quotidiennement avec modération automatisée.",
      features: ["Plus de 10 000 requêtes/jour", "Modération automatisée avancée", "Filtrage de messages en temps réel", "Gestion complète des utilisateurs"],
      tags: ["Python", "discord.py", "SQLite"],
    },
    {
      icon: "fas fa-atom",
      title: "SAE-GO - Système de Particules",
      desc: "Moteur de particules configurable en Go avec spawn aléatoire/fixe, accumulateur de spawn pour vitesses fractionnaires et extensions modulaires.",
      features: ["Spawn aléatoire ou fixe configurable", "Accumulateur (ex: 0.5 particules/frame)", "Tests unitaires complets", "Extensions: gravité, collisions, souris"],
      tags: ["Go", "JSON Config", "Unit Tests"],
    },
    {
      icon: "fas fa-music",
      title: "Music Bot Discord",
      desc: "Bot Discord tout-en-un pour la musique avec support YouTube Music et Spotify, système de queue complet, contrôles interactifs et sauvegarde JSON automatique.",
      features: ["YouTube Music & Spotify + playlists (100 titres)", "Queue avec navigation par menu déroulant", "Modes boucle (off/one/all) et shuffle", "Contrôle du volume et boutons interactifs"],
      tags: ["Python", "discord.py", "Spotify API", "FFmpeg"],
    },
    {
      icon: "fas fa-gavel",
      title: "Prototype Site Web - Cabinet d'Avocat",
      desc: "Prototype de site web professionnel pour Rebound Advisory, cabinet spécialisé dans les situations complexes, distressed M&A et restructuration avec design responsive et navigation multi-page.",
      features: ["Architecture multi-pages (accueil, clients, équipe, services)", "Design responsive Tailwind CSS", "Navigation dynamique et cohérente", "Mise en page professionnelle avec sections services, clients, équipe"],
      tags: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
    },
    {
      icon: "fas fa-utensils",
      title: "Plateforme de Signalement CROUS",
      desc: "Application web full-stack pour signaler les problèmes de cuisine et conditions de vie au CROUS avec backend FastAPI/Python, intégration Discord et stockage JSON persistant.",
      features: ["Frontend responsive HTML/CSS/JavaScript", "Backend FastAPI avec middleware CORS", "Intégration Discord selfbot pour remontées de rapports", "Stockage persistant des rapports en JSON", "Gestion des uploads de fichiers avec aiofiles", "Déploiement Heroku avec environnement variables"],
      tags: ["FastAPI", "Python", "Discord.py", "HTML5", "CSS3", "JSON"],
    },
  ],
  personal: [
    {
      icon: "fas fa-server",
      title: "Laboratoire Réseau Personnel",
      desc: "Configuration complète d'un serveur personnel sur Raspberry Pi avec dockerisation, Nginx Proxy Manager, Pi-Hole DNS et Portainer.",
      features: ["Raspberry Pi avec Docker Compose", "Nginx Proxy Manager + SSL", "Pi-Hole DNS pour blocage publicités", "Portainer pour gestion des containers"],
      tags: ["Raspberry Pi", "Docker", "Nginx", "Pi-Hole"],
    },
    {
      icon: "fas fa-globe",
      title: "Développement de Portfolio",
      desc: "Plusieurs versions de sites portfolio personnels en HTML5, CSS3 et JavaScript avec différentes approches de design et éléments interactifs.",
      features: ["Multiples versions et approches design", "Animations CSS et effets interactifs", "Design responsif mobile-first", "Fond matriciel animé avec canvas"],
      tags: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
    },
    {
      icon: "fas fa-calendar-alt",
      title: "InfoCalendar - Calendrier de l'Avent Interactif",
      desc: "Calendrier de l'Avent thématique \"BUT & Chill\" avec contenu ludique et éducatif pour chaque jour, interface dynamique avec modal et syntaxe coloriée.",
      features: ["24 portes interactives du calendrier", "Types de contenu multiples (code, images, faits)", "Coloration syntaxique du code Python", "Contenu thématique: algorithmes SAT/DPLL", "Effets visuels festifs avec effet matrix", "Interface responsive avec typewriter effect"],
      tags: ["HTML5", "CSS3", "JavaScript", "highlight.js"],
    },
    {
      icon: "fas fa-coins",
      title: "CoinBot - Bot Discord Économie",
      desc: "Bot Discord avec système d'économie complet : boutique personnalisée, gestion de monnaie virtuelle, quêtes journalières et base de données SQLite pour la persistance des données.",
      features: ["Système de monnaie virtuelle avec pièces", "Boutique d'items cosmétiques (potions, voitures, manoirs)", "Commandes slash avec discord.py", "Base de données SQLite asynchrone", "Gestion des guildes et des utilisateurs", "Quêtes et récompenses personnalisées"],
      tags: ["Python", "discord.py", "SQLite", "Async"],
    },
    {
      icon: "fas fa-gamepad",
      title: "Macros Roblox - Automation OCR",
      desc: "Suite de macros pour Roblox (Grand Piece Online, Pika) avec système OCR Tesseract pour la détection de UI, repositionnement intelligent, intégration webhook Discord et automation avancée.",
      features: ["OCR Tesseract pour reconnaissance UI en temps réel", "Interface GUI avec customtkinter", "Repositionnement intelligent basé sur détection OCR", "Intégration webhook Discord pour notifications", "Support multi-jeux Roblox", "Configuration persistante en JSON", "Automation contrôlée au clavier"],
      tags: ["Python", "Tesseract", "OpenCV", "PyDirect Input", "Discord API"],
    },
    {
      icon: "fas fa-keyboard",
      title: "Macro Recorder - Enregistrement d'Actions",
      desc: "Outil d'enregistrement de macros en temps réel : enregistre les clics et appuis clavier (F8 pour démarrer/arrêter) et génère automatiquement des scripts Python exécutables.",
      features: ["Enregistrement en temps réel des clics et touches", "Horodatage précis des actions", "Génération automatique de scripts Python", "Sauvegarde avec timestamp unique", "Playback capable via pynput", "Interface simple avec pynput listener"],
      tags: ["Python", "pynput", "Recording", "Automation"],
    },
    {
      icon: "fas fa-robot",
      title: "Trading Bots & Requêtes IA Automatisées",
      desc: "Développement de bots trading multi-tokens avec manipulation de marché et système d'auto-réponses alimentées par IA pour automatisation d'interactions sur Discord et jeux en ligne.",
      features: ["Bots multi-tokens pour spam/manipulation de marché", "Requêtes IA automatisées pour réponses intelligentes", "Auto-reply Discord avec délais configurables", "Gestion de comptes multiples en parallèle", "Système de requêtes à API externes", "Configurations persistantes"],
      tags: ["Python", "discord.py", "API Integration", "Automation"],
    },
    {
      icon: "fas fa-network-wired",
      title: "Scripts DOS & Réseau - Outils de Pentest",
      desc: "Suite d'outils éducatifs de pentest réseau : scripts de déni de service (DOS/DDOS), attack wifi, manipulation de flux réseau et tests d'infrastructure pour apprentissage en cybersécurité.",
      features: ["Scripts DOS/DDOS multi-type (type1, type2)", "Attacks WiFi avec paramètres configurables", "Manipulation de flux réseau", "Tests d'infrastructure réseau", "Outils à usage éducatif/laboratoire", "Documentation technique complète"],
      tags: ["Python", "Networking", "Security", "Scapy"],
    },
    {
      icon: "fas fa-music",
      title: "YouTube Music Downloader",
      desc: "Outil de téléchargement de playlists YouTube Music en format MP4 avec compression audio haute qualité, gestion d'erreurs robuste et support des autres plateformes via yt-dlp.",
      features: ["Téléchargement de playlists YouTube Music en MP4", "Meilleure qualité vidéo + audio combinés", "Limitation configurable du nombre de titres", "Gestion des erreurs avec extraction continues", "Support multi-plateformes via yt-dlp", "Création automatique du dossier de destination", "Format compatible avec tous les lecteurs"],
      tags: ["Python", "yt-dlp", "YouTube API", "Audio Processing"],
    },
    {
      icon: "fas fa-user-plus",
      title: "Discord Account Generator",
      desc: "Outil d'automation semi-automatique pour la création en masse de comptes Discord avec génération intelligente d'identifiants, utilisant Selenium pour le web scraping et l'automation de formulaires.",
      features: ["Génération automatique de usernames & passwords", "Génération intelligente d'emails (support proxy)", "Date de naissance aléatoire", "Automation Selenium avec Chrome WebDriver", "Bypasse anti-automation Discord (headless mode masqué)", "Extraction automatique des tokens OAuth", "Support des proxies pour éviter les bans IP", "Sauvegarde des comptes créés en fichier texte"],
      tags: ["Python", "Selenium", "Chrome WebDriver", "Web Automation"],
    },
  ],
  academic: [
    {
      icon: "fas fa-graduation-cap",
      title: "Études en Informatique",
      desc: "Licence Informatique à l'Université de Nantes avec focus sur l'ingénierie logicielle et l'architecture système.",
      features: ["Programmation et algorithmique avancée", "Structures de données et complexité", "Architecture logicielle et systèmes", "Projets SAE collaboratifs"],
      tags: ["C", "Java", "Go", "SQL", "Algorithms"],
    },
    {
      icon: "fas fa-microchip",
      title: "Projets Lycée STI2D",
      desc: "Divers projets techniques en STI2D incluant prototypage électronique, exercices de programmation et projets de conception de systèmes.",
      features: ["Prototypage électronique", "Programmation embarquée", "Conception de systèmes", "Projets pluridisciplinaires"],
      tags: ["STI2D", "Electronics", "CAD", "Arduino"],
    },
  ],
  school: [
    {
      icon: "fas fa-book",
      title: "Projets Scolaires Divers",
      desc: "Collection de projets réalisés lors de ma scolarité : projets d'informatique, travaux pratiques et études de cas en classe.",
      features: ["Projets pluridisciplinaires", "Travaux pratiques informatiques", "Études de cas techniques", "Apprentissage fondamental"],
      tags: ["School", "Learning", "Fundamentals"],
    },
    {
      icon: "fas fa-code",
      title: "Go Practical Work - Polytech Nantes PEIP",
      desc: "Travaux pratiques complets en Go : manipulation de fichiers, structures de données, algorithmes de recherche/tri, récursivité et gestion de pointeurs sur plusieurs niveaux de difficulté.",
      features: ["TP Fichiers : lecture/écriture en Go", "TP Structures : niveaux 0-3 progressifs", "TP Tri : algorithmes de tri (niveaux 0-3)", "TP Récursivité : 20+ exercices (factorielle, Syracuse, palindrome)", "TP Pointeurs : gestion mémoire Go", "TP Recherche : algorithmes de recherche", "TDs avec exercices d'application", "CMs théoriques C et algorithmes de base"],
      tags: ["Go", "Algorithms", "Data Structures", "Polytech Nantes"],
    },
    {
      icon: "fas fa-particle",
      title: "SAE Projet Particules - Moteur 2D Go",
      desc: "Situation d'Apprentissage Évalué : système de particules 2D interactif développé en Go avec ebiten, gestion de configuration JSON, chargement d'assets et rendu en temps réel.",
      features: ["Framework ebiten pour rendu 2D", "Système de particules configurable", "Gestion de fichiers de configuration (JSON)", "Chargement dynamique d'assets (images)", "Mise à jour et rendu temps réel", "Architecture modulaire (config, assets, particles)", "Gestion de fenêtres ebiten"],
      tags: ["Go", "ebiten", "Game Engine", "Graphics"],
    },
    {
      icon: "fas fa-robot",
      title: "Bot Trading Pandas - Polytech Nantes PEIP D",
      desc: "Projet d'apprentissage en trading algorithmique : développement d'un bot trading utilisant pandas pour l'analyse de données boursières, calcul d'indicateurs techniques et stratégies de trading automatisées.",
      features: ["Analyse de données avec pandas", "Récupération de données boursières (APIs)", "Calcul d'indicateurs techniques (SMA, RSI, MACD)", "Stratégies de trading automatisées", "Backtesting de stratégies", "Visualisation de données (matplotlib)", "Gestion de portefeuille simulé", "Logging et reporting des transactions"],
      tags: ["Python", "pandas", "Trading", "Polytech Nantes"],
    },
    {
      icon: "fas fa-layer-group",
      title: "Programmation Orientée Objet - Kotlin",
      desc: "TP complets en Kotlin (R201) : implémentation de diagrammes UML, héritage de classe, polymorphisme, tests unitaires JUnit et projets de gestion de personnages/objets.",
      features: ["TP5 : Héritage et diagrammes UML", "TP5 Exercice 1 : implémentation classes C, C1, C2 avec héritage", "TP6 Exercice 1 : système Personnage/Magicien avec équipement et sorts", "TP6 Exercice 2 : système de messagerie (Message, Signal, WhatsApp)", "Inventaire et gestion d'équipements (armes, armures)", "Tests unitaires avec JUnit et tests UML", "Diagrammes de classes UML", "IntelliJ IDEA avec Gradle build system"],
      tags: ["Kotlin", "OOP", "UML", "JUnit", "Gradle"],
    },
  ],
};

const skills = [
  ["Python", 60, "Advanced scripting, automation and backend logic."],
  ["Linux Administration", 70, "Server management, shell scripting and system configuration."],
  ["Web Technologies", 40, "HTML5, CSS3, JavaScript and responsive interfaces."],
  ["C/C++", 20, "System programming and performance fundamentals."],
  ["Docker", 15, "Containerization basics and service deployment."],
];

const panels = [
  { id: "home", section: "home" },
  { id: "current", section: "current" },
  { id: "about", section: "about" },
  { id: "experience", section: "experience" },
  { id: "projects", section: "projects" },
  { id: "skills", section: "skills" },
  { id: "contact", section: "contact" },
];

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

function useTypewriter(items) {
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer = 0;

    const tick = () => {
      const word = items[wordIndex];
      setText(word.slice(0, charIndex));

      if (!deleting && charIndex < word.length) {
        charIndex += 1;
        timer = window.setTimeout(tick, 85);
        return;
      }

      if (!deleting) {
        deleting = true;
        timer = window.setTimeout(tick, 1400);
        return;
      }

      if (charIndex > 0) {
        charIndex -= 1;
        timer = window.setTimeout(tick, 38);
        return;
      }

      deleting = false;
      wordIndex = (wordIndex + 1) % items.length;
      timer = window.setTimeout(tick, 320);
    };

    timer = window.setTimeout(tick, 300);
    return () => window.clearTimeout(timer);
  }, [items]);

  return text;
}

const ScrollyVideo = React.forwardRef(function ScrollyVideo(_, ref) {
  const videoRef = React.useRef(null);
  const durationRef = React.useRef(1);
  const progressRef = React.useRef(0);
  const rafRef = React.useRef(0);
  const readyRef = React.useRef(false);

  const seekToProgress = React.useCallback((progress, force = false) => {
    progressRef.current = clamp(progress);
    if (rafRef.current && !force) return;

    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = 0;
      const video = videoRef.current;
      if (!video || !readyRef.current || !Number.isFinite(video.duration)) return;

      const target = clamp(progressRef.current) * Math.max(0.1, durationRef.current - 0.08);
      if (!force && Math.abs(video.currentTime - target) < 0.045) return;

      try {
        video.currentTime = target;
      } catch {
        // Mobile browsers can reject seeks while metadata is still settling.
      }
    });
  }, []);

  const warmUp = React.useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise.then(() => video.pause()).catch(() => {});
    }
  }, []);

  React.useImperativeHandle(ref, () => ({
    setProgress: seekToProgress,
    warmUp,
  }));

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const onMetadata = () => {
      durationRef.current = video.duration || 1;
      readyRef.current = true;
      seekToProgress(progressRef.current, true);
    };

    const onVisible = () => {
      if (!document.hidden) seekToProgress(progressRef.current, true);
    };

    video.addEventListener("loadedmetadata", onMetadata);
    video.addEventListener("loadeddata", onMetadata);
    document.addEventListener("visibilitychange", onVisible);
    if (video.readyState >= 1) onMetadata();

    return () => {
      video.removeEventListener("loadedmetadata", onMetadata);
      video.removeEventListener("loadeddata", onMetadata);
      document.removeEventListener("visibilitychange", onVisible);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [seekToProgress]);

  return (
    <div className="video-stage" aria-hidden="true">
      <video ref={videoRef} className="story-video" src={scrollVideo} muted playsInline preload="auto" />
      <div className="video-vignette" />
    </div>
  );
});

function HoloButton({ children, href, onClick }) {
  const content = (
    <>
      <span className="button-text">{children}</span>
      <span className="holo-glow" />
      <span className="button-glitch" />
      <span className="scan-line" />
    </>
  );

  if (href) {
    return <a className="holo-button" href={href}>{content}</a>;
  }

  return <button type="button" className="holo-button" onClick={onClick}>{content}</button>;
}

function ProjectsPortfolio() {
  const [category, setCategory] = React.useState("professional");
  const [index, setIndex] = React.useState(0);
  const items = projectData[category];
  const current = items[index];

  const goTo = React.useCallback((nextIndex) => {
    setIndex(Math.max(0, Math.min(items.length - 1, nextIndex)));
  }, [items.length]);

  const selectCategory = (nextCategory) => {
    setCategory(nextCategory);
    setIndex(0);
  };

  return (
    <article className="projects-panel">
      <p className="section-title">MES PROJETS</p>
      <div className="proj-tabs">
        {projectCategories.map(([id, label]) => (
          <button
            className={`proj-tab ${category === id ? "active" : ""}`}
            key={id}
            onClick={() => selectCategory(id)}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="carousel-counter">
        <span className="current-num">{String(index + 1).padStart(2, "0")}</span>
        <div className="carousel-counter-sep" />
        <span className="total-num">/ {String(items.length).padStart(2, "0")}</span>
        <span className="counter-label">PROJETS</span>
      </div>

      <div className="carousel-outer">
        <button className="carousel-arrow prev" type="button" disabled={index === 0} onClick={() => goTo(index - 1)} aria-label="Projet précédent">
          <i className="fas fa-chevron-left" />
        </button>
        <button className="carousel-arrow next" type="button" disabled={index === items.length - 1} onClick={() => goTo(index + 1)} aria-label="Projet suivant">
          <i className="fas fa-chevron-right" />
        </button>

        <div className="carousel-track-wrapper">
          <div className="proj-card">
            <div className="proj-card-header">
              <span className="proj-card-num">{String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
              <div className="proj-card-icon"><i className={current.icon} /></div>
            </div>
            <div className="proj-card-body">
              <h3 className="proj-card-title">{current.title}</h3>
              <p className="proj-card-desc">{current.desc}</p>
              <ul className="proj-features">
                {current.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <div className="proj-card-badges">
                {current.tags.map((tag) => <span className="proj-badge" key={tag}>{tag}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-progress">
          <div className="carousel-progress-fill" style={{ width: `${items.length <= 1 ? 100 : (index / (items.length - 1)) * 100}%` }} />
        </div>
        <div className="carousel-pagination">
          {items.map((item, dotIndex) => (
            <button
              aria-label={`Aller au projet ${dotIndex + 1}`}
              className={`carousel-dot ${dotIndex === index ? "active" : ""}`}
              key={item.title}
              onClick={() => goTo(dotIndex)}
              type="button"
            />
          ))}
        </div>
      </div>
    </article>
  );
}

function IntroGate({ onEnter }) {
  const [open, setOpen] = React.useState(true);
  if (!open) return null;

  return (
    <div className="intro-gate">
      <div className="nebula" />
      <div className="grid-plane" />
      <div className="intro-content">
        <div className="loader-ring" aria-hidden="true" />
        <h2>SYSTEM INITIALIZATION</h2>
        <p>Loading assets...</p>
        <HoloButton
          onClick={() => {
            onEnter();
            setOpen(false);
          }}
        >
          ACCESS TERMINAL
        </HoloButton>
      </div>
    </div>
  );
}

function PanelContent({ section }) {
  const typewriter = useTypewriter(words);

  if (section === "home") {
    return (
      <div className="home-panel">
        <h1 className="hero-glitch" data-text="ASTRO PORTFOLIO">ASTRO PORTFOLIO</h1>
        <div className="typewriter-box">{typewriter}<span className="caret">_</span></div>
        <HoloButton href="#current">View Current Project</HoloButton>
      </div>
    );
  }

  if (section === "current") {
    return (
      <article className="glass-panel project-hero">
        <div>
          <p className="section-title">CURRENT PROJECT</p>
          <h2>Automated Event Logic Engine</h2>
          <p className="mono muted">Target: "Great Kraken Farm" // Environment: GPO</p>
          <div className="badge-row">
            {["Python 3.11", "OpenCV", "Win32 API", "AsyncIO"].map((tag) => <span className="tech-badge" key={tag}>{tag}</span>)}
          </div>
          <p>Currently engineering a high-performance automation script designed for complex event cycles within virtualized environments.</p>
          <p>The architecture implements a finite state machine to handle exception flows and maintain uptime without user intervention.</p>
        </div>
        <div className="project-terminal">
          <span className="status-indicator"><span className="blink" /> SYSTEM ACTIVE</span>
          <div className="terminal-icon">VIDEO FEED</div>
          <a href="https://youtu.be/lWATH6w4l3g" target="_blank" rel="noreferrer">Open project video</a>
        </div>
      </article>
    );
  }

  if (section === "about") {
    return (
      <article className="glass-panel compact">
        <p className="section-title">ABOUT</p>
        <h2>Personal Information</h2>
        <dl className="info-list">
          <div><dt>Name</dt><dd>Noam M'Sakni</dd></div>
          <div><dt>Date of Birth</dt><dd>9 March 2007</dd></div>
          <div><dt>Location</dt><dd>Chateauvilain, France</dd></div>
          <div><dt>Email</dt><dd><a href="mailto:noammsakni@gmail.com">noammsakni@gmail.com</a></dd></div>
          <div><dt>Phone</dt><dd>06 38 03 48 06</dd></div>
        </dl>
      </article>
    );
  }

  if (section === "experience") {
    return (
      <article className="panel-stack">
        <p className="section-title">EXPERIENCE & ACTIVITIES</p>
        {[
          ["Theater & Performing Arts", "Cie Castel Troupe (Since 2020)", "Regular participant in theater performances, developing stage presence, public speaking and team cohesion."],
          ["Circus Arts", "Training Since 2020", "Acrobatics and juggling practice, with discipline and performance under pressure."],
          ["Music & Personal Development", "Bagpipe Musician (Since 2021)", "Self-taught bagpipe player with regular practice and performance experience."],
          ["Academic & Community Engagement", "Fundraising / Eloquence", "Organized a fundraising campaign and earned 3rd place in a departmental eloquence contest."],
        ].map(([title, head, body]) => (
          <div className="glass-panel mini" key={title}>
            <h3>{title}</h3>
            <h4>{head}</h4>
            <p>{body}</p>
          </div>
        ))}
      </article>
    );
  }

  if (section === "projects") {
    return <ProjectsPortfolio />;
  }

  if (section === "skills") {
    return (
      <article className="skills-panel">
        <p className="section-title">TECHNICAL SKILLS</p>
        <div className="skill-grid">
          {skills.map(([name, value, desc]) => (
            <div className="glass-panel skill-card" key={name}>
              <div className="skill-head"><h3>{name}</h3><span>{value}%</span></div>
              <p>{desc}</p>
              <div className="meter"><span style={{ width: `${value}%` }} /></div>
            </div>
          ))}
        </div>
      </article>
    );
  }

  return (
    <article className="glass-panel contact-panel">
      <p className="section-title">CONTACT</p>
      <h2>Build. Test. Iterate.</h2>
      <p>Thanks for visiting Astro Portfolio.</p>
      <div className="contact-links">
        <a href="https://github.com/Shunikai972" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:noammsakni@gmail.com">noammsakni@gmail.com</a>
      </div>
      <p className="footer-note">2026 Astro Portfolio | All rights reserved</p>
    </article>
  );
}

function App() {
  const videoApiRef = React.useRef(null);
  const [activePanel, setActivePanel] = React.useState(panels[0].id);

  const callbacks = React.useMemo(
    () => ({
      onUpdate: (self) => videoApiRef.current?.setProgress(self.progress),
      onRefresh: (self) => videoApiRef.current?.setProgress(self.progress, true),
    }),
    [],
  );

  React.useEffect(() => {
    const onFirstInput = () => videoApiRef.current?.warmUp();
    window.addEventListener("pointerdown", onFirstInput, { once: true, passive: true });
    window.addEventListener("touchstart", onFirstInput, { once: true, passive: true });
    return () => {
      window.removeEventListener("pointerdown", onFirstInput);
      window.removeEventListener("touchstart", onFirstInput);
    };
  }, []);

  return (
    <>
      <ScrollyVideo ref={videoApiRef} />
      <IntroGate onEnter={() => videoApiRef.current?.warmUp()} />

      <header className="site-nav">
        <a className="brand" href="#home">Astro<span>Portfolio</span></a>
        <nav aria-label="Sections">
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={activePanel === id ? "active" : ""}>{label}</a>
          ))}
        </nav>
        <div className="language-toggle" aria-hidden="true">
          <span>FR</span>
          <span>EN</span>
        </div>
      </header>

      <Root start="top top" end="bottom bottom" scrub={0.45} callbacks={callbacks} defaults={{ ease: "none" }}>
        <main className="story-scroll">
          {panels.map((panel, index) => {
            const start = Math.max(0, index * (100 / panels.length) - 3);
            const end = Math.min(100, start + 13);

            return (
              <section className={`story-panel story-panel-${panel.id}`} id={panel.id} key={panel.id}>
                <Waypoint at={index * (100 / panels.length)} onCall={() => setActivePanel(panel.id)} onReverseCall={() => setActivePanel(panel.id)} />
                <Animation
                  tween={{
                    start,
                    end,
                    fromTo: [
                      { autoAlpha: 0, y: 52 },
                      { autoAlpha: 1, y: 0 },
                    ],
                  }}
                >
                  <div className="panel-shell">
                    <PanelContent section={panel.section} />
                  </div>
                </Animation>
              </section>
            );
          })}
        </main>
      </Root>
    </>
  );
}

export default App;
