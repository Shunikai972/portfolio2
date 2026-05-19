(function () {
'use strict';

const translations = {
    fr: {
        "nav-home": "Accueil", "nav-current": "Projet Actuel", "nav-about": "À Propos",
        "nav-experience": "Expérience", "nav-projects": "Projets", "nav-skills": "Compétences", "nav-contact": "Contact",
        "home-title": "ASTRO PORTFOLIO",
        "typewriter-1": "DÉVELOPPEUR PYTHON", "typewriter-2": "ARCHITECTE SYSTÈME",
        "typewriter-3": "SPÉCIALISTE AUTOMATION", "typewriter-4": "DÉVELOPPEUR WEB",
        "view-project-btn": "Voir le Projet Actuel",
        "system-init": "INITIALISATION SYSTÈME", "loading-assets": "Chargement des ressources...", "access-terminal": "ACCÉDER AU TERMINAL",
        "current-section": "PROJET ACTUEL", "current-title": "Moteur de Logique d'Événements Automatisés",
        "current-subtitle": "Cible: \"Great Kraken Farm\" // Environnement: GPO",
        "current-desc-1": "Actuellement en développement d'un script d'automation haute performance conçu pour des cycles d'événements complexes dans des environnements virtualisés. Ce système utilise la <strong style=\"color:var(--secondary)\">vision par ordinateur</strong> pour détecter les changements d'état en temps réel avec une latence inférieure à 50ms.",
        "current-desc-2": "L'architecture implémente une machine d'état fini pour gérer les flux d'exceptions (déconnexions, interférences) en assurant 99,9% de disponibilité sans intervention utilisateur.",
        "visual-feed-offline": "[FLUX VIDÉO HORS LIGNE]", "system-active": "SYSTÈME ACTIF", "hover-engage": "Survolez pour engager",
        "about-section": "À PROPOS", "about-title": "Informations Personnelles",
        "personal-info-name": "Nom:", "personal-info-dob": "Date de Naissance:", "personal-info-dob-value": "9 mars 2007", "personal-info-location": "Localisation:", "personal-info-email": "Email:", "personal-info-phone": "Téléphone:",
        "experience-section": "EXPÉRIENCE & ACTIVITÉS", "theater-title": "Théâtre & Arts Performants",
        "cie-castel": "Cie Castel Troupe (Depuis 2020)", "cie-castel-desc": "Participant régulier à des représentations théâtrales, développant une forte présence sur scène et des compétences oratoires.",
        "circus-arts": "Arts Circassiens (Depuis 2020)", "circus-arts-desc": "Formé à diverses disciplines circassiennes incluant l'acrobatie et le jonglage.",
        "music-dev": "Musique & Développement Personnel", "bagpipe": "Musicien Cornemuseux (Depuis 2021)", "bagpipe-desc": "Musicien cornemuseux autodidacte avec expérience régulière de pratique et de performance.",
        "academic-title": "Engagement Académique & Communautaire",
        "fundraising": "Organisateurs de Campagne de Collecte de Fonds (2021-2022)", "fundraising-desc": "Moi et les élèves du collectif du foyer avons organisé une campagne réussie pour financer un voyage pour des personnes handicapées.",
        "eloquence": "Concours d'Éloquence (2022)", "eloquence-desc": "3e place au niveau départemental pour les compétences d'expression orale.",
        "projects-section": "MES PROJETS",
        "counter-label": "PROJETS",
        "tab-professional": "Professionnel", "tab-personal": "Personnel", "tab-academic": "Académique", "tab-school": "Scolaire",
        "skills-section": "COMPÉTENCES TECHNIQUES", "programming-langs": "Langages de Programmation",
        "python-desc": "Scripting avancé, automation et développement backend avec Python 3.11",
        "proficiency": "Maîtrise",
        "web-tech-desc": "HTML5, CSS3, JavaScript et principes de design responsif",
        "cpp-desc": "Programmation système et optimisation de performance avec C et C++",
        "system-devops": "Système & DevOps", "linux-admin-desc": "Gestion de serveurs, shell scripting et configuration système",
        "docker-desc": "Containerisation, création d'images et orchestration",
        "languages": "Langues", "french": "Français", "french-level": "Natif", "french-desc": "Courant en français écrit et parlé",
        "english": "Anglais", "english-level": "Courant", "english-desc": "Compétent en anglais technique et conversationnel",
        "soft-skills": "Compétences Transversales",
        "problem-solving": "Résolution de Problèmes", "problem-solving-desc": "Pensée analytique et approche créative",
        "team-collab": "Collaboration d'Équipe", "team-collab-desc": "Joueur d'équipe efficace avec de fortes compétences en communication",
        "adaptability": "Adaptabilité", "adaptability-desc": "Apprenant rapide avec capacité à s'adapter",
        "leadership": "Leadership", "leadership-desc": "Compétences de leadership éprouvées",
        "footer": "© 2026 Astro Portfolio | Tous droits réservés"
    },
    en: {
        "nav-home": "Home", "nav-current": "Current Project", "nav-about": "About",
        "nav-experience": "Experience", "nav-projects": "Projects", "nav-skills": "Skills", "nav-contact": "Contact",
        "home-title": "ASTRO PORTFOLIO",
        "typewriter-1": "PYTHON DEVELOPER", "typewriter-2": "SYSTEM ARCHITECT",
        "typewriter-3": "AUTOMATION SPECIALIST", "typewriter-4": "WEB DEVELOPER",
        "view-project-btn": "View Current Project",
        "system-init": "SYSTEM INITIALIZATION", "loading-assets": "Loading assets...", "access-terminal": "ACCESS TERMINAL",
        "current-section": "CURRENT PROJECT", "current-title": "Automated Event Logic Engine",
        "current-subtitle": "Target: \"Great Kraken Farm\" // Environment: GPO",
        "current-desc-1": "Currently engineering a high-performance automation script designed for complex event cycles within virtualized environments. Unlike standard macros, this system utilizes <strong style=\"color:var(--secondary)\">computer vision</strong> to detect state changes in real-time with sub-50ms latency.",
        "current-desc-2": "The architecture implements a finite state machine to handle exception flows (connection drops, player interference) ensuring 99.9% uptime without user intervention.",
        "visual-feed-offline": "[VISUAL FEED OFFLINE]", "system-active": "SYSTEM ACTIVE", "hover-engage": "Hover to engage",
        "about-section": "ABOUT", "about-title": "Personal Information",
        "personal-info-name": "Name:", "personal-info-dob": "Date of Birth:", "personal-info-dob-value": "March 9, 2007", "personal-info-location": "Location:", "personal-info-email": "Email:", "personal-info-phone": "Phone:",
        "experience-section": "EXPERIENCE & ACTIVITIES", "theater-title": "Theater & Performing Arts",
        "cie-castel": "Cie Castel Troupe (Since 2020)", "cie-castel-desc": "Regular participant in theater performances, developing strong public speaking skills, stage presence, and team cohesion.",
        "circus-arts": "Circus Arts (Since 2020)", "circus-arts-desc": "Trained in various circus disciplines including acrobatics and juggling.",
        "music-dev": "Music & Personal Development", "bagpipe": "Bagpipe Musician (Since 2021)", "bagpipe-desc": "Self-taught bagpipe player with regular practice and performance experience.",
        "academic-title": "Academic & Community Engagement",
        "fundraising": "Fundraising Campaign Organizers (2021-2022)", "fundraising-desc": "With my fellow students from the student center collective, we successfully organized a fundraising campaign to finance a trip for people with disabilities.",
        "eloquence": "Eloquence Contest (2022)", "eloquence-desc": "Awarded 3rd place at the departmental level for public speaking skills.",
        "projects-section": "MY PROJECTS",
        "counter-label": "PROJECTS",
        "tab-professional": "Professional", "tab-personal": "Personal", "tab-academic": "Academic", "tab-school": "School",
        "skills-section": "TECHNICAL SKILLS", "programming-langs": "Programming Languages",
        "python-desc": "Advanced scripting, automation, and backend development with Python 3.11",
        "proficiency": "Proficiency",
        "web-tech-desc": "HTML5, CSS3, JavaScript, and responsive design principles",
        "cpp-desc": "System programming and performance optimization with C and C++",
        "system-devops": "System & DevOps", "linux-admin-desc": "Server management, shell scripting, and system configuration",
        "docker-desc": "Containerization, image creation, and orchestration",
        "languages": "Languages", "french": "French", "french-level": "Native", "french-desc": "Fluent in both written and spoken French with excellent orthographic skills",
        "english": "English", "english-level": "Fluent", "english-desc": "Proficient in technical and conversational English, with strong writing skills",
        "soft-skills": "Soft Skills",
        "problem-solving": "Problem Solving", "problem-solving-desc": "Analytical thinking and creative problem-solving approach",
        "team-collab": "Team Collaboration", "team-collab-desc": "Effective team player with strong communication skills",
        "adaptability": "Adaptability", "adaptability-desc": "Quick learner with ability to adapt to new technologies",
        "leadership": "Leadership", "leadership-desc": "Proven leadership skills through organizing campaigns",
        "footer": "© 2026 Astro Portfolio | All rights reserved"
    }
};




const projectData = {
    professional: [
        {
            icon: 'fas fa-robot',
            title: { fr: 'Moteur de Logique d\'Événements Automatisé', en: 'Automated Event Logic Engine' },
            desc: { fr: 'Script d\'automation haute performance en Python utilisant la vision par ordinateur pour détecter les changements d\'état en temps réel avec une latence inférieure à 50ms.', en: 'High-performance automation script using Python that utilizes computer vision to detect state changes in real-time with sub-50ms latency.' },
            features: {
                fr: ['Vision par ordinateur avec latence < 50ms', 'Machine d\'état fini pour la gestion d\'exceptions', '99,9% de disponibilité sans intervention', 'Architecture AsyncIO haute performance'],
                en: ['Computer vision with sub-50ms latency', 'Finite state machine for exception handling', '99.9% uptime without user intervention', 'High-performance AsyncIO architecture']
            },
            badges: ['Python 3.11', 'OpenCV', 'Win32 API', 'AsyncIO']
        },
        {
            icon: 'fab fa-discord',
            title: { fr: 'Développement de Bot Discord', en: 'Discord Bot Development' },
            desc: { fr: 'Bot de modération et utilitaire en Python et discord.py gérant plus de 10 000 requêtes quotidiennement avec modération automatisée.', en: 'Moderation and utility bot using Python and discord.py handling over 10,000 daily requests with automated moderation.' },
            features: {
                fr: ['Plus de 10 000 requêtes/jour', 'Modération automatisée avancée', 'Filtrage de messages en temps réel', 'Gestion complète des utilisateurs'],
                en: ['Handles 10,000+ requests daily', 'Advanced automated moderation', 'Real-time message filtering', 'Complete user management system']
            },
            badges: ['Python', 'discord.py', 'SQLite']
        },
        {
            icon: 'fas fa-atom',
            title: { fr: 'SAE-GO - Système de Particules', en: 'SAE-GO - Particle System' },
            desc: { fr: 'Moteur de particules configurable en Go avec spawn aléatoire/fixe, accumulateur de spawn pour vitesses fractionnaires et extensions modulaires.', en: 'Configurable particle engine in Go with random/fixed spawn, accumulator for fractional spawn rates, and modular extensions.' },
            features: {
                fr: ['Spawn aléatoire ou fixe configurable', 'Accumulateur (ex: 0.5 particules/frame)', 'Tests unitaires complets', 'Extensions: gravité, collisions, souris'],
                en: ['Configurable random or fixed spawn', 'Accumulator (e.g. 0.5 particles/frame)', 'Comprehensive unit tests', 'Extensions: gravity, collisions, mouse mode']
            },
            badges: ['Go', 'JSON Config', 'Unit Tests']
        },
        {
            icon: 'fas fa-music',
            title: { fr: 'Music Bot Discord', en: 'Music Bot Discord' },
            desc: { fr: 'Bot Discord tout-en-un pour la musique avec support YouTube Music et Spotify, système de queue complet, contrôles interactifs et sauvegarde JSON automatique.', en: 'All-in-one Discord music bot with YouTube Music and Spotify support, complete queue system, interactive controls, and automatic JSON saving.' },
            features: {
                fr: ['YouTube Music & Spotify + playlists (100 titres)', 'Queue avec navigation par menu déroulant', 'Modes boucle (off/one/all) et shuffle', 'Contrôle du volume et boutons interactifs'],
                en: ['YouTube Music & Spotify + playlists (100 tracks)', 'Queue with dropdown menu navigation', 'Loop modes (off/one/all) and shuffle', 'Volume control and interactive buttons']
            },
            badges: ['Python', 'discord.py', 'Spotify API', 'FFmpeg']
        },
        {
            icon: 'fas fa-gavel',
            title: { fr: 'Prototype Site Web - Cabinet d\'Avocat', en: 'Law Firm Website Prototype' },
            desc: { fr: 'Prototype de site web professionnel pour Rebound Advisory, cabinet spécialisé dans les situations complexes, distressed M&A et restructuration avec design responsive et navigation multi-page.', en: 'Professional website prototype for Rebound Advisory, a law firm specializing in complex situations, distressed M&A, and restructuring with responsive design and multi-page navigation.' },
            features: {
                fr: ['Architecture multi-pages (accueil, clients, équipe, services)', 'Design responsive Tailwind CSS', 'Navigation dynamique et cohérente', 'Mise en page professionnelle avec sections services, clients, équipe'],
                en: ['Multi-page architecture (home, clients, team, services)', 'Responsive Tailwind CSS design', 'Dynamic and consistent navigation', 'Professional layout with services, clients, team sections']
            },
            badges: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript']
        },
        {
            icon: 'fas fa-utensils',
            title: { fr: 'Plateforme de Signalement CROUS', en: 'CROUS Reporting Platform' },
            desc: { fr: 'Application web full-stack pour signaler les problèmes de cuisine et conditions de vie au CROUS avec backend FastAPI/Python, intégration Discord et stockage JSON persistant.', en: 'Full-stack web application for reporting kitchen issues and living conditions at CROUS with FastAPI/Python backend, Discord integration, and persistent JSON storage.' },
            features: {
                fr: ['Frontend responsive HTML/CSS/JavaScript', 'Backend FastAPI avec middleware CORS', 'Intégration Discord selfbot pour remontées de rapports', 'Stockage persistant des rapports en JSON', 'Gestion des uploads de fichiers avec aiofiles', 'Déploiement Heroku avec environnement variables'],
                en: ['Responsive HTML/CSS/JavaScript frontend', 'FastAPI backend with CORS middleware', 'Discord selfbot integration for report notifications', 'Persistent JSON-based report storage', 'File uploads handling with aiofiles', 'Heroku deployment with environment variables']
            },
            badges: ['FastAPI', 'Python', 'Discord.py', 'HTML5', 'CSS3', 'JSON']
        }
    ],
    personal: [
        {
            icon: 'fas fa-server',
            title: { fr: 'Laboratoire Réseau Personnel', en: 'Self-Hosted Home Lab' },
            desc: { fr: 'Configuration complète d\'un serveur personnel sur Raspberry Pi avec dockerisation, Nginx Proxy Manager, Pi-Hole DNS et Portainer.', en: 'Complete home server setup on Raspberry Pi with Docker containerization, Nginx Proxy Manager, Pi-Hole DNS, and Portainer.' },
            features: {
                fr: ['Raspberry Pi avec Docker Compose', 'Nginx Proxy Manager + SSL', 'Pi-Hole DNS pour blocage publicités', 'Portainer pour gestion des containers'],
                en: ['Raspberry Pi with Docker Compose', 'Nginx Proxy Manager + SSL', 'Pi-Hole DNS for ad blocking', 'Portainer for container management']
            },
            badges: ['Raspberry Pi', 'Docker', 'Nginx', 'Pi-Hole']
        },
        {
            icon: 'fas fa-globe',
            title: { fr: 'Développement de Portfolio', en: 'Portfolio Development' },
            desc: { fr: 'Plusieurs versions de sites portfolio personnels en HTML5, CSS3 et JavaScript avec différentes approches de design et éléments interactifs.', en: 'Multiple versions of personal portfolio websites using HTML5, CSS3, and JavaScript with different design approaches and interactive elements.' },
            features: {
                fr: ['Multiples versions et approches design', 'Animations CSS et effets interactifs', 'Design responsif mobile-first', 'Fond matriciel animé avec canvas'],
                en: ['Multiple versions and design approaches', 'CSS animations and interactive effects', 'Mobile-first responsive design', 'Animated matrix background with canvas']
            },
            badges: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API']
        },
        {
            icon: 'fas fa-calendar-alt',
            title: { fr: 'InfoCalendar - Calendrier de l\'Avent Interactif', en: 'InfoCalendar - Interactive Advent Calendar' },
            desc: { fr: 'Calendrier de l\'Avent thématique "BUT & Chill" avec contenu ludique et éducatif pour chaque jour, interface dynamique avec modal et syntaxe coloriée.', en: 'Thematic advent calendar "BUT & Chill" featuring fun and educational content for each day with dynamic interface, modal system, and syntax highlighting.' },
            features: {
                fr: ['24 portes interactives du calendrier', 'Types de contenu multiples (code, images, faits)', 'Coloration syntaxique du code Python', 'Contenu thématique: algorithmes SAT/DPLL', 'Effets visuels festifs avec effet matrix', 'Interface responsive avec typewriter effect'],
                en: ['24 interactive advent calendar doors', 'Multiple content types (code, images, facts)', 'Python code syntax highlighting', 'Thematic content: SAT/DPLL algorithms', 'Festive visual effects with matrix theme', 'Responsive interface with typewriter effect']
            },
            badges: ['HTML5', 'CSS3', 'JavaScript', 'highlight.js']
        },
        {
            icon: 'fas fa-coins',
            title: { fr: 'CoinBot - Bot Discord Économie', en: 'CoinBot - Discord Economy Bot' },
            desc: { fr: 'Bot Discord avec système d\'économie complet : boutique personnalisée, gestion de monnaie virtuelle, quêtes journalières et base de données SQLite pour la persistance des données.', en: 'Discord bot with complete economy system: custom shop, virtual currency management, daily quests, and SQLite database for persistent data storage.' },
            features: {
                fr: ['Système de monnaie virtuelle avec pièces', 'Boutique d\'items cosmétiques (potions, voitures, manoirs)', 'Commandes slash avec discord.py', 'Base de données SQLite asynchrone', 'Gestion des guildes et des utilisateurs', 'Quêtes et récompenses personnalisées'],
                en: ['Virtual currency system with coins', 'Cosmetic shop (potions, cars, mansions)', 'Slash commands with discord.py', 'Asynchronous SQLite database', 'Guild and user management', 'Custom quests and rewards']
            },
            badges: ['Python', 'discord.py', 'SQLite', 'Async']
        },
        {
            icon: 'fas fa-gamepad',
            title: { fr: 'Macros Roblox - Automation OCR', en: 'Roblox Macros - OCR Automation' },
            desc: { fr: 'Suite de macros pour Roblox (Grand Piece Online, Pika) avec système OCR Tesseract pour la détection de UI, repositionnement intelligent, intégration webhook Discord et automation avancée.', en: 'Suite of Roblox macros (Grand Piece Online, Pika) with Tesseract OCR system for UI detection, smart repositioning, Discord webhook integration, and advanced automation.' },
            features: {
                fr: ['OCR Tesseract pour reconnaissance UI en temps réel', 'Interface GUI avec customtkinter', 'Repositionnement intelligent basé sur détection OCR', 'Intégration webhook Discord pour notifications', 'Support multi-jeux Roblox', 'Configuration persistante en JSON', 'Automation contrôlée au clavier'],
                en: ['Tesseract OCR for real-time UI recognition', 'GUI interface with customtkinter', 'Smart repositioning based on OCR detection', 'Discord webhook integration for notifications', 'Multi-game Roblox support', 'Persistent JSON configuration', 'Controlled keyboard automation']
            },
            badges: ['Python', 'Tesseract', 'OpenCV', 'PyDirect Input', 'Discord API']
        },
        {
            icon: 'fas fa-keyboard',
            title: { fr: 'Macro Recorder - Enregistrement d\'Actions', en: 'Macro Recorder - Action Recording' },
            desc: { fr: 'Outil d\'enregistrement de macros en temps réel : enregistre les clics et appuis clavier (F8 pour démarrer/arrêter) et génère automatiquement des scripts Python exécutables.', en: 'Real-time macro recording tool: records mouse clicks and keyboard presses (F8 to start/stop) and automatically generates executable Python scripts.' },
            features: {
                fr: ['Enregistrement en temps réel des clics et touches', 'Horodatage précis des actions', 'Génération automatique de scripts Python', 'Sauvegarde avec timestamp unique', 'Playback capable via pynput', 'Interface simple avec pynput listener'],
                en: ['Real-time recording of clicks and keys', 'Precise action timestamping', 'Automatic Python script generation', 'Saving with unique timestamp', 'Playback capable via pynput', 'Simple interface with pynput listener']
            },
            badges: ['Python', 'pynput', 'Recording', 'Automation']
        },
        {
            icon: 'fas fa-robot',
            title: { fr: 'Trading Bots & Requêtes IA Automatisées', en: 'Trading Bots & Automated AI Requests' },
            desc: { fr: 'Développement de bots trading multi-tokens avec manipulation de marché et système d\'auto-réponses alimentées par IA pour automatisation d\'interactions sur Discord et jeux en ligne.', en: 'Development of multi-token trading bots with market manipulation and AI-powered auto-response systems for automating interactions on Discord and online games.' },
            features: {
                fr: ['Bots multi-tokens pour spam/manipulation de marché', 'Requêtes IA automatisées pour réponses intelligentes', 'Auto-reply Discord avec délais configurables', 'Gestion de comptes multiples en parallèle', 'Système de requêtes à API externes', 'Configurations persistantes'],
                en: ['Multi-token bots for spam/market manipulation', 'Automated AI requests for intelligent responses', 'Discord auto-reply with configurable delays', 'Multi-account management in parallel', 'External API request system', 'Persistent configurations']
            },
            badges: ['Python', 'discord.py', 'API Integration', 'Automation']
        },
        {
            icon: 'fas fa-network-wired',
            title: { fr: 'Scripts DOS & Réseau - Outils de Pentest', en: 'DOS & Network Scripts - Pentest Tools' },
            desc: { fr: 'Suite d\'outils éducatifs de pentest réseau : scripts de déni de service (DOS/DDOS), attack wifi, manipulation de flux réseau et tests d\'infrastructure pour apprentissage en cybersécurité.', en: 'Suite of educational network pentest tools: denial of service scripts (DOS/DDOS), WiFi attacks, network flow manipulation, and infrastructure testing for cybersecurity learning.' },
            features: {
                fr: ['Scripts DOS/DDOS multi-type (type1, type2)', 'Attacks WiFi avec paramètres configurables', 'Manipulation de flux réseau', 'Tests d\'infrastructure réseau', 'Outils à usage éducatif/laboratoire', 'Documentation technique complète'],
                en: ['Multi-type DOS/DDOS scripts (type1, type2)', 'WiFi attacks with configurable parameters', 'Network flow manipulation', 'Network infrastructure testing', 'Educational/lab usage tools', 'Complete technical documentation']
            },
            badges: ['Python', 'Networking', 'Security', 'Scapy']
        },
        {
            icon: 'fas fa-music',
            title: { fr: 'YouTube Music Downloader', en: 'YouTube Music Downloader' },
            desc: { fr: 'Outil de téléchargement de playlists YouTube Music en format MP4 avec compression audio haute qualité, gestion d\'erreurs robuste et support des autres plateformes via yt-dlp.', en: 'YouTube Music playlist downloader supporting MP4 format with high-quality audio compression, robust error handling, and support for other platforms via yt-dlp.' },
            features: {
                fr: ['Téléchargement de playlists YouTube Music en MP4', 'Meilleure qualité vidéo + audio combinés', 'Limitation configurable du nombre de titres', 'Gestion des erreurs avec extraction continues', 'Support multi-plateformes via yt-dlp', 'Création automatique du dossier de destination', 'Format compatible avec tous les lecteurs'],
                en: ['YouTube Music playlist download in MP4', 'Best video + audio quality combined', 'Configurable title limit', 'Error handling with continuous extraction', 'Multi-platform support via yt-dlp', 'Automatic destination folder creation', 'Universal player compatibility']
            },
            badges: ['Python', 'yt-dlp', 'YouTube API', 'Audio Processing']
        },
        {
            icon: 'fas fa-user-plus',
            title: { fr: 'Discord Account Generator', en: 'Discord Account Generator' },
            desc: { fr: 'Outil d\'automation semi-automatique pour la création en masse de comptes Discord avec génération intelligente d\'identifiants, utilisant Selenium pour le web scraping et l\'automation de formulaires.', en: 'Semi-automatic bulk Discord account creation tool with intelligent identifier generation, using Selenium for web scraping and form automation.' },
            features: {
                fr: ['Génération automatique de usernames & passwords', 'Génération intelligente d\'emails (support proxy)', 'Date de naissance aléatoire', 'Automation Selenium avec Chrome WebDriver', 'Bypasse anti-automation Discord (headless mode masqué)', 'Extraction automatique des tokens OAuth', 'Support des proxies pour éviter les bans IP', 'Sauvegarde des comptes créés en fichier texte'],
                en: ['Automatic username & password generation', 'Smart email generation (proxy support)', 'Random date of birth', 'Selenium automation with Chrome WebDriver', 'Discord anti-automation bypass (masked headless mode)', 'Automatic OAuth token extraction', 'Proxy support for IP ban avoidance', 'Created accounts saved to text file']
            },
            badges: ['Python', 'Selenium', 'Chrome WebDriver', 'Web Automation']
        }
    ],
    academic: [
        {
            icon: 'fas fa-graduation-cap',
            title: { fr: 'Études en Informatique', en: 'Computer Science Studies' },
            desc: { fr: 'Licence Informatique à l\'Université de Nantes avec focus sur l\'ingénierie logicielle et l\'architecture système.', en: 'Bachelor\'s degree in Computer Science at Nantes University with a focus on software engineering and system architecture.' },
            features: {
                fr: ['Programmation et algorithmique avancée', 'Structures de données et complexité', 'Architecture logicielle et systèmes', 'Projets SAE collaboratifs'],
                en: ['Advanced programming and algorithms', 'Data structures and complexity', 'Software and system architecture', 'Collaborative SAE projects']
            },
            badges: ['C', 'Java', 'Go', 'SQL', 'Algorithms']
        },
        {
            icon: 'fas fa-microchip',
            title: { fr: 'Projets Lycée STI2D', en: 'High School STI2D Projects' },
            desc: { fr: 'Divers projets techniques en STI2D incluant prototypage électronique, exercices de programmation et projets de conception de systèmes.', en: 'Various technical projects during STI2D studies including electronics prototyping, programming assignments, and system design projects.' },
            features: {
                fr: ['Prototypage électronique', 'Programmation embarquée', 'Conception de systèmes', 'Projets pluridisciplinaires'],
                en: ['Electronics prototyping', 'Embedded programming', 'System design projects', 'Multidisciplinary projects']
            },
            badges: ['STI2D', 'Electronics', 'CAD', 'Arduino']
        }
    ],
    school: [
        {
            icon: 'fas fa-book',
            title: { fr: 'Projets Scolaires Divers', en: 'Various School Projects' },
            desc: { fr: 'Collection de projets réalisés lors de ma scolarité : projets d\'informatique, travaux pratiques et études de cas en classe.', en: 'Collection of projects completed during my schooling: computer science projects, practical work, and in-class case studies.' },
            features: {
                fr: ['Projets pluridisciplinaires', 'Travaux pratiques informatiques', 'Études de cas techniques', 'Apprentissage fondamental'],
                en: ['Multidisciplinary projects', 'Computer science practical work', 'Technical case studies', 'Fundamental learning']
            },
            badges: ['School', 'Learning', 'Fundamentals']
        },
        {
            icon: 'fas fa-code',
            title: { fr: 'Go Practical Work - Polytech Nantes PEIP', en: 'Go Practical Work - Polytech Nantes PEIP' },
            desc: { fr: 'Travaux pratiques complets en Go : manipulation de fichiers, structures de données, algorithmes de recherche/tri, récursivité et gestion de pointeurs sur plusieurs niveaux de difficulté.', en: 'Comprehensive Go practical work: file manipulation, data structures, search/sort algorithms, recursion, and pointer management across multiple difficulty levels.' },
            features: {
                fr: ['TP Fichiers : lecture/écriture en Go', 'TP Structures : niveaux 0-3 progressifs', 'TP Tri : algorithmes de tri (niveaux 0-3)', 'TP Récursivité : 20+ exercices (factorielle, Syracuse, palindrome)', 'TP Pointeurs : gestion mémoire Go', 'TP Recherche : algorithmes de recherche', 'TDs avec exercices d\'application', 'CMs théoriques C et algorithmes de base'],
                en: ['File TP: Read/write operations in Go', 'Structures TP: Progressive levels 0-3', 'Sort TP: Sorting algorithms (levels 0-3)', 'Recursion TP: 20+ exercises (factorial, Syracuse, palindrome)', 'Pointers TP: Go memory management', 'Search TP: Search algorithms', 'TDs with application exercises', 'CMs theory: C and basic algorithms']
            },
            badges: ['Go', 'Algorithms', 'Data Structures', 'Polytech Nantes']
        },
        {
            icon: 'fas fa-particle',
            title: { fr: 'SAE Projet Particules - Moteur 2D Go', en: 'SAE Particle System - Go 2D Engine' },
            desc: { fr: 'Situation d\'Apprentissage Évalué : système de particules 2D interactif développé en Go avec ebiten, gestion de configuration JSON, chargement d\'assets et rendu en temps réel.', en: 'Evaluated Learning Situation: Interactive 2D particle system developed in Go with ebiten, JSON configuration management, asset loading, and real-time rendering.' },
            features: {
                fr: ['Framework ebiten pour rendu 2D', 'Système de particules configurable', 'Gestion de fichiers de configuration (JSON)', 'Chargement dynamique d\'assets (images)', 'Mise à jour et rendu temps réel', 'Architecture modulaire (config, assets, particles)', 'Gestion de fenêtres ebiten'],
                en: ['Ebiten framework for 2D rendering', 'Configurable particle system', 'Configuration file management (JSON)', 'Dynamic asset loading (images)', 'Real-time update and rendering', 'Modular architecture (config, assets, particles)', 'Ebiten window management']
            },
            badges: ['Go', 'ebiten', 'Game Engine', 'Graphics']
        },
        {
            icon: 'fas fa-robot',
            title: { fr: 'Bot Trading Pandas - Polytech Nantes PEIP D', en: 'Trading Bot with Pandas - Polytech PEIP D' },
            desc: { fr: 'Projet d\'apprentissage en trading algorithmique : développement d\'un bot trading utilisant pandas pour l\'analyse de données boursières, calcul d\'indicateurs techniques et stratégies de trading automatisées.', en: 'Algorithmic trading learning project: development of a trading bot using pandas for stock market data analysis, technical indicator calculation, and automated trading strategies.' },
            features: {
                fr: ['Analyse de données avec pandas', 'Récupération de données boursières (APIs)', 'Calcul d\'indicateurs techniques (SMA, RSI, MACD)', 'Stratégies de trading automatisées', 'Backtesting de stratégies', 'Visualisation de données (matplotlib)', 'Gestion de portefeuille simulé', 'Logging et reporting des transactions'],
                en: ['Data analysis with pandas', 'Stock market data fetching (APIs)', 'Technical indicator calculation (SMA, RSI, MACD)', 'Automated trading strategies', 'Strategy backtesting', 'Data visualization (matplotlib)', 'Simulated portfolio management', 'Transaction logging and reporting']
            },
            badges: ['Python', 'pandas', 'Trading', 'Polytech Nantes']
        },
        {
            icon: 'fas fa-layer-group',
            title: { fr: 'Programmation Orientée Objet - Kotlin', en: 'Object-Oriented Programming - Kotlin' },
            desc: { fr: 'TP complets en Kotlin (R201) : implémentation de diagrammes UML, héritage de classe, polymorphisme, tests unitaires JUnit et projets de gestion de personnages/objets.', en: 'Complete Kotlin TP (R201): UML diagram implementation, class inheritance, polymorphism, JUnit unit testing, and character/object management projects.' },
            features: {
                fr: ['TP5 : Héritage et diagrammes UML', 'TP5 Exercice 1 : implémentation classes C, C1, C2 avec héritage', 'TP6 Exercice 1 : système Personnage/Magicien avec équipement et sorts', 'TP6 Exercice 2 : système de messagerie (Message, Signal, WhatsApp)', 'Inventaire et gestion d\'équipements (armes, armures)', 'Tests unitaires avec JUnit et tests UML', 'Diagrammes de classes UML', 'IntelliJ IDEA avec Gradle build system'],
                en: ['TP5: Inheritance and UML diagrams', 'TP5 Exercise 1: Implementation of C, C1, C2 classes with inheritance', 'TP6 Exercise 1: Personnage/Magicien system with equipment and spells', 'TP6 Exercise 2: Messaging system (Message, Signal, WhatsApp)', 'Inventory and equipment management (weapons, armor)', 'Unit testing with JUnit and UML tests', 'UML class diagrams', 'IntelliJ IDEA with Gradle build system'],
            },
            badges: ['Kotlin', 'OOP', 'UML', 'JUnit', 'Gradle']
        }
    ]
};




let currentCat = 'professional';
let currentIndex = 0;

const track = document.getElementById('carousel-track');
const pagination = document.getElementById('carousel-pagination');
const prevBtn = document.getElementById('arrow-prev');
const nextBtn = document.getElementById('arrow-next');
const progressFill = document.getElementById('progress-fill');
const counterCurrent = document.getElementById('counter-current');
const counterTotal = document.getElementById('counter-total');

function buildCards(cat, lang) {
    const projects = projectData[cat];
    track.innerHTML = '';
    projects.forEach((p, idx) => {
        const card = document.createElement('div');
        card.className = 'proj-card';
        const featuresHtml = p.features[lang].map(f => `<li>${f}</li>`).join('');
        const badgesHtml = p.badges.map(b => `<span class="proj-badge">${b}</span>`).join('');
        card.innerHTML = `
            <div class="proj-card-header">
                <span class="proj-card-num">${String(idx+1).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}</span>
                <div class="proj-card-icon"><i class="${p.icon}"></i></div>
            </div>
            <div class="proj-card-body">
                <div class="proj-card-title">${p.title[lang]}</div>
                <p class="proj-card-desc">${p.desc[lang]}</p>
                <ul class="proj-features">${featuresHtml}</ul>
                <div class="proj-card-badges">${badgesHtml}</div>
            </div>`;
        track.appendChild(card);
    });
}

function buildDots(total) {
    pagination.innerHTML = '';
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goTo(i));
        pagination.appendChild(dot);
    }
}

