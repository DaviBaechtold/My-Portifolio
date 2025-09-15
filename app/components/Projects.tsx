import { useState, useRef, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Link,
  Fade,
  Slide
} from "@mui/material"
import { Launch, GitHub } from "@mui/icons-material"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { useLanguage } from "./LanguageProvider"

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const cardRefs = useRef<(HTMLElement | null)[]>([])
  const { t } = useLanguage()

  const projects = [
    {
      titleKey: "projects.title.portfolio",
      descriptionKey: "projects.desc.portfolio",
      image: "",
      technologies: ["Next.js", "TypeScript", "Node.js", "Postgres", "HTML", "CSS", "JavaScript", "MUI"],
      githubLink: "https://github.com/DaviBaechtold/My-Portifolio",
      liveLink: ""
    },
    {
      titleKey: "projects.title.computerVision",
      descriptionKey: "projects.desc.computerVision",
      image: "",
      technologies: ["Python", "MediaPipe", "OpenCV", "Computer Vision", "Virtual Camera"],
      githubLink: "https://github.com/DaviBaechtold/Computer-Vision--HandRecognition",
      liveLink: ""
    },
    {
      titleKey: "projects.title.autoVoice",
      descriptionKey: "projects.desc.autoVoice",
      image: "",
      technologies: ["Python","C++", "Shell","Google Assistant SDK", "Speech Recognition", "Embedded Systems", "Artificial Intelligence", "Speech Synthesis"],
      githubLink: "https://github.com/DaviBaechtold/AutoVoice-Pro--Automotive-Voice-Assistant",
      liveLink: ""
    },
    {
      titleKey: "projects.title.followLine",
      descriptionKey: "projects.desc.followLine",
      image: "",
      technologies: ["C++","Python", "Arduino", "Assembly", "PCB Design", "Embedded Systems", "Electronics", "Soldering", "3D Modeling"],
      githubLink: "https://github.com/equipepucpr/Follow-Line",
      liveLink: ""
    },
    {
      titleKey: "projects.title.antweightRobot",
      descriptionKey: "projects.desc.antweightRobot",
      image: "",
      technologies: ["Soldering", "Electronics", "PCB Design", "3D Modeling", "3D Printing"],
      githubLink: "https://github.com/equipepucpr/Fairy-Gurren",
      liveLink: ""
    },
    {
      titleKey: "projects.title.accessManagementESP32",
      descriptionKey: "projects.desc.accessManagementESP32",
      image: "",
      technologies: ["C++", "ESP32", "RFID", "FreeRTOS", "WiFi", "HTTP", "JSON", "SPIFFS"],
      githubLink: "https://github.com/equipepucpr/access-management",
      liveLink: ""
    },
    {
      titleKey: "projects.title.imuVisualizer",
      descriptionKey: "projects.desc.imuVisualizer",
      image: "",
      technologies: ["Python", "Arduino", "Data Visualization"],
      githubLink: "https://github.com/DaviBaechtold/Arduino-IMU-Angle-Visualizer",
      liveLink: ""
    },
    {
      titleKey: "projects.title.vexProject",
      descriptionKey: "projects.desc.vexProject",
      image: "",
      technologies: ["C#", "Python", "3D Modeling"],
      githubLink: "",
      liveLink: "https://www.vexrobotics.com/competition"
    },
    {
      titleKey: "projects.title.coffeeMachinePcb",
      descriptionKey: "projects.desc.coffeeMachinePcb",
      image: "",
      technologies: ["PCB Design", "Electronics", "Soldering"],
      githubLink: "https://github.com/DaviBaechtold/Coffee-Machine-Project",
      liveLink: ""
    }
  ]

  const { ref, isVisible } = useScrollAnimation()

  useEffect(() => {
    setVisibleCards(new Array(projects.length).fill(false))
  }, [projects.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0')
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
              const newVisible = [...prev]
              if (!newVisible[index]) {
                newVisible[index] = true
                return newVisible
              }
              return prev
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    // Use a timeout to ensure refs are set
    const timeoutId = setTimeout(() => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref)
      })
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: 10,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark'
            ? 'grey.900'
            : 'grey.100'
      }}
    >
      <Container maxWidth="lg">
        <Fade in={isVisible} timeout={1000}>
          <Box ref={ref}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 'bold',
                mb: 4,
                textAlign: 'center',
                color: 'text.primary',
                fontFamily: 'monospace',
              }}
            >
              {t('projects.title')}
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  md: 'repeat(2, 1fr)',
                  lg: 'repeat(3, 1fr)',
                },
                gap: 4,
                justifyItems: 'center',
              }}
            >
              {projects.map((project, index) => (
                <Box
                  key={project.githubLink || project.liveLink || index}
                  sx={{
                    transform: visibleCards[index] 
                      ? 'translateX(0)' 
                      : {
                          xs: `translateY(${index % 2 === 0 ? '50px' : '-50px'})`,
                          sm: `translateX(${index % 2 === 0 ? '-100%' : '100%'})`
                        },
                    opacity: visibleCards[index] ? 1 : 0,
                    transition: `all ${300 + index * 100}ms ease-in-out`,
                  }}
                >
                  <Card
                    ref={(el) => {
                      cardRefs.current[index] = el
                    }}
                    data-index={index}
                    elevation={3}
                    sx={{
                      height: 'auto',
                      width: '100%',
                      maxWidth: 400,
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: (theme) => 
                        theme.palette.mode === 'dark' 
                          ? 'rgba(18, 18, 18, 0.8)' 
                          : 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: 4,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 6,
                        backgroundColor: (theme) => 
                          theme.palette.mode === 'dark' 
                            ? 'rgba(18, 18, 18, 0.9)' 
                            : 'rgba(255, 255, 255, 0.9)',
                      },
                    }}
                  >
                  <CardContent 
                    sx={{ 
                      p: 3, 
                      display: 'flex', 
                      flexDirection: 'column', 
                      height: '100%',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{ 
                          fontWeight: 600, 
                          mb: 1,
                          minHeight: '3rem',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          fontFamily: 'monospace'
                        }}
                      >
                        {t(project.titleKey)}
                      </Typography>

                      {project.descriptionKey && (
                        <Typography
                          variant="body2"
                          sx={{ 
                            color: 'text.secondary', 
                            mb: 2,
                            minHeight: '2.5rem',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontFamily: 'monospace'
                          }}
                        >
                          {t(project.descriptionKey)}
                        </Typography>
                      )}

                      <Box sx={{ minHeight: '120px', mb: 2 }}>
                        <Stack direction="row" flexWrap="wrap" gap={1}>
                          {project.technologies.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              variant="outlined"
                              sx={{ fontSize: '0.75rem', fontFamily: 'monospace' }}
                            />
                          ))}
                        </Stack>
                      </Box>
                    </Box>

                    <Stack
                      direction="row"
                      justifyContent={project.liveLink ? "space-between" : "flex-end"}
                      alignItems="center"
                      sx={{ mt: 'auto' }}
                    >
                      {project.liveLink && (
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: 'primary.main',
                            fontFamily: 'monospace',
                            '&:hover': {
                              color: 'primary.dark',
                            },
                          }}
                        >
                          <Launch sx={{ fontSize: 16, mr: 0.5 }} />
                          {t('projects.reference')}
                        </Link>
                      )}

                      {project.githubLink && (
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: 'primary.main',
                            fontFamily: 'monospace',
                            '&:hover': {
                              color: 'primary.dark',
                            },
                          }}
                        >
                          <GitHub sx={{ fontSize: 16, mr: 0.5 }} />
                          GitHub
                        </Link>
                      )}
                    </Stack>
                  </CardContent>
                </Card>
                </Box>
              ))}
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default Projects

