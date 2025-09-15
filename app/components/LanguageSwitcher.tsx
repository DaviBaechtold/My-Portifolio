"use client"

import { useState } from "react"
import { useLanguage } from "./LanguageProvider"
import { IconButton, Menu, MenuItem, Tooltip, Box } from "@mui/material"

const LanguageSwitcher = () => {
  const { lang, setLang, t } = useLanguage()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => setAnchorEl(null)

  const handleSelect = (value: "en" | "pt-BR" | "de") => {
    setLang(value)
    handleClose()
  }

  const flagFor = (value: "en" | "pt-BR" | "de") => {
    switch (value) {
      case "pt-BR":
        return "🇧🇷"
      case "de":
        return "🇩🇪"
      case "en":
      default:
        return "🇺🇸"
    }
  }

  return (
    <>
      <Tooltip title={t('ui.language')} arrow>
        <IconButton
          size="small"
          onClick={handleClick}
          aria-label={t('ui.language')}
          aria-controls={open ? 'lang-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          sx={{
            px: 0.5,
            height: 32,
            borderRadius: 1.5,
            bgcolor: (theme) => theme.palette.mode === 'dark' ? 'hsl(50 50% 1% / 50%)' : 'background.paper',
            color: 'text.primary',
            '&:hover': { bgcolor: 'action.hover' }
          }}
        >
          <Box component="span" sx={{ fontSize: 18, lineHeight: 1 }} aria-hidden>
            {flagFor(lang)}
          </Box>
        </IconButton>
      </Tooltip>

      <Menu
        id="lang-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'lang-button' }}
      >
        {(["en", "pt-BR", "de"] as const).map((code) => (
          <MenuItem
            key={code}
            selected={lang === code}
            onClick={() => handleSelect(code)}
            aria-label={
              code === 'en' ? t('lang.en') : code === 'pt-BR' ? t('lang.pt-BR') : t('lang.de')
            }
          >
            <Box component="span" sx={{ fontSize: 20 }} aria-hidden>
              {flagFor(code)}
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default LanguageSwitcher