function updateUI() {
    const total = projectData[currentCat].length;
    const cardWidth = track.parentElement.offsetWidth;

    
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    
    document.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === currentIndex);
    });

    
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= total - 1;

    
    const pct = total <= 1 ? 100 : (currentIndex / (total - 1)) * 100;
    progressFill.style.width = pct + '%';

    
    counterCurrent.textContent = String(currentIndex + 1).padStart(2, '0');
    counterTotal.textContent = `/ ${String(total).padStart(2, '0')}`;
    counterCurrent.style.transform = 'scale(1.25)';
    counterCurrent.style.transition = 'transform 0.15s ease';
    setTimeout(() => {
        counterCurrent.style.transform = 'scale(1)';
    }, 150);
}

function goTo(idx) {
    const total = projectData[currentCat].length;
    currentIndex = Math.max(0, Math.min(idx, total - 1));
    updateUI();
}

function initCarousel(cat, lang) {
    currentCat = cat;
    currentIndex = 0;
    buildCards(cat, lang);
    buildDots(projectData[cat].length);
    
    setTimeout(() => updateUI(), 20);
}

prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
nextBtn.addEventListener('click', () => goTo(currentIndex + 1));


document.addEventListener('keydown', e => {
    const section = document.getElementById('projects');
    if (section.classList.contains('is-active')) {
        if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
        if (e.key === 'ArrowRight') goTo(currentIndex + 1);
    }
});


