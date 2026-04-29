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
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { Launch, GitHub, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { useLanguage } from "./LanguageProvider"

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'))

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
    },
    {
      titleKey: "projects.title.linkedinAutomation",
      descriptionKey: "projects.desc.linkedinAutomation",
      image: "",
      technologies: ["Python", "Gemini AI", "LinkedIn API", "Telegram API", "Git"],
      githubLink: "https://github.com/DaviBaechtold/Linkedin-commits-generator",
      liveLink: ""
    },
    {
      titleKey: "projects.title.spotifyToYtmusic",
      descriptionKey: "projects.desc.spotifyToYtmusic",
      image: "",
      technologies: ["Python", "Spotify API", "YouTube Music API"],
      githubLink: "https://github.com/DaviBaechtold/spotify_to_ytmusic",
      liveLink: ""
    },
    {
      titleKey: "projects.title.autoU",
      descriptionKey: "projects.desc.autoU",
      image: "",
      technologies: ["Python", "Flask", "NLP", "Hugging Face", "Zero-shot Classification", "HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/DaviBaechtold/AutoU",
      liveLink: ""
    },
    {
      titleKey: "projects.title.followPucpr",
      descriptionKey: "projects.desc.followPucpr",
      image: "",
      technologies: ["C++", "Arduino", "PCB Design", "Assembly", "Embedded Systems", "PID Control"],
      githubLink: "https://github.com/DaviBaechtold/Follow",
      liveLink: ""
    }
  ]

  const { ref, isVisible } = useScrollAnimation()

  const itemsPerView = isMobile ? 1 : isTablet ? 2 : 3
  const maxIndex = projects.length - itemsPerView

  const prev = () => setCurrentIndex(i => Math.max(0, i - 1))
  const next = () => setCurrentIndex(i => Math.min(maxIndex, i + 1))

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: 10,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100',
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

            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <IconButton
                onClick={prev}
                disabled={currentIndex === 0}
                sx={{
                  position: 'absolute',
                  left: { xs: -16, sm: -24 },
                  zIndex: 1,
                  bgcolor: 'background.paper',
                  boxShadow: 2,
                  '&:hover': { bgcolor: 'background.paper', boxShadow: 4 },
                  '&.Mui-disabled': { opacity: 0.3 },
                }}
              >
                <ArrowBackIos sx={{ fontSize: 18 }} />
              </IconButton>

              <Box sx={{ overflow: 'hidden', width: '100%', mx: { xs: 2, sm: 3 } }}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 3,
                    transition: 'transform 0.4s ease-in-out',
                    transform: `translateX(calc(-${currentIndex} * (100% / ${itemsPerView} + ${24 / itemsPerView}px)))`,
                  }}
                >
                  {projects.map((project, index) => (
                    <Box
                      key={project.githubLink || project.liveLink || index}
                      sx={{
                        flex: `0 0 calc(${100 / itemsPerView}% - ${(24 * (itemsPerView - 1)) / itemsPerView}px)`,
                        minWidth: 0,
                      }}
                    >
                      <Card
                        elevation={3}
                        sx={{
                          height: '100%',
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
                          },
                        }}
                      >
                        <CardContent
                          sx={{
                            p: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            justifyContent: 'space-between',
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
                                fontFamily: 'monospace',
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
                                  WebkitLineClamp: 3,
                                  WebkitBoxOrient: 'vertical',
                                  overflow: 'hidden',
                                  fontFamily: 'monospace',
                                }}
                              >
                                {t(project.descriptionKey)}
                              </Typography>
                            )}

                            <Box sx={{ minHeight: '80px', mb: 2 }}>
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
                            justifyContent={project.liveLink ? 'space-between' : 'flex-end'}
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
                                  '&:hover': { color: 'primary.dark' },
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
                                  '&:hover': { color: 'primary.dark' },
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

              <IconButton
                onClick={next}
                disabled={currentIndex >= maxIndex}
                sx={{
                  position: 'absolute',
                  right: { xs: -16, sm: -24 },
                  zIndex: 1,
                  bgcolor: 'background.paper',
                  boxShadow: 2,
                  '&:hover': { bgcolor: 'background.paper', boxShadow: 4 },
                  '&.Mui-disabled': { opacity: 0.3 },
                }}
              >
                <ArrowForwardIos sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>

            {/* Dot indicators */}
            <Stack direction="row" justifyContent="center" gap={1} mt={3}>
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  sx={{
                    width: currentIndex === i ? 20 : 8,
                    height: 8,
                    borderRadius: 4,
                    bgcolor: currentIndex === i ? 'primary.main' : 'grey.400',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default Projects

