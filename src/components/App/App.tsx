/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import '../../scss/App.scss'
import theme from '../../theme/white'
import Content from '../Content'
import Header from '../Header'
import i18n from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import { ua } from '../../locales/ua'
import { eu } from '../../locales/eu'

i18n.use(initReactI18next).init({
  resources: { ua, eu },
  lng: 'ua',
  fallbackLng: 'ua',

  interpolation: {
    escapeValue: false,
  },
})
const App = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const { t } = useTranslation()
  useEffect(() => {}, [])
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Grid
          container
          item
          xs={12}
          sx={{
            position: 'relative',
            height: '100%',
          }}
        >
          <Header
            title={title}
            setOpen={(e: boolean) => setOpen(e)}
            open={open}
          />
          <Grid
            sx={{
              position: 'relative',
              height: '100%',
            }}
            container
            item
            xs={12}
          >
            <Content
              title={title}
              setOpen={(e: boolean) => setOpen(e)}
              setTitle={(e: string) => setTitle(e)}
              open={open}
            />
          </Grid>
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
