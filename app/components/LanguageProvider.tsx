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
    // Experience positions and durations
    "experience.position.celepar": "IT Intern",
    "experience.position.thi": "Research Assistant",
    "experience.position.brf": "Software Engineer Intern",
    "experience.position.pucprRobotics": "Autonomous Robots Team Manager",
    "experience.duration.celepar": "Sep 2025 - Present",
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
    // Experience descriptions
    "experience.desc.celepar": "Provided technical support, including OS (Windows/Linux) installation, hardware setup, and user assistance with applications, printers, and security software.",
    "experience.desc.thi": "Developed AutoVoice, a voice command system for autonomous vehicles, and the IMU Visualizer, a tool for inertial sensor data visualization.",
    "experience.desc.brf": "Developed a product image analysis system using Azure ML and OpenAI for anomaly detection. Automated processes with Power Automate and created dashboards in Power BI.",
    "experience.desc.pucprRobotics": "Led the construction of line-follower, sumo, and trekking robots. Competed in events like RCX and Iron Cup.",
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
    // Experience positions and durations
    "experience.position.celepar": "Estagiário de TI",
    "experience.position.thi": "Assistente de Pesquisa",
    "experience.position.brf": "Estagiário de Engenharia de Software",
    "experience.position.pucprRobotics": "Líder da Equipe de Robôs Autônomos",
    "experience.duration.celepar": "set 2025 - atual",
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
    // Experience descriptions
    "experience.desc.celepar": "Prestei suporte técnico, incluindo instalação de SO (Windows/Linux), configuração de hardware e assistência a usuários com aplicativos, impressoras e softwares de segurança.",
    "experience.desc.thi": "Desenvolvi o AutoVoice, um sistema de comando por voz para veículos autônomos, e o IMU Visualizer, uma ferramenta para visualização de dados de sensores inerciais.",
    "experience.desc.brf": "Desenvolvi um sistema de análise de imagens de produtos usando Azure ML e OpenAI para detecção de anomalias. Automatizei processos com Power Automate e criei dashboards no Power BI.",
    "experience.desc.pucprRobotics": "Liderei a construção de robôs seguidor de linha, sumô e trekking. Participei de competições como RCX e Iron Cup.",
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
    // Experience positions and durations
    "experience.position.celepar": "IT-Praktikant",
    "experience.position.thi": "Wissenschaftlicher Mitarbeiter",
    "experience.position.brf": "Software Engineering Praktikant",
    "experience.position.pucprRobotics": "Leiter des Teams für autonome Roboter",
    "experience.duration.celepar": "Sept. 2025 – heute",
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
    // Experience descriptions
    "experience.desc.celepar": "Technischen Support bereitgestellt, einschließlich Installation von Betriebssystemen (Windows/Linux), Hardwareeinrichtung und Benutzerunterstützung bei Anwendungen, Druckern und Sicherheitssoftware.",
    "experience.desc.thi": "Entwicklung von AutoVoice, einem Sprachbefehlssystem für autonome Fahrzeuge, und des IMU Visualizer, einem Tool zur Visualisierung von Inertialsensordaten.",
    "experience.desc.brf": "Entwicklung eines Systems zur Produktbildanalyse mit Azure ML und OpenAI zur Anomalieerkennung. Prozesse mit Power Automate automatisiert und Dashboards in Power BI erstellt.",
    "experience.desc.pucprRobotics": "Leitung des Aufbaus von Line-Follower-, Sumo- und Trekking-Robotern. Teilnahme an Wettbewerben wie RCX und Iron Cup.",
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
