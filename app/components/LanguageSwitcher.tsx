"use client"

import { useState } from "react"
import { useLanguage } from "./LanguageProvider"
import { IconButton, Menu, MenuItem, Tooltip, ListItemText } from "@mui/material"
import TranslateIcon from "@mui/icons-material/Translate"

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

  const labelFor = (value: "en" | "pt-BR" | "de") => {
    if (value === "en") return t('lang.en')
    if (value === "pt-BR") return t('lang.pt-BR')
    return t('lang.de')
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
            bgcolor: (theme) => theme.palette.mode === 'dark' ? 'hsl(50 50% 1% / 50%)' : 'background.paper',
            '&:hover': { bgcolor: 'action.hover' }
          }}
        >
          <TranslateIcon fontSize="small" />
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
          <MenuItem key={code} selected={lang === code} onClick={() => handleSelect(code)}>
            <ListItemText primary={labelFor(code)} />
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default LanguageSwitcher
