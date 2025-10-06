import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Fade,
  Snackbar,
  Alert
} from "@mui/material"
import { Email, LocationOn } from "@mui/icons-material"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { useLanguage } from "./LanguageProvider"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { t } = useLanguage()
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error"
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const apiUrl = "/api/contact"

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" })
        setToast({
          open: true,
          message: t('toast.success'),
          severity: "success"
        })
      } else {
        setToast({
          open: true,
          message: t('toast.fail'),
          severity: "error"
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setToast({
        open: true,
        message: t('toast.network'),
        severity: "error"
      })
    }
  }

  const handleCloseToast = () => {
    setToast(prev => ({ ...prev, open: false }))
  }

  const { ref, isVisible } = useScrollAnimation()

  return (
    <Box
      id="contact"
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
              {t('contact.title')}
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  md: '1fr 1fr',
                },
                gap: 4,
                alignItems: 'start',
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    fontFamily: 'monospace'
                  }}
                >
                  {t('contact.getInTouch')}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    fontFamily: 'monospace'
                  }}
                >
                  {t('contact.intro')}
                </Typography>

                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Email sx={{ color: 'primary.main', mr: 1 }} />
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontFamily: 'monospace'
                      }}
                    >
                      davicampos2002@gmail.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOn sx={{ color: 'primary.main', mr: 1 }} />
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontFamily: 'monospace',
                      }}
                    >
                      {t('contact.city')}
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  backgroundColor: 'background.paper',
                  backdropFilter: 'blur(8px)',
                  borderRadius: 4,
                  transition: 'all 0.3s ease-in-out',
                  width: '100%',
                  height: 'fit-content',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 4,
                  },
                }}
              >
                <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
                  <Stack spacing={3} sx={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      label={t('contact.name')}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label={t('contact.email')}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label={t('contact.message')}
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{ py: 1.5, fontFamily: 'monospace' }}
                    >
                      {t('contact.send')}
                    </Button>
                  </Stack>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Fade>
      </Container>

      <Snackbar
        open={toast.open}
        autoHideDuration={6000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseToast}
          severity={toast.severity}
          variant="filled"
          sx={{ width: '100%', fontFamily: 'monospace' }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Contact