let touchStartX = 0;
track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goTo(currentIndex + 1) : goTo(currentIndex - 1);
});


document.querySelectorAll('.proj-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.proj-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        track.style.opacity = '0';
        setTimeout(() => {
            initCarousel(tab.dataset.cat, currentLanguage);
            track.style.transition = 'none';
            track.style.opacity = '0';
            setTimeout(() => {
                track.style.transition = 'transform 0.6s cubic-bezier(0.77, 0, 0.175, 1)';
                track.style.opacity = '1';
            }, 30);
        }, 180);
    });
});

let carouselViewportWidth = Math.round(window.innerWidth || document.documentElement.clientWidth || 0);
window.addEventListener('resize', () => {
    const nextViewportWidth = Math.round(window.innerWidth || document.documentElement.clientWidth || 0);
    if (Math.abs(nextViewportWidth - carouselViewportWidth) < 2) return;

    carouselViewportWidth = nextViewportWidth;
    buildDots(projectData[currentCat].length);
    setTimeout(() => updateUI(), 50);
}, { passive: true });




let currentLanguage = localStorage.getItem('portfolio-language') || 'fr';

function updateLanguage(lang) {
    document.body.classList.add('switching');
    setTimeout(() => {
        currentLanguage = lang;
        localStorage.setItem('portfolio-language', lang);
        document.querySelectorAll('[data-text-key]').forEach(el => {
            const key = el.getAttribute('data-text-key');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById('lang-' + lang).classList.add('active');
        window.words = [
            translations[lang]['typewriter-1'], translations[lang]['typewriter-2'],
            translations[lang]['typewriter-3'], translations[lang]['typewriter-4']
        ];
        typewriterIndex = 0;
        
        const activeCat = document.querySelector('.proj-tab.active')?.dataset.cat || 'professional';
        initCarousel(activeCat, lang);
        document.body.classList.remove('switching');
        document.body.classList.add('switched');
        setTimeout(() => document.body.classList.remove('switched'), 400);
    }, 200);
}

document.getElementById('lang-fr').addEventListener('click', () => updateLanguage('fr'));
document.getElementById('lang-en').addEventListener('click', () => updateLanguage('en'));

const videoBlobUrlCache = new Map();
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const shouldAvoidHeavyPreload = Boolean(connection?.saveData);

function getVideoObjectUrl(source) {
    if (!window.fetch || !window.URL || !window.URL.createObjectURL) {
        return Promise.resolve(source);
    }

    if (!videoBlobUrlCache.has(source)) {
        videoBlobUrlCache.set(
            source,
            fetch(source, { cache: 'force-cache' })
                .then((response) => {
                    if (!response.ok) throw new Error(`Video load failed: ${source}`);
                    return response.blob();
                })
                .then((blob) => URL.createObjectURL(blob))
                .catch(() => source)
        );
    }

    return videoBlobUrlCache.get(source);
}

function resolveVideoSource(source, options = {}) {
    const preferBlob = options.preferBlob ?? false;
    if (!preferBlob || shouldAvoidHeavyPreload) return Promise.resolve(source);
    return getVideoObjectUrl(source);
}

const finePointerMedia = window.matchMedia('(hover: hover) and (pointer: fine)');
const mobileViewportMedia = window.matchMedia('(max-width: 768px), (pointer: coarse)');
let viewportVarsRaf = 0;
let pendingViewportForce = false;
let appViewportWidth = Math.max(1, Math.round(window.innerWidth || document.documentElement.clientWidth || 1));
let appViewportHeight = Math.max(1, Math.round(window.innerHeight || document.documentElement.clientHeight || 1));

function readLayoutViewport() {
    return {
        width: Math.max(1, Math.round(window.innerWidth || document.documentElement.clientWidth || 1)),
        height: Math.max(1, Math.round(window.innerHeight || document.documentElement.clientHeight || 1))
    };
}

function shouldAcceptViewportSize(nextViewport, force = false) {
    if (force) return true;

    const widthDelta = Math.abs(nextViewport.width - appViewportWidth);
    const heightDelta = Math.abs(nextViewport.height - appViewportHeight);
    if (!mobileViewportMedia.matches) return widthDelta > 2 || heightDelta > 2;

    const majorMobileHeightChange = Math.max(120, appViewportHeight * 0.18);
    return widthDelta > 2 || heightDelta > majorMobileHeightChange;
}

function getViewportWidth() {
    return appViewportWidth;
}

function getViewportHeight() {
    return appViewportHeight;
}

function commitViewportVars() {
    document.documentElement.style.setProperty('--app-width', `${appViewportWidth}px`);
    document.documentElement.style.setProperty('--app-height', `${appViewportHeight}px`);
    document.body?.classList.toggle('is-touch-layout', !finePointerMedia.matches);
    document.body?.classList.toggle('is-mobile-layout', mobileViewportMedia.matches);
}

function updateViewportVars(force = false) {
    viewportVarsRaf = 0;
    const nextViewport = readLayoutViewport();
    const accepted = shouldAcceptViewportSize(nextViewport, force);

    if (accepted) {
        appViewportWidth = nextViewport.width;
        appViewportHeight = nextViewport.height;
    }

    commitViewportVars();
    return accepted;
}

function queueViewportVarsUpdate(force = false) {
    pendingViewportForce = pendingViewportForce || force;
    if (viewportVarsRaf) return;
    viewportVarsRaf = window.requestAnimationFrame(() => {
        const forceUpdate = pendingViewportForce;
        pendingViewportForce = false;
        updateViewportVars(forceUpdate);
    });
}

updateViewportVars(true);
window.addEventListener('resize', queueViewportVarsUpdate, { passive: true });
window.addEventListener('orientationchange', () => window.setTimeout(() => queueViewportVarsUpdate(true), 180), { passive: true });

function initScrollStory() {
    const root = document.getElementById('scroll-experience');
    const sections = Array.from(root?.querySelectorAll(':scope > section, :scope > footer') || []);
    if (!root || !sections.length) return;

    const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobileViewport = mobileViewportMedia.matches;

    function setActiveSection(id) {
        document.body.dataset.activePanel = id;
        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
        sections.forEach((section) => {
            section.classList.toggle('is-active', section.id === id);
            section.style.pointerEvents = section.id === id ? 'auto' : 'none';
        });
    }

    function revealTargets(section) {
        return Array.from(section.querySelectorAll([
            ':scope > .section-title',
            ':scope > h1',
            ':scope > .typewriter-box',
            ':scope > .home-cta',
            ':scope > .glass-panel',
            ':scope > .proj-tabs',
            ':scope > .carousel-counter',
            ':scope > .carousel-outer',
            ':scope > .footer-bubble-container',
            ':scope > .socials',
            ':scope > p'
        ].join(', ')));
    }

    const backgroundRoot = document.getElementById('story-background');
    const backgroundLayers = [];
    const sequenceCanvas = backgroundRoot ? document.createElement('canvas') : null;
    if (sequenceCanvas) {
        sequenceCanvas.id = 'story-sequence-canvas';
        sequenceCanvas.setAttribute('aria-hidden', 'true');
        backgroundRoot.appendChild(sequenceCanvas);
    }

    let mobileAmbientVideo = null;
    let mobileVideoSeekRaf = 0;
    let mobilePlayRequested = false;
    let mobileVideoIdleTimer = 0;
    function scheduleMobileAmbientPause(delay = 620) {
        window.clearTimeout(mobileVideoIdleTimer);
        mobileVideoIdleTimer = window.setTimeout(() => {
            if (!mobileAmbientVideo) return;
            mobileAmbientVideo.pause();
            mobilePlayRequested = false;
        }, delay);
    }

    function playMobileAmbientVideo() {
        if (!mobileAmbientVideo) return;
        if (mobilePlayRequested) {
            scheduleMobileAmbientPause();
            return;
        }

        mobilePlayRequested = true;

        const playPromise = mobileAmbientVideo.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {
                mobilePlayRequested = false;
            });
        }
        scheduleMobileAmbientPause();
    }

    function syncMobileAmbientVideo(progress, force = false) {
        if (!mobileAmbientVideo || !Number.isFinite(mobileAmbientVideo.duration) || mobileAmbientVideo.duration <= 0) return;

        const duration = Math.max(0.1, mobileAmbientVideo.duration - 0.08);
        const safeProgress = Math.max(0, Math.min(1, progress || 0));
        const targetTime = Math.max(0.02, Math.min(duration, safeProgress * duration));
        const timeDelta = Math.abs(mobileAmbientVideo.currentTime - targetTime);

        if (!force && timeDelta < 0.42) return;
        if (mobileVideoSeekRaf) return;

        mobileVideoSeekRaf = window.requestAnimationFrame(() => {
            mobileVideoSeekRaf = 0;
            if (!mobileAmbientVideo) return;

            try {
                mobileAmbientVideo.currentTime = targetTime;
                if (mobileAmbientVideo.paused && targetTime < duration - 0.1) {
                    mobilePlayRequested = false;
                    playMobileAmbientVideo();
                } else {
                    scheduleMobileAmbientPause();
                }
            } catch (_) {
                // Some mobile browsers ignore seeks while the video is still warming up.
            }
        });
    }

    if (backgroundRoot && isMobileViewport && !prefersReducedMotion) {
        mobileAmbientVideo = document.createElement('video');
        mobileAmbientVideo.id = 'story-sequence-video';
        mobileAmbientVideo.setAttribute('aria-hidden', 'true');
        mobileAmbientVideo.muted = true;
        mobileAmbientVideo.loop = false;
        mobileAmbientVideo.playsInline = true;
        mobileAmbientVideo.preload = 'auto';
        mobileAmbientVideo.playbackRate = 0.62;
        mobileAmbientVideo.disableRemotePlayback = true;
        mobileAmbientVideo.setAttribute('muted', '');
        mobileAmbientVideo.setAttribute('playsinline', '');
        backgroundRoot.appendChild(mobileAmbientVideo);

        mobileAmbientVideo.addEventListener('canplay', () => {
            backgroundRoot.classList.add('mobile-ambient-ready', 'sequence-ready');
            syncMobileAmbientVideo(0, true);
        }, { once: true });
        mobileAmbientVideo.addEventListener('ended', () => {
            mobilePlayRequested = false;
            try {
                mobileAmbientVideo.currentTime = Math.max(0, mobileAmbientVideo.duration - 0.08);
            } catch (_) {}
        });

        document.getElementById('start-btn')?.addEventListener('click', playMobileAmbientVideo, { once: true });
        window.addEventListener('touchstart', playMobileAmbientVideo, { once: true, passive: true });

        resolveVideoSource('assets/scroll-sequence-1080p.mp4', { preferBlob: false }).then((videoSource) => {
            if (!mobileAmbientVideo) return;
            mobileAmbientVideo.src = videoSource;
            mobileAmbientVideo.load();
        });
    }

    function createVideoScrollSequence(canvas, source) {
        const context = canvas.getContext('2d', { alpha: false, desynchronized: true });
        const host = canvas.parentElement;
        const video = document.createElement('video');
        let dpr = 1;
        let duration = 1;
        let pendingTime = 0;
        let seeking = false;
        let drawRaf = 0;
        let lastDrawnTime = -1;
        let ready = false;

        video.preload = 'auto';
        video.muted = true;
        video.playsInline = true;
        video.setAttribute('muted', '');
        video.setAttribute('playsinline', '');
        video.disableRemotePlayback = true;

        function resize() {
            dpr = Math.min(window.devicePixelRatio || 1, 1.5);
            const width = Math.max(1, Math.floor(getViewportWidth() * dpr));
            const height = Math.max(1, Math.floor(getViewportHeight() * dpr));

            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
                requestDraw(true);
            }
        }

        function drawCoverVideo() {
            if (!video.videoWidth || !video.videoHeight) return;

            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const scale = Math.max(canvasWidth / video.videoWidth, canvasHeight / video.videoHeight);
            const width = video.videoWidth * scale;
            const height = video.videoHeight * scale;
            const x = (canvasWidth - width) / 2;
            const y = (canvasHeight - height) / 2;

            context.fillStyle = '#000';
            context.fillRect(0, 0, canvasWidth, canvasHeight);
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = 'medium';
            context.drawImage(video, x, y, width, height);
            lastDrawnTime = video.currentTime;
            host?.classList.add('sequence-ready');
        }

        function requestDraw(force = false) {
            if (!force && Math.abs(video.currentTime - lastDrawnTime) < 0.002) return;
            if (drawRaf) return;

            drawRaf = window.requestAnimationFrame(() => {
                drawRaf = 0;
                drawCoverVideo();
            });
        }

        function seekTo(time) {
            pendingTime = Math.max(0, Math.min(time, Math.max(0.001, duration - 0.001)));
            if (!ready || !Number.isFinite(video.duration) || !video.duration) return;
            if (seeking) return;

            if (Math.abs(video.currentTime - pendingTime) < 1 / 120) {
                requestDraw();
                return;
            }

            seeking = true;
            video.currentTime = pendingTime;
        }

        video.addEventListener('loadedmetadata', () => {
            duration = video.duration || duration;
            ready = true;
            resize();
            seekTo(pendingTime);
        });

        video.addEventListener('loadeddata', () => requestDraw(true));
        video.addEventListener('canplay', () => requestDraw(true));
        video.addEventListener('seeked', () => {
            seeking = false;
            requestDraw(true);
            if (Math.abs(video.currentTime - pendingTime) >= 1 / 120) {
                seekTo(pendingTime);
            }
        });

        resize();
        resolveVideoSource(source, { preferBlob: true }).then((videoSource) => {
            video.src = videoSource;
            video.load();
        });

        return {
            resize,
            renderProgress(progress) {
                const safeProgress = Math.max(0, Math.min(1, progress || 0));
                seekTo(safeProgress * duration);
            }
        };
    }

    const scrollSequence = sequenceCanvas && !isMobileViewport
        ? createVideoScrollSequence(sequenceCanvas, 'assets/scroll-sequence-1080p.mp4')
        : null;

    function setBackground(index, immediate = false) {
        if (!backgroundLayers.length) return;
        const safeIndex = Math.max(0, Math.min(index, backgroundLayers.length - 1));

        if (window.gsap && !immediate) {
            window.gsap.to(backgroundLayers, {
                opacity: (layerIndex) => layerIndex === safeIndex ? 1 : 0,
                scale: (layerIndex) => layerIndex === safeIndex ? 1.015 : 1.045,
                duration: 0.55,
                ease: 'power1.out',
                overwrite: true
            });
            return;
        }

        backgroundLayers.forEach((layer, layerIndex) => {
            layer.style.opacity = layerIndex === safeIndex ? '1' : '0';
            layer.style.transform = `scale(${layerIndex === safeIndex ? 1.015 : 1.045})`;
        });
    }

    document.body.classList.add('gsap-scrollytelling-ready');
    sections.forEach((section) => {
        section.classList.add('gsap-scene');
        revealTargets(section).forEach((item) => item.classList.add('gsap-reveal'));
    });
    setBackground(0, true);
    scrollSequence?.renderProgress(0);

    if (!window.gsap || !window.ScrollTrigger || prefersReducedMotion) {
        sections.forEach((section) => revealTargets(section).forEach((item) => {
            item.style.opacity = '1';
            item.style.transform = 'none';
        }));
        setActiveSection(sections[0].id);
        return;
    }

    const { gsap } = window;
    const { ScrollTrigger } = window;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({ scrub: 0.65, invalidateOnRefresh: true });
    if (isMobileViewport && typeof ScrollTrigger.config === 'function') {
        ScrollTrigger.config({ ignoreMobileResize: true });
    }

    let lenis = null;
    if (window.Lenis && !isMobileViewport) {
        lenis = new window.Lenis({
            lerp: 0.085,
            smoothWheel: true,
            wheelMultiplier: 0.82,
            touchMultiplier: 1.05
        });
        window.lenis = lenis;
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
    }

    let storyTrigger = null;
    let sequenceUpdateRaf = 0;
    let lastQueuedSequenceScrollY = null;
    function updateScrollSequence() {
        if (!scrollSequence) return;

        if (storyTrigger) {
            const distance = Math.max(1, storyTrigger.end - storyTrigger.start);
            const progress = Math.max(0, Math.min(1, (window.scrollY - storyTrigger.start) / distance));
            scrollSequence.renderProgress(progress);
            return;
        }

        const maxScroll = Math.max(1, ScrollTrigger.maxScroll(window));
        scrollSequence.renderProgress(window.scrollY / maxScroll);
    }

    function queueScrollSequenceUpdate(force = false) {
        const currentScrollY = window.scrollY;
        if (!force && currentScrollY === lastQueuedSequenceScrollY) return;
        lastQueuedSequenceScrollY = currentScrollY;

        if (sequenceUpdateRaf) return;

        sequenceUpdateRaf = window.requestAnimationFrame(() => {
            sequenceUpdateRaf = 0;
            updateScrollSequence();
        });
    }

    if (scrollSequence) {
        window.addEventListener('scroll', () => queueScrollSequenceUpdate(), { passive: true });
        lenis?.on('scroll', () => queueScrollSequenceUpdate());
        gsap.ticker.add(() => queueScrollSequenceUpdate());
    }

    if (isMobileViewport) {
        const mobileRevealSelectors = [
            '.gsap-reveal',
            '.section-title',
            '.hero-glitch',
            '.typewriter-box',
            '.home-cta',
            '.glass-panel',
            '.project-hero',
            '.project-details h2',
            '.project-details h4',
            '.project-details p',
            '.tech-badge',
            '.project-image-container',
            '.status-indicator',
            '.project-img-placeholder',
            '.proj-tabs',
            '.proj-tab',
            '.carousel-counter',
            '.carousel-outer',
            '.footer-bubble-container',
            '.socials',
            '.bubble'
        ].join(', ');
        let activeMobileIndex = -1;

        sections.forEach((section, sectionIndex) => {
            const mobileItems = Array.from(section.querySelectorAll(mobileRevealSelectors));
            gsap.set(section, {
                autoAlpha: sectionIndex === 0 ? 1 : 0,
                pointerEvents: sectionIndex === 0 ? 'auto' : 'none',
                zIndex: 20 + sectionIndex,
                x: 0,
                y: 0,
                scale: 1,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                skewX: 0,
                filter: 'blur(0px)'
            });
            gsap.set(mobileItems, {
                autoAlpha: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                skewX: 0,
                filter: 'blur(0px)',
                clearProps: 'clipPath,letterSpacing'
            });
        });

        function setMobileScene(index, progress = 0) {
            const safeIndex = Math.max(0, Math.min(sections.length - 1, index));
            if (safeIndex === activeMobileIndex) {
                syncMobileAmbientVideo(progress);
                return;
            }

            activeMobileIndex = safeIndex;
            sections.forEach((section, sectionIndex) => {
                const isActive = sectionIndex === safeIndex;
                gsap.set(section, {
                    autoAlpha: isActive ? 1 : 0,
                    pointerEvents: isActive ? 'auto' : 'none',
                    zIndex: isActive ? 100 : 20 + sectionIndex,
                    x: 0,
                    y: 0,
                    scale: 1,
                    filter: 'blur(0px)'
                });
            });
            setActiveSection(sections[safeIndex].id);
            syncMobileAmbientVideo(progress, true);
        }

        storyTrigger = ScrollTrigger.create({
            trigger: root,
            start: 'top top',
            end: () => `+=${Math.max(getViewportHeight() * sections.length, sections.length * 720)}`,
            pin: true,
            scrub: false,
            anticipatePin: 0,
            invalidateOnRefresh: false,
            onUpdate: (self) => {
                const index = Math.min(sections.length - 1, Math.max(0, Math.round(self.progress * (sections.length - 1))));
                setMobileScene(index, self.progress);
            },
            onRefresh: (self) => {
                const index = Math.min(sections.length - 1, Math.max(0, Math.round(self.progress * (sections.length - 1))));
                setMobileScene(index, self.progress);
            }
        });

        function scrollToMobileSection(id) {
            const sectionIndex = sections.findIndex((section) => section.id === id);
            if (!storyTrigger || sectionIndex < 0) return false;

            const progress = sections.length <= 1 ? 0 : sectionIndex / (sections.length - 1);
            const scrollTarget = storyTrigger.start + (storyTrigger.end - storyTrigger.start) * progress;
            window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
            history.replaceState(null, '', `#${id}`);
            return true;
        }

        document.querySelectorAll('a[href^="#"]').forEach((link) => {
            link.addEventListener('click', (event) => {
                const id = link.getAttribute('href').slice(1);
                if (scrollToMobileSection(id)) {
                    event.preventDefault();
                }
            });
        });

        let mobileRefreshTimer = 0;
        function queueMobileStoryRefresh(force = false) {
            const viewportChanged = updateViewportVars(force);
            if (!force && !viewportChanged) return;

            window.clearTimeout(mobileRefreshTimer);
            mobileRefreshTimer = window.setTimeout(() => {
                ScrollTrigger.refresh();
                syncMobileAmbientVideo(storyTrigger?.progress || 0, true);
            }, 220);
        }

        window.addEventListener('resize', queueMobileStoryRefresh, { passive: true });
        window.addEventListener('orientationchange', () => window.setTimeout(() => queueMobileStoryRefresh(true), 260), { passive: true });
        window.addEventListener('load', () => {
            ScrollTrigger.refresh();
            setMobileScene(0, 0);
        });
        setMobileScene(0, 0);

        if (window.location.hash) {
            window.setTimeout(() => scrollToMobileSection(window.location.hash.slice(1)), 140);
        }
        return;
    }

    function uniqueElements(items) {
        return [...new Set(items.filter(Boolean))];
    }

    function sceneParts(section) {
        const q = (selector) => Array.from(section.querySelectorAll(selector));
        const direct = revealTargets(section);

        if (section.id === 'home') {
            return {
                title: q('.hero-glitch'),
                primary: q('.typewriter-box'),
                secondary: q('.home-cta'),
                all: uniqueElements([...direct, ...q('.hero-glitch, .typewriter-box, .home-cta')])
            };
        }

        if (section.id === 'current') {
            return {
                title: q('.section-title'),
                frame: q('.project-hero'),
                primary: q('.project-details h2, .project-details h4, .project-details p'),
                secondary: q('.tech-badge'),
                accent: q('.project-image-container, .status-indicator, .project-img-placeholder'),
                all: uniqueElements([...direct, ...q('.project-hero, .project-details h2, .project-details h4, .project-details p, .tech-badge, .project-image-container')])
            };
        }

        if (section.id === 'about') {
            return {
                title: q('.section-title'),
                primary: q('.glass-panel'),
                secondary: q('.glass-panel h2, .glass-panel p'),
                all: uniqueElements([...direct, ...q('.glass-panel, .glass-panel h2, .glass-panel p')])
            };
        }

        if (section.id === 'experience') {
            return {
                title: q('.section-title'),
                primary: q(':scope > .glass-panel'),
                secondary: q('.experience-item, .glass-panel h2'),
                all: uniqueElements([...direct, ...q(':scope > .glass-panel, .experience-item, .glass-panel h2')])
            };
        }

        if (section.id === 'projects') {
            return {
                title: q('.section-title'),
                frame: q('.proj-tabs, .carousel-counter, .carousel-outer'),
                primary: q('.proj-tab'),
                secondary: q('.carousel-counter span, .carousel-counter-sep'),
                accent: q('.carousel-outer'),
                all: uniqueElements([...direct, ...q('.proj-tab, .carousel-counter span, .carousel-counter-sep, .carousel-outer')])
            };
        }

        if (section.id === 'skills') {
            return {
                title: q('.section-title'),
                primary: q(':scope > .glass-panel'),
                secondary: q(':scope > .glass-panel .glass-panel, .language-item, .glass-panel h2'),
                accent: q('div[style*="background:linear-gradient"]'),
                all: uniqueElements([...direct, ...q(':scope > .glass-panel, :scope > .glass-panel .glass-panel, .language-item, .glass-panel h2, div[style*="background:linear-gradient"]')])
            };
        }

        return {
            title: q('.section-title'),
            frame: q('.footer-bubble-container'),
            primary: q('.socials'),
            secondary: q('p'),
            accent: q('.bubble'),
            all: uniqueElements([...direct, ...q('.footer-bubble-container, .bubble, .socials, p')])
        };
    }

    function animateSceneIn(timeline, section, parts, at) {
        const ease = 'power3.out';

        timeline.set(section, { autoAlpha: 1 }, at);

        if (section.id === 'home') {
            timeline.fromTo(parts.title, { autoAlpha: 0, y: 58, scale: 0.82, filter: 'blur(18px)' }, { autoAlpha: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 0.42, ease }, at);
            timeline.fromTo(parts.primary, { autoAlpha: 0, y: 24, letterSpacing: '0.35em' }, { autoAlpha: 1, y: 0, letterSpacing: '0em', duration: 0.34, ease: 'power2.out' }, at + 0.10);
            timeline.fromTo(parts.secondary, { autoAlpha: 0, y: 38, scale: 0.92 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.34, ease: 'back.out(1.7)' }, at + 0.20);
            return;
        }

        if (section.id === 'current') {
            timeline.fromTo(parts.title, { autoAlpha: 0, x: -120, skewX: -10, filter: 'blur(10px)' }, { autoAlpha: 1, x: 0, skewX: 0, filter: 'blur(0px)', duration: 0.32, ease }, at);
            timeline.fromTo(parts.frame, { autoAlpha: 0, y: 34, scale: 0.965 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.32, ease }, at + 0.04);
            timeline.fromTo(parts.primary, { autoAlpha: 0, x: -70, y: 18 }, { autoAlpha: 1, x: 0, y: 0, duration: 0.36, stagger: 0.035, ease }, at + 0.10);
            timeline.fromTo(parts.secondary, { autoAlpha: 0, y: 28, scale: 0.72 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.28, stagger: 0.03, ease: 'back.out(1.9)' }, at + 0.18);
            timeline.fromTo(parts.accent, { autoAlpha: 0, x: 120, rotationY: -22, scale: 0.9, filter: 'blur(12px)' }, { autoAlpha: 1, x: 0, rotationY: 0, scale: 1, filter: 'blur(0px)', duration: 0.42, stagger: 0.035, ease }, at + 0.16);
            return;
        }

        if (section.id === 'about') {
            timeline.fromTo(parts.title, { autoAlpha: 0, y: -54, clipPath: 'inset(0 100% 0 0)' }, { autoAlpha: 1, y: 0, clipPath: 'inset(0 0% 0 0)', duration: 0.36, ease }, at);
            timeline.fromTo(parts.primary, { autoAlpha: 0, scale: 0.9, rotationZ: -3, filter: 'blur(14px)' }, { autoAlpha: 1, scale: 1, rotationZ: 0, filter: 'blur(0px)', duration: 0.38, ease: 'back.out(1.4)' }, at + 0.10);
            timeline.fromTo(parts.secondary, { autoAlpha: 0, x: (index) => index % 2 ? 42 : -42 }, { autoAlpha: 1, x: 0, duration: 0.30, stagger: 0.04, ease: 'power2.out' }, at + 0.18);
            return;
        }

        if (section.id === 'experience') {
            timeline.fromTo(parts.title, { autoAlpha: 0, x: 90, filter: 'blur(16px)' }, { autoAlpha: 1, x: 0, filter: 'blur(0px)', duration: 0.34, ease }, at);
            timeline.fromTo(parts.primary, { autoAlpha: 0, y: 120, rotationX: 18, transformPerspective: 900, filter: 'blur(16px)' }, { autoAlpha: 1, y: 0, rotationX: 0, filter: 'blur(0px)', duration: 0.44, stagger: 0.075, ease: 'power3.out' }, at + 0.08);
            timeline.fromTo(parts.secondary, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.28, stagger: 0.035, ease: 'power2.out' }, at + 0.22);
            return;
        }

        if (section.id === 'projects') {
            timeline.fromTo(parts.title, { autoAlpha: 0, y: -70, scaleX: 1.35, filter: 'blur(14px)' }, { autoAlpha: 1, y: 0, scaleX: 1, filter: 'blur(0px)', duration: 0.34, ease }, at);
            timeline.fromTo(parts.frame, { autoAlpha: 0, y: 36, scale: 0.97 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.30, stagger: 0.045, ease }, at + 0.06);
            timeline.fromTo(parts.primary, { autoAlpha: 0, y: -34, rotationZ: -4 }, { autoAlpha: 1, y: 0, rotationZ: 0, duration: 0.30, stagger: 0.035, ease: 'back.out(1.5)' }, at + 0.10);
            timeline.fromTo(parts.secondary, { autoAlpha: 0, scale: 0.35, y: 18 }, { autoAlpha: 1, scale: 1, y: 0, duration: 0.25, stagger: 0.025, ease: 'back.out(2)' }, at + 0.18);
            timeline.fromTo(parts.accent, { autoAlpha: 0, x: 160, rotationY: 18, transformPerspective: 1000, filter: 'blur(18px)' }, { autoAlpha: 1, x: 0, rotationY: 0, filter: 'blur(0px)', duration: 0.44, ease: 'power3.out' }, at + 0.24);
            return;
        }

        if (section.id === 'skills') {
            timeline.fromTo(parts.title, { autoAlpha: 0, scale: 1.3, y: -36, filter: 'blur(18px)' }, { autoAlpha: 1, scale: 1, y: 0, filter: 'blur(0px)', duration: 0.34, ease }, at);
            timeline.fromTo(parts.primary, { autoAlpha: 0, y: 78, rotationY: -16, transformPerspective: 1200, filter: 'blur(14px)' }, { autoAlpha: 1, y: 0, rotationY: 0, filter: 'blur(0px)', duration: 0.38, stagger: 0.055, ease }, at + 0.08);
            timeline.fromTo(parts.secondary, { autoAlpha: 0, scale: 0.86, y: 28 }, { autoAlpha: 1, scale: 1, y: 0, duration: 0.30, stagger: 0.035, ease: 'power2.out' }, at + 0.18);
            timeline.fromTo(parts.accent, { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.36, stagger: 0.025, ease: 'power2.out' }, at + 0.28);
            return;
        }

        timeline.fromTo(parts.frame, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.18, ease: 'none' }, at);
        timeline.fromTo(parts.accent, { autoAlpha: 0, scale: 0.25, y: 90, filter: 'blur(20px)' }, { autoAlpha: 1, scale: 1, y: 0, filter: 'blur(0px)', duration: 0.52, stagger: 0.05, ease: 'elastic.out(1, 0.7)' }, at);
        timeline.fromTo(parts.primary, { autoAlpha: 0, scale: 0.2, rotationZ: -24 }, { autoAlpha: 1, scale: 1, rotationZ: 0, duration: 0.42, ease: 'back.out(2.2)' }, at + 0.16);
        timeline.fromTo(parts.secondary, { autoAlpha: 0, y: 30, letterSpacing: '0.22em' }, { autoAlpha: 1, y: 0, letterSpacing: '0em', duration: 0.30, ease: 'power2.out' }, at + 0.28);
    }

    function animateSceneOut(timeline, section, parts, at) {
        if (section.id === 'home') {
            timeline.to(parts.title, { autoAlpha: 0, y: -120, scale: 1.18, filter: 'blur(18px)', duration: 0.30, ease: 'power2.in' }, at);
            timeline.to(parts.primary, { autoAlpha: 0, x: -110, filter: 'blur(12px)', duration: 0.24, ease: 'power2.in' }, at + 0.04);
            timeline.to(parts.secondary, { autoAlpha: 0, y: 70, scale: 0.86, duration: 0.24, ease: 'power2.in' }, at + 0.08);
        } else if (section.id === 'current') {
            timeline.to(parts.title, { autoAlpha: 0, x: 110, skewX: 8, duration: 0.24, ease: 'power2.in' }, at);
            timeline.to(parts.primary, { autoAlpha: 0, x: -90, duration: 0.24, stagger: 0.02, ease: 'power2.in' }, at + 0.02);
            timeline.to(parts.secondary, { autoAlpha: 0, y: -38, scale: 0.7, duration: 0.20, stagger: 0.018, ease: 'power2.in' }, at + 0.04);
            timeline.to(parts.accent, { autoAlpha: 0, x: 150, rotationY: 24, filter: 'blur(14px)', duration: 0.28, ease: 'power2.in' }, at + 0.04);
        } else if (section.id === 'about') {
            timeline.to(parts.secondary, { autoAlpha: 0, x: (index) => index % 2 ? -70 : 70, duration: 0.24, stagger: 0.025, ease: 'power2.in' }, at);
            timeline.to(parts.primary, { autoAlpha: 0, scale: 0.86, rotationZ: 4, filter: 'blur(14px)', duration: 0.28, ease: 'power2.in' }, at + 0.04);
            timeline.to(parts.title, { autoAlpha: 0, clipPath: 'inset(0 0 0 100%)', duration: 0.24, ease: 'power2.in' }, at + 0.06);
        } else if (section.id === 'experience') {
            timeline.to(parts.secondary, { autoAlpha: 0, y: -20, duration: 0.20, stagger: 0.02, ease: 'power2.in' }, at);
            timeline.to(parts.primary, { autoAlpha: 0, x: (index) => index % 2 ? 130 : -130, rotationZ: (index) => index % 2 ? 3 : -3, filter: 'blur(14px)', duration: 0.32, stagger: 0.035, ease: 'power2.in' }, at + 0.03);
            timeline.to(parts.title, { autoAlpha: 0, x: -100, filter: 'blur(14px)', duration: 0.22, ease: 'power2.in' }, at + 0.06);
        } else if (section.id === 'projects') {
            timeline.to(parts.primary, { autoAlpha: 0, y: -42, rotationZ: 5, duration: 0.22, stagger: 0.02, ease: 'power2.in' }, at);
            timeline.to(parts.secondary, { autoAlpha: 0, scale: 0.25, duration: 0.20, stagger: 0.02, ease: 'power2.in' }, at + 0.03);
            timeline.to(parts.accent, { autoAlpha: 0, y: 120, scale: 0.9, filter: 'blur(18px)', duration: 0.30, ease: 'power2.in' }, at + 0.05);
            timeline.to(parts.title, { autoAlpha: 0, y: 70, scaleX: 0.7, duration: 0.22, ease: 'power2.in' }, at + 0.08);
        } else if (section.id === 'skills') {
            timeline.to(parts.accent, { scaleX: 0, transformOrigin: 'right center', duration: 0.20, stagger: 0.018, ease: 'power2.in' }, at);
            timeline.to(parts.secondary, { autoAlpha: 0, y: -46, scale: 0.9, duration: 0.22, stagger: 0.02, ease: 'power2.in' }, at + 0.02);
            timeline.to(parts.primary, { autoAlpha: 0, y: -92, rotationY: 14, filter: 'blur(16px)', duration: 0.30, stagger: 0.035, ease: 'power2.in' }, at + 0.04);
            timeline.to(parts.title, { autoAlpha: 0, scale: 0.72, filter: 'blur(18px)', duration: 0.24, ease: 'power2.in' }, at + 0.08);
        } else {
            timeline.to(parts.accent, { autoAlpha: 0, scale: 1.45, y: -70, filter: 'blur(18px)', duration: 0.28, stagger: 0.025, ease: 'power2.in' }, at);
            timeline.to(parts.primary, { autoAlpha: 0, scale: 0.25, rotationZ: 20, duration: 0.24, ease: 'power2.in' }, at + 0.04);
            timeline.to(parts.secondary, { autoAlpha: 0, y: -26, duration: 0.18, ease: 'power2.in' }, at + 0.08);
        }

        timeline.to(section, { autoAlpha: 0, duration: 0.20, ease: 'none' }, at + 0.22);
    }

    const sectionParts = sections.map(sceneParts);
    sections.forEach((section, sectionIndex) => {
        const parts = sectionParts[sectionIndex];
        gsap.set(section, {
            autoAlpha: sectionIndex === 0 ? 1 : 0,
            pointerEvents: sectionIndex === 0 ? 'auto' : 'none',
            zIndex: 20 + sectionIndex
        });
        gsap.set(parts.all, { autoAlpha: 0, force3D: true });
        if (sectionIndex === 0) {
            gsap.set(parts.all, { autoAlpha: 1, x: 0, y: 0, scale: 1, rotationZ: 0, rotationX: 0, rotationY: 0, filter: 'blur(0px)' });
        }
    });

    const sceneStep = 1;
    const sceneHold = 0.68;
    const sceneExit = 0.74;
    let activeSceneId = sections[0]?.id;

    function syncActiveScene() {
        let visibleSection = sections[0];
        let visibleOpacity = -1;

        sections.forEach((section) => {
            const opacity = Number(gsap.getProperty(section, 'opacity')) || 0;
            if (opacity >= visibleOpacity) {
                visibleOpacity = opacity;
                visibleSection = section;
            }
        });

        if (visibleSection?.id && visibleSection.id !== activeSceneId) {
            activeSceneId = visibleSection.id;
            setActiveSection(activeSceneId);
        }
    }

    const masterTimeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: () => `+=${Math.max(getViewportHeight() * (sections.length + 0.65), sections.length * 760)}`,
            pin: true,
            scrub: 0.72,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                scrollSequence?.renderProgress(self.progress);
            },
            onRefresh: () => queueScrollSequenceUpdate(true)
        }
    });
    storyTrigger = masterTimeline.scrollTrigger;

    sections.forEach((section, sectionIndex) => {
        const at = sectionIndex * sceneStep;
        const parts = sectionParts[sectionIndex];
        masterTimeline.addLabel(section.id, at);
        masterTimeline.addLabel(`${section.id}-view`, at + (sectionIndex === 0 ? 0.22 : 0.62));

        animateSceneIn(masterTimeline, section, parts, at);
        if (sectionIndex < sections.length - 1) {
            animateSceneOut(masterTimeline, section, parts, at + sceneExit);
        } else {
            masterTimeline.to({}, { duration: sceneHold }, at + sceneHold);
        }
    });

    masterTimeline.eventCallback('onUpdate', syncActiveScene);
    syncActiveScene();
    queueScrollSequenceUpdate(true);

    function scrollToSection(id) {
        const target = document.getElementById(id);
        if (!target) return false;

        const sectionIndex = sections.findIndex((section) => section.id === id);
        if (storyTrigger && sectionIndex >= 0) {
            const labelTime = masterTimeline.labels[`${id}-view`] ?? masterTimeline.labels[id] ?? sectionIndex * sceneStep;
            const progress = masterTimeline.duration() > 0 ? labelTime / masterTimeline.duration() : 0;
            const scrollTarget = storyTrigger.start + (storyTrigger.end - storyTrigger.start) * progress;

            if (lenis) {
                lenis.scrollTo(scrollTarget, { duration: 1.05, easing: (t) => 1 - Math.pow(1 - t, 3) });
            } else {
                window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
            }
        } else {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        return true;
    }

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const id = link.getAttribute('href').slice(1);
            if (scrollToSection(id)) {
                event.preventDefault();
                history.replaceState(null, '', `#${id}`);
            }
        });
    });

    let storyResizeTimer = 0;
    function queueStoryRefresh(force = false) {
        const viewportChanged = updateViewportVars(force);
        scrollSequence?.resize();
        queueScrollSequenceUpdate(true);
        if (isMobileViewport && !force && !viewportChanged) return;

        window.clearTimeout(storyResizeTimer);
        storyResizeTimer = window.setTimeout(() => ScrollTrigger.refresh(), isMobileViewport ? 180 : 80);
    }

    window.addEventListener('resize', queueStoryRefresh, { passive: true });
    window.addEventListener('orientationchange', () => window.setTimeout(() => queueStoryRefresh(true), 220), { passive: true });
    window.addEventListener('load', () => ScrollTrigger.refresh());
    setActiveSection(sections[0].id);

    if (window.location.hash) {
        window.setTimeout(() => scrollToSection(window.location.hash.slice(1)), 120);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLanguage);
    initCarousel('professional', currentLanguage);
    initScrollStory();
});




