from pathlib import Path

# Chemin du dossier contenant tes images
DOSSIER = Path("D:/Noam/Bureau/portfolio-final/assets/_MConverter.eu_Cat_pounces_at_camera_202605130014")

# Extensions d'images acceptées
EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".gif"}

# Décalage : 00001 devient 00193
DECALAGE = 192

# Récupère les images dont le nom est un nombre, ex: 00001.jpg
images = []

for fichier in DOSSIER.iterdir():
    if fichier.is_file() and fichier.suffix.lower() in EXTENSIONS:
        nom_sans_extension = fichier.stem
        
        if nom_sans_extension.isdigit():
            numero = int(nom_sans_extension)
            images.append((numero, fichier))

# Important : on renomme en ordre décroissant pour éviter les conflits
images.sort(reverse=True)

for numero, fichier in images:
    nouveau_numero = numero + DECALAGE
    nouveau_nom = f"{nouveau_numero:05d}{fichier.suffix.lower()}"
    nouveau_chemin = fichier.with_name(nouveau_nom)

    fichier.rename(nouveau_chemin)
    print(f"{fichier.name} -> {nouveau_nom}")

print("Renommage terminé.")