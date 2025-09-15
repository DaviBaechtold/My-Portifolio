import React, { useRef, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Slide from "@mui/material/Slide";
import WorkIcon from "@mui/icons-material/Work";

const experiences = [
  {
    company: "CELEPAR",
    url: "https://www.celepar.pr.gov.br/",
    position: "IT Intern",
    duration: "Sep 2025 - Present",
    description: "Provided technical support, including OS (Windows/Linux) installation, hardware setup, and user assistance with applications, printers, and security software.",
  },
  {
    company: "Technische Hochschule Ingolstadt",
    url: "https://www.thi.de/",
    position: "Research Assistant",
    duration: "Sep 2024 - Aug 2025",
    description: "Developed AutoVoice, a voice command system for autonomous vehicles, and the IMU Visualizer, a tool for inertial sensor data visualization.",
  },
  {
    company: "BRF - S.A.",
    url: "https://www.brf-global.com/",
    position: "Software Engineer Intern",
    duration: "Feb 2023 - Sep 2024",
    description: "Developed a product image analysis system using Azure ML and OpenAI for anomaly detection. Automated processes with Power Automate and created dashboards in Power BI.",
  },
  {
    company: "PUCPR Robotics Team",
    url: "https://www.pucpr.br/",
    position: "Autonomous Robots Team Manager",
    duration: "Feb 2022 – Jul 2023",
    description: "Led the construction of line-follower, sumo, and trekking robots. Competed in events like RCX and Iron Cup.",
  },
];

const Experience = () => {
  // one state for each card's visibility
  const [visible, setVisible] = useState(
    Array(experiences.length).fill(false)
  );
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  // Fallback for iPad and tablet views where intersection observer fails
  useEffect(() => {
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024;
    
    if (isTablet) {
      // For tablets, show cards immediately with a slight delay for staggered effect
      experiences.forEach((_, index) => {
        setTimeout(() => {
          setVisible(prev => {
            const newVisible = [...prev];
            newVisible[index] = true;
            return newVisible;
          });
        }, index * 200); // Staggered appearance
      });
    }
  }, []);

  // trigger the animation when card enters viewport
  useEffect(() => {
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024;
    
    // Skip intersection observer for tablets since it's unreliable
    if (isTablet) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const index = Number(target.dataset.index)
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const newVisible = [...prev];
              if (!newVisible[index]) {
                newVisible[index] = true;
              }
              return newVisible;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const timeoutId = setTimeout(() => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <Box
      component="section"
      id="experience"
      py={10}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark'
            ? 'grey.900'
            : 'grey.100'
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          fontFamily="monospace"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Experience
        </Typography>

        <Box mt={4}>
          {experiences.map((exp, idx) => (
            <Box
              key={exp.company}
              ref={(el: HTMLElement | null) => {
                cardRefs.current[idx] = el
              }}
              data-index={idx}
              mb={4}
              sx={{
                transform: visible[idx]
                  ? 'translateX(0)'
                  : {
                    xs: `translateY(${idx % 2 === 0 ? '50px' : '-50px'})`,
                    sm: `translateX(${idx % 2 === 0 ? '-100%' : '100%'})`
                  },
                opacity: visible[idx] ? 1 : 0,
                transition: `all ${350 + idx * 110}ms ease-in-out`,
              }}
            >
              <Card
                elevation={3}
                sx={{
                  width: 'auto',
                  backgroundColor: 'background.paper',
                  backdropFilter: 'blur(8px)',
                  borderRadius: 4,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" mb={1.5}>
                    <WorkIcon color="primary" sx={{ mr: 1 }} />
                    <Typography
                      variant="h6"
                      component="div"
                      fontWeight="medium"
                      fontFamily="monospace"
                    >
                      {exp.position}
                    </Typography>
                  </Box>
                  <Typography variant="body1" mb={0.5}>
                    <Link
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                      underline="hover"
                      fontWeight="medium"
                    >
                      {exp.company}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1} fontFamily="monospace">
                    {exp.duration}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ whiteSpace: "pre-line", fontFamily: 'monospace' }}
                  >
                    {exp.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