const cursor = document.getElementById('cursor');
if (cursor && finePointerMedia.matches) {
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.classList.add('visible');
    });
    document.querySelectorAll('a, button, .glass-panel, .proj-card, i').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
} else if (cursor) {
    cursor.classList.remove('visible', 'active');
}

function playVideoCanvasSequence(canvas, options) {
    if (!canvas) return Promise.resolve();

    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    const video = document.createElement('video');
    const dpr = Math.min(window.devicePixelRatio || 1, options.maxPixelRatio || 1);
    const endHold = options.endHold ?? 140;
    let size = { cssWidth: 1, cssHeight: 1 };
    let raf = 0;
    let lastPercent = -1;

    video.preload = 'auto';
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.disableRemotePlayback = true;

    function resize() {
        const rect = canvas.getBoundingClientRect();
        const cssWidth = Math.max(1, Math.round(rect.width || getViewportWidth()));
        const cssHeight = Math.max(1, Math.round(rect.height || getViewportHeight()));
        const width = Math.round(cssWidth * dpr);
        const height = Math.round(cssHeight * dpr);

        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
        }

        size = { cssWidth, cssHeight };
    }

    function draw() {
        if (!video.videoWidth || !video.videoHeight) return;

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, size.cssWidth, size.cssHeight);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'medium';

        const scale = Math.max(size.cssWidth / video.videoWidth, size.cssHeight / video.videoHeight);
        const drawWidth = video.videoWidth * scale;
        const drawHeight = video.videoHeight * scale;
        const drawX = (size.cssWidth - drawWidth) * 0.5;
        const drawY = (size.cssHeight - drawHeight) * 0.5;
        ctx.drawImage(video, drawX, drawY, drawWidth, drawHeight);
    }

    function reportProgress() {
        if (typeof options.onProgress !== 'function') return;

        const duration = video.duration || options.duration || 1;
        const progress = Math.min(1, video.currentTime / duration);
        const percent = Math.round(progress * 100);
        if (percent === lastPercent) return;

        lastPercent = percent;
        options.onProgress(progress);
    }

    return new Promise((resolve) => {
        function finish() {
            draw();
            reportProgress();
            window.setTimeout(resolve, endHold);
        }

        function tick() {
            draw();
            reportProgress();

            if (!video.ended) {
                raf = window.requestAnimationFrame(tick);
            }
        }

        function start() {
            resize();
            draw();
            const playPromise = video.play();

            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(() => {
                    video.currentTime = video.duration || 0;
                    finish();
                });
            }

            raf = window.requestAnimationFrame(tick);
        }

        window.addEventListener('resize', resize, { passive: true });
        video.addEventListener('loadedmetadata', resize, { once: true });
        video.addEventListener('canplay', start, { once: true });
        video.addEventListener('ended', () => {
            if (raf) window.cancelAnimationFrame(raf);
            finish();
        }, { once: true });
        video.addEventListener('error', () => {
            if (raf) window.cancelAnimationFrame(raf);
            resolve();
        }, { once: true });
        resolveVideoSource(options.src, { preferBlob: options.preferBlob ?? false }).then((videoSource) => {
            video.src = videoSource;
            video.load();
        });
    });
}

