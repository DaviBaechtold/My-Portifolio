import { useState } from 'react'
import { FaPython, FaJava, FaLinux, FaGithub, FaVuejs, FaRobot } from 'react-icons/fa'
import { SiC, SiCplusplus, SiMysql, SiAmazon, SiArduino, SiVercel, SiAssemblyscript, SiIota, SiPostman, SiSpring, SiFlask, SiTailwindcss, SiVite, SiFigma, SiTypescript, SiNextdotjs, SiPostgresql, SiRedis, SiApachekafka, SiRabbitmq, SiMongodb, SiOpencv } from 'react-icons/si'
import { GiKeyring } from 'react-icons/gi'
import { MdSecurity } from 'react-icons/md'
import { BiSolidNetworkChart } from 'react-icons/bi'
import {
  Box,
  Container,
  Typography,
  Paper,
  Fade,
  Tabs,
  Tab,
} from "@mui/material"
import {
  FaReact, FaAngular, FaNodeJs, FaDocker, FaHtml5, FaJs, FaGitAlt
} from 'react-icons/fa'
import { VscAzure } from 'react-icons/vsc'
import { TbBrandCSharp } from 'react-icons/tb'
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import React from 'react'
import { useLanguage } from "./LanguageProvider"

interface Skill {
  name: string
  icon: React.ReactNode
}

