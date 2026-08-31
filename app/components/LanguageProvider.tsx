"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

export type Lang = "en" | "pt-BR" | "de"

type Dict = Record<string, string>

const dictionaries: Record<Lang, Dict> = {
  en: {
    "nav.home": "Home",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "ui.language": "Language",
    "lang.en": "English",
    "lang.pt-BR": "Português (Brasil)",
    "lang.de": "Deutsch",
    // Sections
    "home.downloadResume": "Download Resume",
    "projects.title": "Projects",
    "skills.title": "Skills",
    "skills.cat.frontend": "Frontend",
    "skills.cat.backend": "Backend",
    "skills.cat.databases": "Databases & Messaging",
    "skills.cat.devops": "DevOps & Tools",
    "skills.cat.security": "Security & Auth",
    "skills.cat.ai": "AI & Computer Vision",
    "skills.cat.embedded": "Embedded & IoT",
    "skills.cat.design": "Design",
    "education.title": "Education",
    "experience.title": "Experience",
    "contact.title": "Contact Me",
    "contact.getInTouch": "Get in Touch",
    "contact.intro": "I'm always open to new opportunities and collaborations. Feel free to reach out!",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.city": "Curitiba, BR",
    "toast.configError": "Configuration error. Please contact the administrator.",
    "toast.success": "Message sent successfully! I'll get back to you soon.",
    "toast.fail": "Failed to send message. Please try again later.",
    "toast.network": "Network error. Please check your connection and try again.",
    "projects.reference": "Reference",
    // Project titles
    "projects.title.portfolio": "Portfolio",
    "projects.title.computerVision": "Computer Vision Project",
    "projects.title.autoVoice": "Voice Assistant - Google Dev Board",
    "projects.title.followLine": "Follow line - Robotics Team - PUCPR",
    "projects.title.antweightRobot": "Antweight combat robot - Robotics Team - PUCPR",
    "projects.title.accessManagementESP32": "Access Management ESP32 - Robotics Team",
    "projects.title.imuVisualizer": "Arduino IMU Angle Visualizer",
    "projects.title.vexProject": "VEX Project - Industrial Robotics",
    "projects.title.coffeeMachinePcb": "Coffee Machine PCB - Freelance",
    "projects.title.linkedinAutomation": "LinkedIn Branding Automation",
    "projects.title.spotifyToYtmusic": "Spotify to YouTube Music Transfer",
    "projects.title.autoU": "AutoU - Email Classifier",
    "projects.title.followPucpr": "Line Follower & PCBs - PUCPR",
    "projects.title.raspscreen": "RaspScreen - Smart Printer Dashboard",
    "projects.title.stikerFoda": "Pinterest to WhatsApp Stickers",
    // Experience positions and durations
    "experience.position.belogic": "Full Stack Developer (PJ)",
    "experience.position.celepar": "IT Intern",
    "experience.position.thi": "Research Assistant",
    "experience.position.brf": "Software Engineer Intern",
    "experience.position.pucprRobotics": "Autonomous Robots Team Manager",
    "experience.duration.belogic": "Feb 2026 - Present",
    "experience.duration.celepar": "Sep 2025 - Jan 2026",
    "experience.duration.thi": "Sep 2024 - Aug 2025",
    "experience.duration.brf": "Feb 2023 - Sep 2024",
    "experience.duration.pucprRobotics": "Feb 2022 – Jul 2023",
    // Education degrees
    "education.degree.computerEngineering": "Computer Engineering",
    "education.degree.csaiExchange": "Computer Science and AI (Exchange Program)",
    "education.degree.schooling": "Schooling",
    // Project descriptions
    "projects.desc.portfolio": "A personal portfolio showcasing my projects and skills.",
    "projects.desc.computerVision": "A real-time computer vision application that processes a webcam feed, applies image filters and statistical analyses, and recognizes hand gestures using MediaPipe. The processed video is output to a virtual camera for use in other applications.",
    "projects.desc.autoVoice": "A Brazilian Portuguese voice assistant for automotive use, developed for the Google Dev Board (AA1).",
    "projects.desc.followLine": "Repository with line-follower code (Arduino, C++ and Assembly) and hardware files (PCBs) for autonomous robots. Includes PID control examples, dynamic calibration, PCB designs and documentation for assembly and programming.",
    "projects.desc.antweightRobot": "Antweight (~150g) combat robot project with CAD models (SolidWorks/STEP), electronic components, 3D print files and assembly instructions. Includes details on brushless motors, ESC, receiver, battery and printed parts for construction and testing.",
    "projects.desc.accessManagementESP32": "An access control system using an ESP32 and RFID. It authenticates users via RFID cards, manages credentials fetched from a server, logs access events, and provides real-time feedback with LEDs and a buzzer. The system features Wi-Fi connectivity, NTP time synchronization, and uses FreeRTOS for concurrent tasks.",
    "projects.desc.imuVisualizer": "Real-time reading, transmission and visualization of IMU sensor data (accelerometer and gyroscope) from an Arduino, with graphical visualization in Python.",
    "projects.desc.vexProject": "Development of a robotic arm for industrial applications, focusing on precision and efficiency.",
    "projects.desc.coffeeMachinePcb": "Design and development of a PCB for a coffee machine, focusing on power management and control systems.",
    "projects.desc.linkedinAutomation": "Automates LinkedIn personal branding by extracting local git commits, generating engaging posts with Gemini AI, and publishing after human approval via Telegram. Includes an NDA filter to prevent sensitive information leaks.",
    "projects.desc.spotifyToYtmusic": "Transfers Spotify playlists to YouTube Music via direct link or CSV files. Supports playlist merging (adds only new tracks), cancellation at any time, and automatic track search on YouTube Music.",
    "projects.desc.autoU": "Web app that classifies emails as Productive or Unproductive using NLP and zero-shot classification via Hugging Face. Suggests auto-replies using rule-based templates and optional language models. Flask backend with HTML/CSS/JS frontend.",
    "projects.desc.followPucpr": "Repository with line-follower firmware (Arduino/C++) and PCB hardware files for the PUCPR robotics team. Includes PID control, dynamic calibration, multiple sensor configurations, AVR Assembly examples, and PCB designs.",
    "projects.desc.raspscreen": "Full control dashboard for a Creality Ender 3 V2 3D printer via Raspberry Pi 3B. Features a local 4\" TFT SPI display (Python/Pillow, dark mode) and a remote web dashboard (HTML/JS). Powered by Klipper + Moonraker. Remote access via Tailscale.",
    "projects.desc.stikerFoda": "Mobile app (Android/iOS) that converts Pinterest boards into WhatsApp sticker packs. Handles Pinterest OAuth, image processing (crop, resize to 512x512px, WebP conversion via Sharp), and sticker pack bundling. React Native frontend with Node.js/Express backend.",
    // Experience descriptions
    "experience.desc.belogic": "Fullstack Engineer building and maintaining multiple client products in parallel. Frontend with TypeScript (React/Next.js, React Native/Expo). Backend with polyglot architectures (Java/Spring Boot, Python/FastAPI/Flask, Node.js, Laravel/PHP). Strong experience with live video streaming (RTSP/HLS, MediaMTX, ffmpeg), AWS (S3, Rekognition), security (OAuth2/Keycloak, Firebase, JWT), Prisma ORM, Celery/RabbitMQ, and WebSocket. Also own DevOps: CI/CD pipelines (Jenkins, GitHub Actions), multi-environment Docker deployments (dev/staging/prod), and server management. Promoted to Full Stack Developer (Mid-level) in July 2026.",
    "experience.desc.celepar": "Technical Support & Infrastructure specialist. Managed user support, system configuration, and hardware maintenance (OS installation, hardware setup). Contributed to documentation standards and Git version control implementation. Supported infrastructure updates across Windows/Linux environments.",
    "experience.desc.thi": "Research Developer specializing in autonomous systems and real-time processing. Developed AutoVoice, a voice command system for autonomous vehicles using speech recognition and synthesis. Created IMU Visualizer for real-time inertial sensor data visualization from Arduino. Contributed to Computer Vision projects including hand gesture recognition with ML models.",
    "experience.desc.brf": "Platform Engineer & Developer for ServiceNow. Managed and maintained enterprise ServiceNow instance supporting critical business processes. Responsibilities included version control, deployment management, user access control, and platform customization using Python and JavaScript. Integrated external APIs via Postman for system interoperability.",
    "experience.desc.pucprRobotics": "Technical Lead & Project Manager for robotics team (5 members). Responsible for project planning, timeline definition, and technical oversight. Delivered multiple projects including PCB design, embedded systems programming (C++/Python), and full robot assembly. Team achieved 3 first-place finishes across different national competitions (RCX, Iron Cup, and Trekking events).",
  },
  "pt-BR": {
    "nav.home": "Início",
    "nav.education": "Educação",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contato",
    "ui.language": "Idioma",
    "lang.en": "Inglês",
    "lang.pt-BR": "Português (Brasil)",
    "lang.de": "Alemão",
    // Sections
    "home.downloadResume": "Baixar Currículo",
    "projects.title": "Projetos",
    "skills.title": "Habilidades",
    "skills.cat.frontend": "Frontend",
    "skills.cat.backend": "Backend",
    "skills.cat.databases": "Bancos de Dados & Mensageria",
    "skills.cat.devops": "DevOps & Ferramentas",
    "skills.cat.security": "Segurança & Auth",
    "skills.cat.ai": "IA & Visão Computacional",
    "skills.cat.embedded": "Embarcados & IoT",
    "skills.cat.design": "Design",
    "education.title": "Educação",
    "experience.title": "Experiência",
    "contact.title": "Fale Comigo",
    "contact.getInTouch": "Entre em Contato",
    "contact.intro": "Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!",
    "contact.name": "Nome",
    "contact.email": "E-mail",
    "contact.message": "Mensagem",
    "contact.send": "Enviar Mensagem",
    "contact.city": "Curitiba, BR",
    "toast.configError": "Erro de configuração. Por favor, contate o administrador.",
    "toast.success": "Mensagem enviada com sucesso! Retornarei em breve.",
    "toast.fail": "Falha ao enviar a mensagem. Tente novamente mais tarde.",
    "toast.network": "Erro de rede. Verifique sua conexão e tente novamente.",
    "projects.reference": "Referência",
    // Project titles
    "projects.title.portfolio": "Portfólio",
    "projects.title.computerVision": "Projeto de Visão Computacional",
    "projects.title.autoVoice": "Assistente de Voz - Google Dev Board",
    "projects.title.followLine": "Seguidor de Linha - Equipe de Robótica - PUCPR",
    "projects.title.antweightRobot": "Robô de Combate Antweight - Equipe de Robótica - PUCPR",
    "projects.title.accessManagementESP32": "Controle de Acesso com ESP32 - Equipe de Robótica",
    "projects.title.imuVisualizer": "Visualizador de Ângulo IMU com Arduino",
    "projects.title.vexProject": "Projeto VEX - Robótica Industrial",
    "projects.title.coffeeMachinePcb": "PCB para Máquina de Café - Freelance",
    "projects.title.linkedinAutomation": "Automação de Personal Branding no LinkedIn",
    "projects.title.spotifyToYtmusic": "Transferência Spotify para YouTube Music",
    "projects.title.autoU": "AutoU - Classificador de E-mails",
    "projects.title.followPucpr": "Seguidor de Linha & PCBs - PUCPR",
    "projects.title.raspscreen": "RaspScreen - Dashboard para Impressora 3D",
    "projects.title.stikerFoda": "Pinterest para Figurinhas WhatsApp",
    // Experience positions and durations
    "experience.position.belogic": "Desenvolvedor Full Stack (PJ)",
    "experience.position.celepar": "Estagiário de TI",
    "experience.position.thi": "Assistente de Pesquisa",
    "experience.position.brf": "Estagiário de Engenharia de Software",
    "experience.position.pucprRobotics": "Líder da Equipe de Robôs Autônomos",
    "experience.duration.belogic": "fev 2026 - atual",
    "experience.duration.celepar": "set 2025 - jan 2026",
    "experience.duration.thi": "set 2024 - ago 2025",
    "experience.duration.brf": "fev 2023 - set 2024",
    "experience.duration.pucprRobotics": "fev 2022 – jul 2023",
    // Education degrees
    "education.degree.computerEngineering": "Engenharia de Computação",
    "education.degree.csaiExchange": "Ciência da Computação e IA (Intercâmbio)",
    "education.degree.schooling": "Ensino Médio",
    // Project descriptions
    "projects.desc.portfolio": "Um portfólio pessoal que apresenta meus projetos e habilidades.",
    "projects.desc.computerVision": "Aplicativo de visão computacional em tempo real que processa o vídeo da webcam, aplica filtros de imagem e análises estatísticas, e reconhece gestos de mão usando o MediaPipe. O vídeo processado é enviado para uma câmera virtual para uso em outros aplicativos.",
    "projects.desc.autoVoice": "Assistente de voz em português brasileiro para uso automotivo, desenvolvido para a Google Dev Board (AA1).",
    "projects.desc.followLine": "Repositório com código de seguidor de linha (Arduino, C++ e Assembly) e arquivos de hardware (PCBs) para robôs autônomos. Inclui exemplos de controle PID, calibração dinâmica, projetos de PCB e documentação para montagem e programação.",
    "projects.desc.antweightRobot": "Projeto de robô de combate Antweight (~150g) com modelos CAD (SolidWorks/STEP), componentes eletrônicos, arquivos para impressão 3D e instruções de montagem. Inclui detalhes sobre motores brushless, ESC, receptor, bateria e peças impressas para construção e testes.",
    "projects.desc.accessManagementESP32": "Sistema de controle de acesso usando ESP32 e RFID. Autentica usuários por cartões RFID, gerencia credenciais obtidas de um servidor, registra eventos de acesso e fornece feedback em tempo real com LEDs e buzzer. Possui Wi‑Fi, sincronização de horário via NTP e usa FreeRTOS para tarefas concorrentes.",
    "projects.desc.imuVisualizer": "Leitura, transmissão e visualização em tempo real de dados de sensores IMU (acelerômetro e giroscópio) de um Arduino, com visualização gráfica em Python.",
    "projects.desc.vexProject": "Desenvolvimento de um braço robótico para aplicações industriais, com foco em precisão e eficiência.",
    "projects.desc.coffeeMachinePcb": "Projeto e desenvolvimento de uma PCB para máquina de café, com foco em gerenciamento de potência e sistemas de controle.",
    "projects.desc.linkedinAutomation": "Automatiza o personal branding no LinkedIn extraindo commits locais via git, gerando posts engajadores com Gemini AI e publicando após aprovação via Telegram. Inclui filtro de NDA para evitar vazamento de informações confidenciais.",
    "projects.desc.spotifyToYtmusic": "Transfere playlists do Spotify para o YouTube Music via link direto ou arquivos CSV. Suporta merge de playlists (adiciona apenas músicas novas), cancelamento a qualquer momento e busca automática das músicas.",
    "projects.desc.autoU": "Aplicação web que classifica e-mails como Produtivos ou Improdutivos usando NLP e classificação zero-shot via Hugging Face. Sugere respostas automáticas com templates e modelos de linguagem. Backend Flask com frontend HTML/CSS/JS.",
    "projects.desc.followPucpr": "Repositório com firmware de seguidor de linha (Arduino/C++) e arquivos de hardware PCB para a equipe de robótica da PUCPR. Inclui controle PID, calibração dinâmica, múltiplas configurações de sensores, exemplos em Assembly AVR e projetos PCB.",
    "projects.desc.raspscreen": "Dashboard completo para controle de uma impressora 3D Creality Ender 3 V2 via Raspberry Pi 3B. Possui display TFT SPI 4\" local (Python/Pillow, dark mode) e dashboard web remoto (HTML/JS). Backend com Klipper + Moonraker. Acesso remoto via Tailscale.",
    "projects.desc.stikerFoda": "Aplicativo mobile (Android/iOS) que converte pastas do Pinterest em pacotes de figurinhas para o WhatsApp. Realiza autenticação OAuth com Pinterest, processamento de imagens (crop, resize 512x512px, conversão para WebP via Sharp) e empacotamento respeitando os limites do WhatsApp. Frontend em React Native com backend Node.js/Express.",
    // Experience descriptions
    "experience.desc.belogic": "Engenheiro Fullstack desenvolvendo e mantendo múltiplos produtos de clientes em paralelo. Frontend com TypeScript (React/Next.js, React Native/Expo). Backend com arquiteturas políglotas (Java/Spring Boot, Python/FastAPI/Flask, Node.js, Laravel/PHP). Forte experiência com streaming de vídeo ao vivo (RTSP/HLS, MediaMTX, ffmpeg), AWS (S3, Rekognition), segurança (OAuth2/Keycloak, Firebase, JWT), Prisma ORM, Celery/RabbitMQ e WebSocket. Também responsável por DevOps: pipelines de CI/CD (Jenkins, GitHub Actions), deploys multi-ambiente com Docker (dev/homologação/produção) e gerenciamento de servidor. Promovido a Desenvolvedor Full Stack Pleno em julho de 2026.",
    "experience.desc.celepar": "Especialista em Suporte Técnico & Infraestrutura. Gerenciei suporte a usuários, configuração de sistemas e manutenção de hardware (instalação de SO, setup de hardware). Contribuí para padrões de documentação e implementação de controle de versão Git. Apoiei atualizações de infraestrutura em ambientes Windows/Linux.",
    "experience.desc.thi": "Desenvolvedor de Pesquisa especializado em sistemas autônomos e processamento em tempo real. Desenvolvi AutoVoice, um sistema de comando por voz para veículos autônomos com reconhecimento e síntese de fala. Criei IMU Visualizer para visualização em tempo real de dados de sensores inerciais do Arduino. Contribuí em projetos de Computer Vision incluindo reconhecimento de gestos de mão com modelos de ML.",
    "experience.desc.brf": "Engenheiro de Plataforma & Desenvolvedor ServiceNow. Gerenciei e mantive instância ServiceNow corporativa suportando processos críticos de negócio. Responsabilidades incluíram controle de versão, gerenciamento de deployment, controle de acesso de usuários e customização de plataforma usando Python e JavaScript. Integrei APIs externas via Postman para interoperabilidade do sistema.",
    "experience.desc.pucprRobotics": "Líder Técnico & Gerente de Projetos para equipe de robótica (5 membros). Responsável por planejamento de projetos, definição de cronogramas e supervisão técnica. Entreguei múltiplos projetos incluindo design de PCB, programação de sistemas embarcados (C++/Python) e montagem completa de robôs. Equipe conquistou 3 primeiros lugares em diferentes competições nacionais (RCX, Iron Cup e Trekking).",
  },
  de: {
    "nav.home": "Start",
    "nav.education": "Ausbildung",
    "nav.experience": "Erfahrung",
    "nav.projects": "Projekte",
    "nav.skills": "Fähigkeiten",
    "nav.contact": "Kontakt",
    "ui.language": "Sprache",
    "lang.en": "Englisch",
    "lang.pt-BR": "Portugiesisch (Brasilien)",
    "lang.de": "Deutsch",
    // Sections
    "home.downloadResume": "Lebenslauf herunterladen",
    "projects.title": "Projekte",
    "skills.title": "Fähigkeiten",
    "skills.cat.frontend": "Frontend",
    "skills.cat.backend": "Backend",
    "skills.cat.databases": "Datenbanken & Messaging",
    "skills.cat.devops": "DevOps & Tools",
    "skills.cat.security": "Sicherheit & Auth",
    "skills.cat.ai": "KI & Computer Vision",
    "skills.cat.embedded": "Embedded & IoT",
    "skills.cat.design": "Design",
    "education.title": "Ausbildung",
    "experience.title": "Erfahrung",
    "contact.title": "Kontaktiere mich",
    "contact.getInTouch": "Kontakt aufnehmen",
    "contact.intro": "Ich bin immer offen für neue Möglichkeiten und Kooperationen. Melde dich gern!",
    "contact.name": "Name",
    "contact.email": "E-Mail",
    "contact.message": "Nachricht",
    "contact.send": "Nachricht senden",
    "contact.city": "Curitiba, BR",
    "toast.configError": "Konfigurationsfehler. Bitte kontaktiere den Administrator.",
    "toast.success": "Nachricht erfolgreich gesendet! Ich melde mich bald.",
    "toast.fail": "Senden fehlgeschlagen. Bitte versuche es später erneut.",
    "toast.network": "Netzwerkfehler. Bitte Verbindung prüfen und erneut versuchen.",
    "projects.reference": "Referenz",
    // Project titles
    "projects.title.portfolio": "Portfolio",
    "projects.title.computerVision": "Computer-Vision-Projekt",
    "projects.title.autoVoice": "Sprachassistent - Google Dev Board",
    "projects.title.followLine": "Linienfolger - Robotikteam - PUCPR",
    "projects.title.antweightRobot": "Antweight-Kampfroboter - Robotikteam - PUCPR",
    "projects.title.accessManagementESP32": "Zutrittsverwaltung ESP32 - Robotikteam",
    "projects.title.imuVisualizer": "Arduino IMU-Winkel-Visualizer",
    "projects.title.vexProject": "VEX-Projekt - Industrierobotik",
    "projects.title.coffeeMachinePcb": "Kaffeemaschinen-PCB - Freelance",
    "projects.title.linkedinAutomation": "LinkedIn Personal Branding Automatisierung",
    "projects.title.spotifyToYtmusic": "Spotify zu YouTube Music Transfer",
    "projects.title.autoU": "AutoU - E-Mail-Klassifikator",
    "projects.title.followPucpr": "Linienfolger & PCBs - PUCPR",
    "projects.title.raspscreen": "RaspScreen - Smart 3D-Drucker-Dashboard",
    "projects.title.stikerFoda": "Pinterest zu WhatsApp-Stickern",
    // Experience positions and durations
    "experience.position.belogic": "Full Stack Developer (PJ)",
    "experience.position.celepar": "IT-Praktikant",
    "experience.position.thi": "Wissenschaftlicher Mitarbeiter",
    "experience.position.brf": "Software Engineering Praktikant",
    "experience.position.pucprRobotics": "Leiter des Teams für autonome Roboter",
    "experience.duration.belogic": "Feb. 2026 – heute",
    "experience.duration.celepar": "Sept. 2025 – Jan. 2026",
    "experience.duration.thi": "Sept. 2024 – Aug. 2025",
    "experience.duration.brf": "Feb. 2023 – Sept. 2024",
    "experience.duration.pucprRobotics": "Feb. 2022 – Juli 2023",
    // Education degrees
    "education.degree.computerEngineering": "Informatikingenieurwesen",
    "education.degree.csaiExchange": "Informatik und KI (Austauschprogramm)",
    "education.degree.schooling": "Schulbildung",
    // Project descriptions
    "projects.desc.portfolio": "Ein persönliches Portfolio, das meine Projekte und Fähigkeiten präsentiert.",
    "projects.desc.computerVision": "Echtzeit-Computer-Vision-Anwendung, die einen Webcam-Stream verarbeitet, Bildfilter und statistische Analysen anwendet und Handgesten mit MediaPipe erkennt. Das verarbeitete Video wird an eine virtuelle Kamera ausgegeben, um es in anderen Anwendungen zu nutzen.",
    "projects.desc.autoVoice": "Ein portugiesisch-brasilianischer Sprachassistent für den Automotive-Einsatz, entwickelt für das Google Dev Board (AA1).",
    "projects.desc.followLine": "Repository mit Line-Follower-Code (Arduino, C++ und Assembly) und Hardware-Dateien (PCBs) für autonome Roboter. Enthält PID-Regelungsbeispiele, dynamische Kalibrierung, PCB-Designs und Dokumentation für Aufbau und Programmierung.",
    "projects.desc.antweightRobot": "Antweight (~150 g) Kampfroboter-Projekt mit CAD-Modellen (SolidWorks/STEP), elektronischen Komponenten, 3D-Druckdateien und Montageanleitungen. Enthält Details zu bürstenlosen Motoren, ESC, Empfänger, Akku und gedruckten Teilen für Aufbau und Tests.",
    "projects.desc.accessManagementESP32": "Zutrittskontrollsystem mit ESP32 und RFID. Authentifiziert Benutzer über RFID-Karten, verwaltet vom Server bezogene Anmeldedaten, protokolliert Zutrittsereignisse und bietet Echtzeit-Feedback mit LEDs und Summer. Verfügt über WLAN, NTP-Zeitsynchronisation und nutzt FreeRTOS für parallele Tasks.",
    "projects.desc.imuVisualizer": "Echtzeit-Erfassung, Übertragung und Visualisierung von IMU-Sensordaten (Beschleunigungsmesser und Gyroskop) von einem Arduino, mit grafischer Darstellung in Python.",
    "projects.desc.vexProject": "Entwicklung eines Roboterarms für industrielle Anwendungen mit Fokus auf Präzision und Effizienz.",
    "projects.desc.coffeeMachinePcb": "Entwurf und Entwicklung einer Leiterplatte für eine Kaffeemaschine mit Fokus auf Leistungsmanagement und Steuerungssysteme.",
    "projects.desc.linkedinAutomation": "Automatisiert LinkedIn Personal Branding durch Extraktion lokaler Git-Commits, Generierung ansprechender Posts mit Gemini AI und Veröffentlichung nach manueller Freigabe via Telegram. Inklusive NDA-Filter gegen Datenlecks.",
    "projects.desc.spotifyToYtmusic": "Überträgt Spotify-Playlists auf YouTube Music via direktem Link oder CSV-Dateien. Unterstützt Playlist-Zusammenführung (fügt nur neue Tracks hinzu), Abbruch jederzeit und automatische Track-Suche.",
    "projects.desc.autoU": "Webanwendung, die E-Mails mit NLP und Zero-Shot-Klassifikation via Hugging Face als produktiv oder unproduktiv klassifiziert. Schlägt automatische Antworten via Regelvorlagen und optionale Sprachmodelle vor. Flask-Backend mit HTML/CSS/JS-Frontend.",
    "projects.desc.followPucpr": "Repository mit Linienfolger-Firmware (Arduino/C++) und PCB-Hardware-Dateien für das PUCPR Robotik-Team. Enthält PID-Regelung, dynamische Kalibrierung, mehrere Sensorkonfigurationen, AVR-Assembly-Beispiele und PCB-Designs.",
    "projects.desc.raspscreen": "Vollständiges Steuerungs-Dashboard für einen Creality Ender 3 V2 3D-Drucker über Raspberry Pi 3B. Beinhaltet ein lokales 4\" TFT-SPI-Display (Python/Pillow, Dark Mode) und ein Remote-Web-Dashboard (HTML/JS). Backend mit Klipper + Moonraker. Fernzugriff über Tailscale.",
    "projects.desc.stikerFoda": "Mobile App (Android/iOS), die Pinterest-Boards in WhatsApp-Sticker-Pakete umwandelt. Führt Pinterest-OAuth, Bildverarbeitung (Zuschnitt, Resize auf 512x512px, WebP-Konvertierung via Sharp) und Sticker-Paket-Erstellung durch. React Native Frontend mit Node.js/Express Backend.",
    // Experience descriptions
    "experience.desc.belogic": "Fullstack-Ingenieur, der mehrere Kundenprodukte parallel entwickelt und betreut. Frontend mit TypeScript (React/Next.js, React Native/Expo). Backend mit polyglotter Architektur (Java/Spring Boot, Python/FastAPI/Flask, Node.js, Laravel/PHP). Starke Erfahrung mit Live-Video-Streaming (RTSP/HLS, MediaMTX, ffmpeg), AWS (S3, Rekognition), Sicherheit (OAuth2/Keycloak, Firebase, JWT), Prisma ORM, Celery/RabbitMQ und WebSocket. Zusätzlich verantwortlich für DevOps: CI/CD-Pipelines (Jenkins, GitHub Actions), Multi-Umgebungs-Deployments mit Docker (Dev/Staging/Prod) und Serververwaltung. Im Juli 2026 zum Full Stack Developer (Mid-Level) befördert.",
    "experience.desc.celepar": "Technischer Support & Infrastruktur-Spezialist. Verwaltung von Benutzer-Support, Systemkonfiguration und Hardware-Wartung (OS-Installation, Hardware-Setup). Beitrag zu Dokumentationsstandards und Git-Versionskontroll-Implementierung. Unterstützung bei Infrastruktur-Updates in Windows/Linux-Umgebungen.",
    "experience.desc.thi": "Forschungs-Entwickler spezialisiert auf autonome Systeme und Echtzeit-Verarbeitung. Entwickelt AutoVoice, ein Sprachbefehlssystem für autonome Fahrzeuge mit Spracherkennung und -synthese. Erstellte IMU Visualizer zur Echtzeit-Visualisierung von Arduino-Sensordaten. Mitwirkung bei Computer-Vision-Projekten einschließlich Hand-Gesten-Erkennung mit ML-Modellen.",
    "experience.desc.brf": "Plattform-Ingenieur & Entwickler für ServiceNow. Verwaltung und Wartung einer ServiceNow-Unternehmensinstanz zur Unterstützung kritischer Geschäftsprozesse. Verantwortung für Versionskontrolle, Deployment-Management, Benutzerzugriffskontrolle und Plattform-Anpassung mit Python und JavaScript. Integration externer APIs über Postman für Systeminteroperabilität.",
    "experience.desc.pucprRobotics": "Technischer Leiter & Projektmanager für Robotik-Team (5 Mitglieder). Verantwortung für Projektplanung, Zeitplanung und technische Aufsicht. Durchführung mehrerer Projekte einschließlich PCB-Design, Embedded-Systems-Programmierung (C++/Python) und vollständige Roboter-Montage. Team erzielte 3 erste Plätze in verschiedenen nationalen Wettbewerben (RCX, Iron Cup und Trekking-Events).",
  },
}

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  // Load preferred language from localStorage or browser
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null
      if (saved && ["en", "pt-BR", "de"].includes(saved)) {
        setLangState(saved)
      } else if (typeof navigator !== "undefined") {
        const nav = navigator.language || "en"
        if (nav.startsWith("pt")) setLangState("pt-BR")
        else if (nav.startsWith("de")) setLangState("de")
        else setLangState("en")
      }
    } catch {
      // ignore
    }
  }, [])

  // Persist and update <html lang>
  useEffect(() => {
    try {
      localStorage.setItem("lang", lang)
    } catch {
      // ignore
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "pt-BR" ? "pt-BR" : lang
    }
  }, [lang])

  const setLang = (l: Lang) => setLangState(l)

  const t = useMemo(() => {
    const dict = dictionaries[lang]
    return (key: string) => dict[key] ?? key
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang])

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}

export const i18nDictionaries = dictionaries