document.getElementById('start-btn').addEventListener('click', () => {
    const overlay = document.getElementById('intro-overlay');
    const button = document.getElementById('start-btn');
    const loader = document.querySelector('[data-text-key="loading-assets"]');
    const loadingLabels = currentLanguage === 'fr'
        ? ['Handshake terminal', 'Flux visuel', 'Acceleration', 'Ouverture']
        : ['Terminal handshake', 'Visual stream', 'Acceleration', 'Opening'];

    button.disabled = true;
    overlay.classList.add('is-loading', 'is-accelerating');
    if (loader) {
        loader.textContent = currentLanguage === 'fr' ? 'Demarrage terminal...' : 'Starting terminal...';
    }

    playVideoCanvasSequence(document.getElementById('loading-sequence-canvas'), {
        src: 'assets/loading-1080p.mp4',
        endHold: 140,
        maxPixelRatio: 1,
        onProgress: (progress) => {
            if (!loader) return;
            const percent = Math.round(progress * 100);
            const labelIndex = Math.min(loadingLabels.length - 1, Math.floor(progress * loadingLabels.length));
            loader.textContent = currentLanguage === 'fr'
                ? `${loadingLabels[labelIndex]}... ${percent}%`
                : `${loadingLabels[labelIndex]}... ${percent}%`;
        }
    }).then(() => {
        overlay.classList.add('is-complete');
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
        setTimeout(() => { overlay.style.visibility = 'hidden'; }, 520);
    });
});