interface SkillCategory {
  labelKey: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    labelKey: 'skills.cat.frontend',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Angular', icon: <FaAngular /> },
      { name: 'Vue.js', icon: <FaVuejs /> },
      { name: 'Vite', icon: <SiVite /> },
      { name: 'Figma', icon: <SiFigma /> },
    ],
  },
  {
    labelKey: 'skills.cat.backend',
    skills: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Spring Boot', icon: <SiSpring /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'C#', icon: <TbBrandCSharp /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'C', icon: <SiC /> },
      { name: 'WebSocket', icon: <BiSolidNetworkChart /> },
      { name: 'Postman', icon: <SiPostman /> },
    ],
  },
  {
    labelKey: 'skills.cat.databases',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'RabbitMQ', icon: <SiRabbitmq /> },
      { name: 'Apache Kafka', icon: <SiApachekafka /> },
      { name: 'Celery', icon: <BiSolidNetworkChart /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'Docker', icon: <FaDocker /> },
    ],
  },
  {
    labelKey: 'skills.cat.devops',
    skills: [
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Linux', icon: <FaLinux /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'AWS', icon: <SiAmazon /> },
      { name: 'Azure', icon: <VscAzure /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'ServiceNow', icon: <SiPostman /> },
      { name: 'Python', icon: <FaPython /> },
    ],
  },
  {
    labelKey: 'skills.cat.security',
    skills: [
      { name: 'Keycloak', icon: <GiKeyring /> },
      { name: 'OAuth2', icon: <MdSecurity /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'Spring Boot', icon: <SiSpring /> },
      { name: 'Docker', icon: <FaDocker /> },
    ],
  },
  {
    labelKey: 'skills.cat.ai',
    skills: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'OpenCV', icon: <SiOpencv /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'WebSocket', icon: <BiSolidNetworkChart /> },
      { name: 'Azure', icon: <VscAzure /> },
      { name: 'C++', icon: <SiCplusplus /> },
    ],
  },
  {
    labelKey: 'skills.cat.embedded',
    skills: [
      { name: 'Arduino', icon: <SiArduino /> },
      { name: 'Assembly', icon: <SiAssemblyscript /> },
      { name: 'IoT', icon: <SiIota /> },
      { name: 'Robotics', icon: <FaRobot /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'C', icon: <SiC /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'Linux', icon: <FaLinux /> },
    ],
  },
  {
    labelKey: 'skills.cat.design',
    skills: [
      { name: 'Figma', icon: <SiFigma /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Vite', icon: <SiVite /> },
    ],
  },
]

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const { ref, isVisible } = useScrollAnimation()
  const { t } = useLanguage()

  const currentSkills = skillCategories[activeTab].skills

  const getRandomInitialPosition = (index: number) => {
    const seed = index * 123456789
    const random1 = (seed % 1000) / 1000
    const random2 = ((seed * 7) % 1000) / 1000
    const random3 = ((seed * 13) % 1000) / 1000
    const random4 = ((seed * 17) % 1000) / 1000
    const direction = Math.floor(random1 * 8)
    const baseDistance = 300 + random3 * 200
    const variance = (random2 - 0.5) * 400

    switch (direction) {
      case 0: return { x: variance, y: -baseDistance, rotate: (random4 - 0.5) * 720 }
      case 1: return { x: baseDistance, y: -baseDistance + variance, rotate: (random4 - 0.5) * 720 }
      case 2: return { x: baseDistance, y: variance, rotate: (random4 - 0.5) * 720 }
      case 3: return { x: baseDistance, y: baseDistance + variance, rotate: (random4 - 0.5) * 720 }
      case 4: return { x: variance, y: baseDistance, rotate: (random4 - 0.5) * 720 }
      case 5: return { x: -baseDistance, y: baseDistance + variance, rotate: (random4 - 0.5) * 720 }
      case 6: return { x: -baseDistance, y: variance, rotate: (random4 - 0.5) * 720 }
      default: return { x: -baseDistance, y: -baseDistance + variance, rotate: (random4 - 0.5) * 720 }
    }
  }

  return (
    <Box
      id="skills"
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
              {t('skills.title')}
            </Typography>

            <Tabs
              value={activeTab}
              onChange={(_, v) => { setActiveTab(v); setHoveredSkill(null) }}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                mb: 4,
                '& .MuiTab-root': { fontFamily: 'monospace', textTransform: 'none', fontWeight: 500 },
                '& .MuiTabs-indicator': { height: 3, borderRadius: 2 },
              }}
            >
              {skillCategories.map((cat, i) => (
                <Tab key={i} label={t(cat.labelKey)} />
              ))}
            </Tabs>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
                justifyContent: 'center',
                minHeight: 200,
              }}
            >
              {currentSkills.map((skill, index) => {
                const initialPos = getRandomInitialPosition(index)
                return (
                  <Box
                    key={`${activeTab}-${skill.name}`}
                    sx={{
                      transform: isVisible
                        ? 'translate(0px, 0px) rotate(0deg) scale(1)'
                        : `translate(${initialPos.x}px, ${initialPos.y}px) rotate(${initialPos.rotate}deg) scale(0.3)`,
                      opacity: isVisible ? 1 : 0,
                      transition: `all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 40}ms`,
                    }}
                  >
                    <Paper
                      elevation={hoveredSkill === skill.name ? 8 : 2}
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 120,
                        width: 120,
                        cursor: 'pointer',
                        position: 'relative',
                        backgroundColor: hoveredSkill === skill.name
                          ? 'primary.main'
                          : 'background.paper',
                        color: hoveredSkill === skill.name
                          ? 'primary.contrastText'
                          : 'text.primary',
                        transform: hoveredSkill === skill.name
                          ? 'scale(1.3) translateY(-10px)'
                          : 'scale(1) translateY(0)',
                        boxShadow: hoveredSkill === skill.name
                          ? '0 20px 40px rgba(0,0,0,0.3)'
                          : undefined,
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: hoveredSkill === skill.name ? 10 : 1,
                        ...(hoveredSkill === skill.name && {
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: -2,
                            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)',
                            borderRadius: 'inherit',
                            zIndex: -1,
                            filter: 'blur(6px)',
                            opacity: 0.7,
                          },
                        }),
                      }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 64,
                          height: 64,
                          mb: 1,
                          color: hoveredSkill === skill.name ? 'inherit' : 'primary.main',
                          transform: hoveredSkill === skill.name
                            ? 'rotate(5deg) scale(1.2)'
                            : 'rotate(0deg) scale(1)',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          filter: hoveredSkill === skill.name
                            ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                            : 'none',
                          '& svg': { width: '48px !important', height: '48px !important' },
                        }}
                      >
                        {skill.icon}
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          textAlign: 'center',
                          fontFamily: 'monospace',
                          fontWeight: hoveredSkill === skill.name ? 600 : 500,
                          fontSize: hoveredSkill === skill.name ? '0.9rem' : '0.875rem',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      >
                        {skill.name}
                      </Typography>
                    </Paper>
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default Skills
