export type Project = {
  title: string
  category: string | string[]
  description: string
  longDescription: string
  image: string
  technologies: string[]
  gallery?: { src: string; caption?: string; thumb?: string; type?: string; width?: number; autoplay?: boolean;height?: number; sources?: any[] }[]
  githubLink?: string
  backendGithubLink?: string
  externalLink?: string
  technicalLink?: string
}


export const projects: Project[] = [

	{
	title: "Projet d'infrastructure locale",
	category: "Infra",
	description: "Stack domotique et services personnels hébergés sur Raspberry Pi 5 avec Docker Swarm.",
	githubLink: "https://github.com/Fournier-Paul/home-lab",
	longDescription: `### 🏡 Contexte

	Cette infrastructure personnelle repose sur un **Raspberry Pi 5** équipé d’un **SSD NVMe**, avec des services conteneurisés et orchestrés via **Docker Swarm**.

	> Objectif : centraliser, automatiser et superviser les services numériques et domotiques de mon environnement personnel.

	Cette stack me permet de mettre en pratique plusieurs compétences DevOps :
	- 🐳 conteneurisation avec Docker
	- 🧱 orchestration avec Docker Swarm
	- 🔄 gestion et redémarrage automatique des services
	- 📡 communication entre services via MQTT
	- 📊 supervision avec Prometheus et Grafana
	- 🏡 automatisation domotique avec Home Assistant


	### 🧩 Services hébergés

	#### 🏡 Domotique & capteurs
	- Home Assistant
	- Zigbee2MQTT
	- Mosquitto (MQTT)

	#### ☁️ Cloud & communication
	- Nextcloud (fichiers, agenda, contacts)
	- Serveur mail personnel

	#### 💡 Interface & visualisation
	- Sites web
	- Assistant vocal
	- Monitoring avec Prometheus et Grafana

	#### 🧪 Autres services
	- Services internes
	- Outils expérimentaux
	- Projets liés à l’impression 3D`,
	image: "/images/projects/preview-projects/raspberry.webp",
	technologies: [
		"Raspberry Pi 5",
		"SSD NVMe",
		"Docker",
		"Docker Swarm",
		"Home Assistant",
		"Zigbee2MQTT",
		"Mosquitto",
		"MQTT",
		"Nextcloud",
		"Serveur mail",
		"Vue.js",
		"Assistant vocal",
		"Prometheus",
		"Grafana",
		"Impression 3D"
	],
	gallery: [
		{
		src: "/images/projects/infra-local/Blank diagram (1).webp",
		caption: "Diagramme d'infrastructure locale"
		},
		{
		src: "/images/projects/infra-local/Blank diagram (2).webp",
		caption: "Services dockerisés"
		}
	]
	},

	{
		title: "Site du Championnat de France de Drift FFSA",
		category: "Web / Mobile",
		description: "Actualités, événements et résultats de la compétition Drift.",
		image: "/images/projects/preview-projects/drift.webp",
		longDescription: `### 🏁 Site du Championnat de France de Drift FFSA

Développement d'un site complet pour la **promotion et la gestion du championnat national de Drift**.

Ce projet inclut :

- 🌐 **Frontend** (interface utilisateur dynamique, responsive)
- 🛠️ **Backend** (gestion des routes, sécurisation)
- 💾 **Base de données** (structure des contenus, résultats, utilisateurs)
- 🔐 **Gestion des accès & sécurité** (authentification, rôles, ReCaptcha)
- ⚙️ **Configuration serveur** (environnement de prod/staging via Docker)
- 🧪 **Variables d’environnement** pour les accès sensibles

> L’approche DevOps a été intégrée à travers des outils de containerisation, versionning et documentation.

---

### 🧰 Technologies principales

- Nuxt.js (Vue Framework)
- PHP (custom & APIs)
- Tailwind CSS
- Base de données
- JSON / YAML (données structurées)
- Docker
- Cockpit CMS (headless)
- Composer
- i18n (internationalisation)
- ReCaptcha

> Certaines technologies sensibles ont été volontairement généralisées pour des raisons de sécurité.
`,
		technologies: [
			"Cockpit", "PHP", "Nuxt.js", "API", "JSON",
			"YAML", "Tailwind CSS", "Docker", "Composer", "i18n", "Recaptcha"
		],
		externalLink: "https://driftfrance.com/"
	},

	{
		title: "ParkLib",
		category: "Application Mobile",
		description: "Application mobile de localisation de Parking publique et de location de parking privé.",
		image: "/images/projects/preview-projects/parklib.webp",
		longDescription: `### 🚗 ParkLib — Application de Parking intelligent

**ParkLib** est une application mobile visant à faciliter :

- 🔍 **la localisation de parkings publics** disponibles à proximité
- 🅿️ **la location de parkings privés** entre particuliers

---

### ⚙️ Fonctionnalités clés

- 🌐 **Frontend** mobile en React Native (Expo)
- 🛠️ **Backend** (Node.js + Redis)
- 💾 **Base de données** SQL (schéma relationnel)
- 🔐 **Sécurité** des accès (JWT, rôles, validation d'identité)
- ☁️ **Configuration serveur & environnement** via Docker et variables d'env

> Le projet a été conçu avec une attention particulière à l’ergonomie mobile, la réactivité de l’interface et la modularité backend.

---

### 🧰 Technologies principales

- React Native (Expo)
- Angular (admin / backoffice)
- Node.js
- Redis (caching, sessions)
- SQL (relationnel)
- API REST / JWT Token
- Tailwind CSS
- Docker
- ReCaptcha

---

### 📲 Accès sécurisé & UX

- Authentification JWT
- Gestion des sessions et des rôles utilisateurs
- Maquettes ergonomiques pour une navigation fluide

---

> Le projet est disponible sur GitHub en versions frontend et backend.`,
		technologies: [
			"React Native", "Angular", "Node.js", "API", "JWT Token",
			"JSON", "Redis", "SQL", "Tailwind CSS", "Docker", "Expo", "Recaptcha"
		],
		githubLink: "https://github.com/Salah-Wassim/Parklib-Front",
		backendGithubLink: "https://github.com/Salah-Wassim/Parklib-Back",
		gallery: [{
				src: "/images/projects/parklib/Diagrammes use case2.webp",
				caption: "Use Case - Gestion utilisateur"
			},
			{
				src: "/images/projects/parklib/Diagrammes use case3.webp",
				caption: "Use Case - Consulter l'annonce de place de parking"
			},
			{
				src: "/images/projects/parklib/Use cases backoffice4.webp",
				caption: "Location de parking"
			},
			{
				src: "/images/projects/parklib/Diagrammes use case4.webp",
				caption: "Use Case - Backoffice admin de l'application mobile"
			},
			{
				src: "/images/projects/parklib/Dictionnaire de données.webp",
				caption: "Dictionnaire de données - Définition des champs"
			},
			{
				src: "/images/projects/parklib/Le modèle conceptuel de données.webp",
				caption: "Modèle conceptuel de données (MCD)"
			},
			{
				src: "/images/projects/parklib/Le modèle logique de données.webp",
				caption: "Modèle logique de données (MLD)"
			},
			{
				src: "/images/projects/parklib/Digramme de classes.webp",
				caption: "Diagramme de classes principal"
			},
			{
				src: "/images/projects/parklib/diagramme de classes2.webp",
				caption: "Diagramme de classes complémentaire"
			},
			{
				src: "/images/projects/parklib/Diagramme de class de comportement.webp",
				caption: "Diagramme de classes de comportement"
			},
			{
				src: "/images/projects/parklib/Diagramme de Séquence de connexion.webp",
				caption: "Diagramme de séquence - Connexion utilisateur"
			},
			{
				src: "/images/projects/parklib/Diagramme de séquence du système d'authentification d'un utilisateur.webp",
				caption: "Diagramme de séquence - Authentification"
			},
			{
				src: "/images/projects/parklib/maquette-mobile.webp",
				caption: "Maquette mobile - Vue utilisateur"
			},
			{
				src: "/images/projects/parklib/Maquette Back-office.webp",
				caption: "Maquette du back-office administrateur"
			},
			{
				src: "/images/projects/parklib/Implémentation et communication à la base de données.webp",
				caption: "Schéma technique - Base de données et API"
			},
			{
				src: "/images/projects/parklib/Chemin de connexion et d’inscription de l’utilisateur.webp",
				caption: "Flux de connexion/inscription utilisateur"
			},
			{
				src: "/images/projects/parklib/deploiement.webp",
				caption: "Architecture de déploiement"
			},
			{
				src: "/images/projects/parklib/Use cases backoffice.webp",
				caption: "Backoffice - Gestion des utilisateurs"
			},
			{
				src: "/images/projects/parklib/Use cases backoffice2.webp",
				caption: "Backoffice - Gestion des réservations"
			},
			{
				src: "/images/projects/parklib/usecase6.webp",
				caption: "Backoffice - Administration"
			},
			{
				src: "/images/projects/parklib/Accueil.webp",
				caption: "Page d'accueil mobile"
			},
			{
				src: "/images/projects/parklib/Login.webp",
				caption: "Écran de connexion"
			},
			{
				src: "/images/projects/parklib/Map.webp",
				caption: "Carte des parkings"
			},
			{
				src: "/images/projects/parklib/Map-drawer.webp",
				caption: "Carte - menu latéral"
			},
			{
				src: "/images/projects/parklib/Map-info-park.webp",
				caption: "Infos détaillées sur un parking"
			},
			{
				src: "/images/projects/parklib/Register.webp",
				caption: "Formulaire d'inscription"
			},
			{
				src: "/images/projects/parklib/Web-Home.webp",
				caption: "Page d'accueil web"
			},
			{
				src: "/images/projects/parklib/Web-Booking.webp",
				caption: "Interface de réservation web"
			},
			{
				src: "/images/projects/parklib/Web-detail-user.webp",
				caption: "Profil utilisateur (détails)"
			},
			{
				src: "/images/projects/parklib/Web-login.webp",
				caption: "Connexion web"
			},
			{
				src: "/images/projects/parklib/Web-register.webp",
				caption: "Inscription web"
			},
			{
				src: "/images/projects/parklib/Web-Profile.webp",
				caption: "Profil utilisateur - Vue web"
			}
		]
	},


	{
		title: "Projet d'infrastructure d'entreprise",
		category: "Infra",
		description: "Infra cloud (DigitalOcean) + serveur local avec VPN, monitoring et backup.",
		longDescription: `### 🏢 Projet d'infrastructure d'entreprise

Cette infrastructure hybride combine **cloud public** et **serveur local** pour assurer à la fois disponibilité, contrôle et sécurité des données.

#### ☁️ Infrastructure Cloud (DigitalOcean)
- Hébergement de services web (Cockpit CMS, Nuxt.js)
- Déploiements automatisés via Jenkins, Ansible, Terraform
- Reverse proxy avec **NGINX + Let’s Encrypt**

#### 🏠 Serveur local (Raspberry Pi)
- Stockage local et services (NextCloud, Plex, Signature mail)
- Monitoring avancé avec Prometheus, Grafana, Node-Exporter
- **Sauvegardes** : Rsync, BorgBackup (locaux + Dropbox)

#### 🔐 Sécurité
- VPN WireGuard
- Pare-feu UFW, Fail2ban
- SSH restreint

> L’objectif : proposer une infrastructure autonome, sécurisée et maintenable, intégrant bonnes pratiques DevOps.`,
		image: "/images/projects/preview-projects/infra-entreprise.webp",
		technologies: [
			"DigitalOcean", "Raspberry Pi OS Lite", "NVMe", "Docker", "Jenkins", "Ansible",
			"Terraform", "NGINX", "Prometheus", "Grafana", "Let’s Encrypt", "Cockpit CMS",
			"Nuxt.js", "NextCloud", "Plex", "Signature mail", "PostgreSQL", "Node-Exporter",
			"MySQL", "Rsync", "BorgBackup", "WireGuard VPN", "Fail2ban", "UFW", "Disques externes 12To"
		],
		gallery: [{
				src: "/images/projects/infra-entreprise/old-infra.webp",
				caption: "Ancienne infrastructure"
			},
			{
				src: "/images/projects/infra-entreprise/POC-hebergement-automatisation-monitoring.webp",
				caption: "POC - Hébergement, automatisation & monitoring"
			},
			{
				src: "/images/projects/infra-entreprise/infra-local-entreprise.webp",
				caption: "Infrastructure locale"
			}
		]
	},
	{
		title: "Live DriftFrance",
		category: "Web / Mobile",
		description: "Site live du Championnat Drift FFSA. Classement en direct via télémétrie, frontend/backend/API/sécurité.",
		longDescription: `### 🏁 Live DriftFrance — Suivi en temps réel

Site incluant la **télémétrie** afin d'afficher les résultats en live pour le Championnat de France de Drift FFSA.

Ce projet permet de :

- 🖥️ Afficher en **temps réel les classements et scores** lors des épreuves
- 🔄 Connecter frontend et backend via WebSockets pour forte réactivité
- 🔐 Assurer la **sécurité** des données utilisateurs et accès
- 🧪 Proposer une API claire pour exposer les résultats en direct

---

### 🧰 Technologies principales

- Node.js
- JavaScript (ES6)
- WebSocket
- Flux JSON
- Tailwind CSS / PostCSS
- Vite.js

> Une attention particulière a été portée à la **performance réseau**, à la gestion des états temps-réel et à la sécurité serveur.`,
		image: "/images/projects/preview-projects/live-driftfrance.webp",
		technologies: [
			"Node.js", "Flux JSON", "JavaScript", "Websocket", "PostCss", "TailwindCSS", "Vite.js"
		],
	},
	{
		title: "Mise à jour des Points des Pilotes",
		category: "Automatisation",
		description: "Script Python pour mettre à jour automatiquement les points pilotes depuis un fichier Excel.",
		longDescription: `### 🏎️ Mise à jour automatisée des points pilotes

Ce projet est un **script Python** qui automatise la mise à jour des classements des pilotes de drift à partir de fichiers Excel ou Google Sheets.

#### 🔧 Fonctionnalités :
- 📥 Lecture des fichiers
- 🔁 Traitement automatique des lignes et colonnes (vérification, normalisation)
- 🌐 Requêtes vers une **API REST distante**
- 💾 Mise à jour de la base de données via API
- ➕ Ajout de nouveaux pilotes si absents
- ✏️ Mise à jour des scores existants
- 🛡️ Gestion des erreurs (connexion, structure de fichier, doublons, etc.)

> Ce script s’intègre dans une logique d’automatisation DevOps pour les projets liés à la compétition.`,
		image: "/images/projects/preview-projects/Scripts_En_Python.webp",
		technologies: ["Python 3", "Pandas", "Requests", "API REST", "Excel", "JSON"],
	},
	{
		title: "Endurance24",
		category: "Web / Mobile",
		description: "Site d’actualité du motorsport",
		longDescription: `### 🏎️ Endurance24 — Site d’actualité Motorsport

Développement d’un **site d'actualités** pour couvrir l’actualité du sport automobile d’endurance (WEC, Le Mans, etc.).

---

### ⚙️ Fonctionnalités principales

- 📚 **Gestion de contenu** avec WordPress
- 🔐 Sécurité des utilisateurs via plugins
- 📝 **Live texte** X (twitter) intégré pour afficher des flux personnalisés en temps réel
- 💬 Formulaire de contact fonctionnel avec validation
- ⚙️ Utilisation de **page builders** pour la flexibilité du contenu
- 💾 Base de données

> L’objectif était de garantir **accessibilité, performance et sécurité** pour un site média à forte fréquentation.

---

### 🧰 Technologies principales

- PHP
- WordPress (Child Theme)
- JavaScript & jQuery
- AJAX
- Duplicator (sauvegardes, migration)
- W3 Total Cache (optimisation)
- Wordfence (sécurité)
`,
		image: "/images/projects/preview-projects/endurance.webp",
		technologies: [
			"PHP", "Wordpress", "AJAX", "JavaScript", "Jquery",
			"Duplicator", "W3 Total Cache", "Wordfence", "Child-theme"
		],
		externalLink: "https://endurance24.fr/"
	},

	{
		title: "Shop Driv'n",
		category: "Web / Mobile",
		description: "Site e-commerce pour stages et expériences de pilotage avec gestion de panier, paiement et sécurité.",
		longDescription: `### 🏁 Shop Driv'n — Stages et Expériences de Pilotage

Développement d’un **site e-commerce** complet pour réserver des **stages de conduite automobile**, incluant :

- 📦 Gestion des produits & paniers
- 💳 Paiement sécurisé en ligne
- 🔐 Sécurité des comptes utilisateurs
- 📄 Formulaires de contact personnalisés
- 🧱 Construction des pages via **Page Builders**
- 📚 Base de données

> Ce projet utilise **WooCommerce** et des extensions WordPress.

---

### 🧰 Technologies principales

- PHP
- WordPress (Child Theme)
- WooCommerce
- JavaScript & jQuery
- AJAX
- Duplicator (migration)
- W3 Total Cache
- Wordfence (sécurité)`,
		image: "/images/projects/preview-projects/drivn-site.webp",
		technologies: [
			"PHP", "Wordpress", "WooCommerce", "AJAX", "JavaScript", "Jquery", "Duplicator", "W3 Total Cache", "Wordfence", "Child-theme"
		],
		externalLink: "https://shop.drivnmotorsports.com"
	},
	{
		title: "Générateur de signatures mail",
		category: ["Web", "Automatisation"],
		description: "Générateur de signature mail avec 5 templates HTML personnalisables.",
		longDescription: `### 📝 HTML personnalisé

Ce projet consiste en un **outil from-scratch** permettant aux utilisateurs de **générer des signatures mail personnalisées**.

#### 🔧 Fonctionnalités principales :
- Sélection de **5 templates HTML** modernes et responsives
- Intégration manuelle dans clients mail (Gmail, Outlook, etc.)
- Affichage dynamique du rendu selon les données saisies
- Gestion simple de la personnalisation via formulaire web

> L’objectif était de fournir une solution légère et ergonomique sans base de données ni CMS, tout en respectant les contraintes des clients mail les plus populaires.

---

### 🧰 Technologies utilisées

- PHP (générateur et téléchargement)
- JavaScript (manipulation DOM, prévisualisation dynamique)
- Tailwind CSS (responsive interface web)

> Cette solution est déployée sur un hébergement classique (FTP).`,
		image: "/images/projects/preview-projects/signture-mail.webp",
		technologies: ["PHP", "JavaScript", "TailwindCSS"],
	},
	{
		title: "Cani Cottage",
		category: "Web / Mobile",
		description: "Site pour une garderie éducative avec backend, base de données et sécurité.",
		longDescription: `### 🐶 Cani Cottage — Site de Garderie éducative

Développement d’un site vitrine complet pour la **garderie éducative Cani Cottage**, incluant toutes les briques nécessaires à une plateforme professionnelle :

#### 🧱 Stack technique
- 🌐 **Frontend** responsive (Nuxt.js)
- 🧠 **Backend** (Cockpit CMS + PHP)
- 💾 **Base de données**
- 🔐 **Sécurité** avec ReCaptcha, rôles et contrôles d'accès
- ⚙️ **Variables d’environnement**
- 📦 **Conteneurisation** via Docker pour déploiement simplifié


---

### 🧰 Technologies principales

- Nuxt.js (Vue Framework)
- PHP
- Cockpit CMS (headless)
- API / JSON
- YAML (config)
- Tailwind CSS
- Docker
- Composer
- i18n (traductions multilingues)
- ReCaptcha`,
		image: "/images/projects/preview-projects/cani-cottage.webp",
		technologies: [
			"Cockpit", "PHP", "Nuxt.js", "API", "JSON", "YAML",
			"Tailwind CSS", "Docker", "Composer", "i18n", "Recaptcha"
		],
		externalLink: "https://cani-cottage.fr/"
	},

	{
		title: "Autowebbb",
		category: "Web / Mobile",
		description: "Agence de communication automobile avec frontend, backend et base de données sécurisés.",
		longDescription: `### 🚘 Autowebbb — Agence de Communication Automobile

Développement d’un site complet pour l'agence de communication Autowebbb spécialisée dans l’automobile.

Le projet couvre toutes les briques essentielles à une application web moderne :

- 🌐 **Frontend** responsive (Nuxt.js)
- 🧠 **Backend** via PHP et Cockpit CMS (headless)
- 💾 **Base de données**
- 🔐 **Sécurité utilisateur** avec ReCaptcha, rôles, permissions
- ⚙️ **Configuration serveur** flexible via Docker
- 🧪 **Variables d’environnement** pour sécuriser les accès sensibles

> L’ensemble est conçu pour offrir une expérience utilisateur fluide, tout en garantissant un déploiement sécurisé et maintenable.

---

### 🧰 Technologies principales

- Cockpit CMS
- PHP
- Nuxt.js (Vue.js)
- JSON / YAML
- Tailwind CSS
- Docker
- Composer
- i18n
- ReCaptcha`,
		image: "/images/projects/preview-projects/autowebbb.webp",
		technologies: [
			"Cockpit", "PHP", "Nuxt.js", "API", "JSON", "YAML",
			"Tailwind CSS", "Docker", "Composer", "i18n", "Recaptcha"
		],
		externalLink: "https://autowebbb-motorsport.com/"
	},
	{
		title: "Steve Leiber",
		category: "Web / Mobile",
		description: "Site du pilote champion de drift Steve Leiber avec fonctionnalités complètes.",
		longDescription: `### 🏎️ Steve Leiber — Site officiel du pilote

Développement d’un site professionnel pour **Steve Leiber**, champion reconnu dans le monde du Drift.

Ce projet inclut :

- 🌐 **Frontend** dynamique et responsive avec Nuxt.js
- 🛠️ **Backend** structuré via PHP + Cockpit CMS (headless)
- 💾 **Base de données**
- 🔐 **Sécurité** avec ReCaptcha, rôles utilisateurs, validation
- ⚙️ **Infrastructure serveur** (Docker, variables d’environnement)

> Le site présente l’actualité du pilote, ses résultats, son palmarès, ses sponsors, et propose un formulaire de contact sécurisé.

---

### 🧰 Technologies principales

- Cockpit CMS (API headless)
- PHP (routes personnalisées)
- Nuxt.js (Vue.js frontend)
- JSON / YAML (config et data)
- Tailwind CSS (UI moderne)
- Composer
- i18n (multi-langue)
- ReCaptcha

> L'ensemble du projet a été pensé pour être responsive, maintenable et sécurisé.`,
		image: "/images/projects/preview-projects/steve.webp",
		technologies: [
			"Cockpit", "PHP", "Nuxt.js", "API", "JSON", "YAML",
			"Tailwind CSS", "Composer", "i18n", "Recaptcha"
		],
	},
	{
		title: "Julien Gerbi",
		category: "Web / Mobile",
		description: "Site du pilote Julien Gerbi avec frontend, backend et base de données sécurisés.",
		longDescription: `### 🏁 Julien Gerbi — Site officiel

Création d’un site professionnel complet pour le **pilote Julien Gerbi**, alliant design moderne, performance et sécurité.

#### 🧱 Architecture applicative
- 🌐 **Frontend** responsive avec Nuxt.js
- 🧠 **Backend** structuré via PHP + Cockpit CMS (headless)
- 💾 **Base de données**
- 🔐 **Sécurité utilisateur** (rôles, accès restreints, ReCaptcha)
- ⚙️ **Configuration serveur** via Docker
- 📁 **Variables d’environnement** pour paramètres sensibles

> Le site met en avant le parcours du pilote, ses actualités, partenaires et un formulaire de contact sécurisé.

---

### 🧰 Technologies principales

- Cockpit CMS (API headless)
- PHP
- Nuxt.js (Vue.js frontend)
- JSON / YAML
- Tailwind CSS
- Docker
- Composer
- i18n (traduction)
- ReCaptcha`,
		image: "/images/projects/preview-projects/juliengerbi.webp",
		technologies: [
			"Cockpit", "PHP", "Nuxt.js", "API", "JSON", "YAML",
			"Tailwind CSS", "Docker", "Composer", "i18n", "Recaptcha"
		],
		externalLink: "https://juliengerbi.com/"
	},
	{
		title: "Galerie Riva",
		category: "Web / Mobile",
		description: "Site e-commerce d'antiquité, avec base de données, panier, paiement et API La Poste.",
		longDescription: `### 🛒 Galerie Riva — Site E-commerce d'antiquité

Développement **from scratch** d'une plateforme e-commerce spécialisée dans les antiquités.

#### ⚙️ Fonctionnalités principales
- 💾 Base de données relationnelle (MySQL)
- 🔐 Authentification sécurisée
- 🛍️ Gestion de panier et commandes
- ✉️ Envoi de mails transactionnels (facture, confirmation)
- 💳 Paiement sécurisé
- 📦 Intégration de l’**API La Poste** pour suivi de livraison

> Le projet a été conçu avec performance, sécurité et extensibilité à l'esprit, tout en étant facile à maintenir et déployer.

### 🧰 Technologies utilisées
- PHP (Backend)
- AJAX (communication dynamique)
- JavaScript / Jquery
- API La Poste
- JSON (données)
- MySQL
- Bootstrap / Sass (UI responsive)
- Gulp.js (build pipeline)
- .htaccess (réécriture d’URL, sécurité)`,
		image: "/images/projects/preview-projects/galerie-riva.webp",
		technologies: [
			"PHP", "AJAX", "API la poste", "JavaScript", "Jquery", "JSON",
			"MySql", "Bootstrap", "Sass", "Gulp.js", ".htaccess"
		],
	},
	{
		title: "SymBnb",
		category: "Web / Mobile",
		description: "Site fictif de location de vacances avec gestion des utilisateurs et réservations.",
		githubLink: "https://github.com/Fournier-Paul/SymBnb",
		longDescription: `### 🏡 SymBnb — Prototype de location de vacances

Développement d’un **site factice** de location de vacances avec le framework **Symfony**, reproduisant les fonctionnalités essentielles d’une plateforme de réservation.

#### ✨ Fonctionnalités principales
- 🔐 Authentification sécurisée (connexion/inscription)
- 👥 Gestion des rôles utilisateurs (admin, hôte, client)
- 🗓️ Réservations en ligne avec gestion de calendrier
- 🧾 Fiches détaillées des logements
- 💬 Commentaires et notes clients
- 👤 Gestion de profil utilisateur

> Ce projet a été réalisé dans une logique pédagogique avec un objectif de structuration MVC propre et réutilisable.

---

### 🧰 Stack technologique
- Symfony (framework PHP)
- Twig (template engine)
- AJAX & JavaScript
- Jquery
- MySQL (base de données relationnelle)
- Bootstrap / Sass (interface responsive)
- Composer, Gulp.js (gestion dépendances & automatisation)
- Webpack / CLI / Faker
- Heroku (déploiement)
- .htaccess (configuration serveur)`,
		image: "/images/projects/preview-projects/SymBnb.webp",
		technologies: [
			"Symfony", "PHP", "Twig", "AJAX", "JavaScript", "Jquery", "MySql", "Bootstrap",
			"Sass", "CLI", "Composer", "Heroku", "Npm", "Webpack", "Faker", "Gulp.js", ".htaccess"
		],
	},
	{
		title: "Panterest",
		category: "Web / Mobile",
		description: "Site fictif de partage de photographies avec gestion utilisateurs et publications.",
		githubLink: "https://github.com/Fournier-Paul/Panterest",
		longDescription: `### 🖼️ Panterest — Plateforme de partage photo

Développement d’un **site factice** de partage de photographies en utilisant **Symfony** pour démontrer les bonnes pratiques backend et la sécurité des accès.

#### ✨ Fonctionnalités principales

- 📸 Création et affichage d’articles (posts)
- 🔐 Authentification avec vérification d’email
- 👤 Gestion des rôles utilisateurs (admin, utilisateur classique)
- ✏️ Gestion de profil personnel
- 🧩 Architecture MVC

> Le projet a été conçu pour illustrer les flux complets de création de contenu avec validation, sécurité et gestion d’accès.

---

### 🧰 Stack technologique

- Symfony (framework PHP moderne)
- PHP / Twig (moteur de template)
- JavaScript / Jquery / AJAX (interactivité)
- MySQL (base relationnelle)
- Bootstrap / Sass (design responsive)
- Composer, Npm, CLI, Webpack
- Faker (données factices)

> Ce projet pédagogique a permis de structurer un backend solide tout en offrant une interface intuitive.`,
		image: "/images/projects/preview-projects/panterest.webp",
		technologies: [
			"Symfony", "PHP", "Twig", "AJAX", "JavaScript", "Jquery", "MySql",
			"Bootstrap", "Sass", "CLI", "Composer", "Npm", "Webpack", "Faker"
		],
	},

	{
		title: "Unbee",
		category: "Web / Mobile",
		description: "Site CMS embarqué pour afficher un diaporama dans une salle de sport depuis un Raspberry Pi.",
		githubLink: "https://github.com/Fournier-Paul/Unbee",
		longDescription: `### 🏋️ Unbee — Diaporama dynamique pour salle de sport

**Unbee** est une solution CMS personnalisée pour écran d’accueil en salle de sport.
Elle permet d’afficher un **diaporama autonome** avec contenus dynamiques :

#### 🧩 Fonctionnalités principales
- 🖼️ Gestion des images de fond et effets visuels
- 🧾 Textes configurables (bandeau dynamique)
- 📰 Gestion des articles et des pages du diaporama
- 🧠 Générateur de templates
- ⏱️ Contrôle du temps d'affichage de chaque page
- 🔐 Authentification et gestion des accès

> Hébergement local sur Raspberry Pi, conçu pour démarrer automatiquement et fonctionner en autonomie complète.`,
		image: "/images/projects/preview-projects/unbee.webp",
		technologies: ["PHP", "AJAX", "JavaScript", "Jquery", "MySql", "CSS", "HTML", "librairie"],
		gallery: [{
				src: "/images/projects/unbee/unbee-0.webp",
				thumb: "/images/projects/unbee/unbee-0.webp"
			},
			{
				thumb: "/images/projects/unbee/unbee-1.webp",
				type: "video",
				width: 800,
				height: 600,
				autoplay: true,
				src: "/images/projects/unbee/Unbee-gif.mp4",
			},
			{
				src: "/images/projects/unbee/unbee-2.webp",
				thumb: "/images/projects/unbee/unbee-2.webp"
			},
			{
				src: "/images/projects/unbee/unbee-3.webp",
				thumb: "/images/projects/unbee/unbee-3.webp"
			},
			{
				src: "/images/projects/unbee/unbee-4.webp",
				thumb: "/images/projects/unbee/unbee-4.webp"
			},
			{
				src: "/images/projects/unbee/unbee-5.webp",
				thumb: "/images/projects/unbee/unbee-5.webp"
			},
			{
				src: "/images/projects/unbee/unbee-6.webp",
				thumb: "/images/projects/unbee/unbee-6.webp"
			},
			{
				src: "/images/projects/unbee/unbee-7.webp",
				thumb: "/images/projects/unbee/unbee-7.webp"
			},
			{
				src: "/images/projects/unbee/unbee-8.webp",
				thumb: "/images/projects/unbee/unbee-8.webp"
			},
			{
				src: "/images/projects/unbee/unbee-9.webp",
				thumb: "/images/projects/unbee/unbee-9.webp"
			},
			{
				src: "/images/projects/unbee/unbee-10.webp",
				thumb: "/images/projects/unbee/unbee-10.webp"
			},
			{
			src: "/images/projects/unbee/Unbee-diapo.mp4",
			thumb: "/images/projects/unbee/unbee-1.webp",
			type: "video",
			width: 800,
			height: 600,
			autoplay: true,
			sources: [{
				src: "/images/projects/unbee/Unbee-diapo.mp4",
				type: "video/mp4"
			}]
			}

		]
	},

	{
		title: "Vélo City",
		category: 'Web',
		description: "Application de réservation de vélos avec géolocalisation Mapbox.",
		image: "/images/projects/preview-projects/velo-city.webp",
		githubLink: "https://github.com/Fournier-Paul/Velo-City",
		longDescription: `### 🚴‍♂️ Vélo City — Application de réservation de vélo

**Vélo City** est un site web **single page** permettant de :

- 📍 Géolocaliser les stations de vélos disponibles via **Mapbox**
- 🔒 Réserver un vélo à une station en temps réel
- 💬 Interagir avec l’interface de façon fluide grâce à AJAX

---

### 🧰 Stack & Fonctionnalités

- 💾 **Base de données relationnelle** (MySQL)
- 🔗 **Déploiement d’une API REST** pour les réservations
- 🧭 Intégration **Mapbox API** pour l'affichage de la carte
- 🎨 Interface responsive avec Bootstrap + Sass
- ⚙️ Build optimisé via Gulp.js

---

> Ce projet met en pratique des concepts front et back simples: gestion d'état côté client, appel d'API asynchrone, traitement de la réservation, interactivité UX. Il s'agit d’un projet didactique orienté architecture légère.`,
		technologies: [
			"PHP", "AJAX", "API Mapbox", "JavaScript", "Jquery",
			"Bootstrap", "Sass", "Gulp.js"
		],
	},

	{
		title: "App Météo",
		category: "Web / Mobile",
		description: "Application météo simple développée avec VueJS.",
		image: "/images/projects/preview-projects/api-meteo.webp",
		githubLink: "https://github.com/Fournier-Paul/MeteoApiVueJs",
		longDescription: `### ☀️ App Météo — Application VueJS

Développement d’une **application météo légère** permettant d’afficher les conditions climatiques en temps réel pour une ville donnée.

---

### ⚙️ Fonctionnalités

- 📡 Connexion à l’**API OpenWeather**
- 🌍 Recherche par **nom de ville**
- 🌡️ Affichage des **températures**, **conditions météo**, **icônes** et **infos horaires**
- 🎨 Interface responsive et simple en CSS + Bootstrap

---

### 🧰 Technologies principales

- VueJS
- API OpenWeather
- Bootstrap
- CSS3

> Le projet a été réalisé dans un contexte pédagogique pour pratiquer la consommation d’API REST avec VueJS.`,
		technologies: ["VueJS", "API OpenWeather", "CSS", "Bootstrap"],
	},

	{
		title: "Stuliday",
		category: "Web / Mobile",
		description: "Site Front-end de réservation de logements à la montagne (premier projet).",
		image: "/images/projects/preview-projects/stuliday.webp",
		githubLink: "https://github.com/Fournier-Paul/Stuliday",
		longDescription: `### 🏔️ Stuliday — Site de réservation de logement à la montagne

Premier projet web complet réalisé dans un cadre académique, **Stuliday** est une plateforme fictive permettant de réserver des logements en montagne.

Ce site vitrine met en avant les hébergements disponibles et permet de simuler un processus de réservation via une base de données relationnelle.

---

### ⚙️ Fonctionnalités

- Affichage dynamique des logements
- Page de réservation
- Formulaire de contact
- Intégration base de données MySQL
- Responsive Design (Bootstrap)
- Composants réutilisables (HTML/CSS/JS)
  
---

### 🧰 Stack technologique

- JavaScript
- jQuery
- PHP
- MySQL
- Bootstrap
- CSS / HTML

---

> Ce projet a posé les bases de ma compréhension du web dynamique, des interactions client/serveur, et de la logique SQL côté back.
`,
		technologies: ["JavaScript", "Jquery", "PHP", "MySql", "Bootstrap", "CSS", "HTML"],
	},

];

export function slugify(title: string): string {
	return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}