window.words = [translations.fr['typewriter-1'], translations.fr['typewriter-2'], translations.fr['typewriter-3'], translations.fr['typewriter-4']];
let typewriterIndex = 0;
function typeWriter(text, n) {
    if (n < text.length) {
        document.getElementById("typewriter").innerHTML = text.substring(0, n+1) + '<span aria-hidden="true">|</span>';
        setTimeout(() => typeWriter(text, n + 1), 100);
    } else {
        setTimeout(() => eraseWriter(text, n), 2000);
    }
}
function eraseWriter(text, n) {
    if (n >= 0) {
        document.getElementById("typewriter").innerHTML = text.substring(0, n) + '<span aria-hidden="true">|</span>';
        setTimeout(() => eraseWriter(text, n - 1), 50);
    } else {
        typewriterIndex = (typewriterIndex + 1) % window.words.length;
        setTimeout(() => typeWriter(window.words[typewriterIndex], 0), 500);
    }
}
setTimeout(() => typeWriter(window.words[0], 0), 2000);




const canvas = document.getElementById('matrix-canvas');
const matrixCanAnimate = Boolean(canvas && finePointerMedia.matches && !mobileViewportMedia.matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches);

if (matrixCanAnimate) {
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    let width, height;
    let matrixRaf = 0;
    const mouse = { x: -1000, y: -1000 };

    function resize() {
        const nextWidth = getViewportWidth();
        const nextHeight = getViewportHeight();

        width = nextWidth;
        height = nextHeight;
        if (canvas.width === nextWidth && canvas.height === nextHeight) return;

        canvas.width = nextWidth;
        canvas.height = nextHeight;
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * width; this.y = Math.random() * height;
            this.val = Math.random() > 0.5 ? '1' : '0';
            this.size = Math.random() * 10 + 8;
            this.vx = (Math.random() - 0.5) * 0.5; this.vy = (Math.random() - 0.5) * 0.5;
        }
        update() {
            const dx = mouse.x - this.x, dy = mouse.y - this.y;
            const distSq = dx*dx + dy*dy, forceRadius = 25000;
            if (distSq < forceRadius) {
                const force = (forceRadius - distSq) / forceRadius;
                const angle = Math.atan2(dy, dx);
                this.vx += Math.cos(angle) * force * 0.8;
                this.vy += Math.sin(angle) * force * 0.8;
            } else {
                if (Math.abs(this.vx) > 1) this.vx *= 0.95;
                if (Math.abs(this.vy) > 1) this.vy *= 0.95;
            }
            this.x += this.vx; this.y += this.vy;
            if (this.x < 0) this.x = width; if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height; if (this.y > height) this.y = 0;
            if (Math.random() < 0.02) this.val = Math.random() > 0.5 ? '1' : '0';
        }
        draw() {
            ctx.font = `${this.size}px monospace`;
            const dx = mouse.x - this.x, dy = mouse.y - this.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            ctx.fillStyle = dist < 150 ? `rgba(255,255,255,${1 - dist/150})` : (Math.random() > 0.9 ? '#fff' : 'rgba(0,247,255,0.3)');
            ctx.fillText(this.val, this.x, this.y);
        }
    }

    const particles = [];
    const particleCount = Math.min(150, Math.max(70, Math.round(getViewportWidth() / 10)));
    for (let k = 0; k < particleCount; k++) particles.push(new Particle());

    function animateMatrix() {
        if (document.hidden) {
            matrixRaf = 0;
            return;
        }
        ctx.fillStyle = 'rgba(5,5,5,0.2)';
        ctx.fillRect(0, 0, width, height);
        particles.forEach(p => { p.update(); p.draw(); });
        matrixRaf = requestAnimationFrame(animateMatrix);
    }

    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && !matrixRaf) {
            animateMatrix();
        }
    });
    animateMatrix();
} else if (canvas) {
    canvas.setAttribute('hidden', '');
}


})();
