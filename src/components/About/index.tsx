import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const About = (props: any) => {
  const { t } = useTranslation()
  return (
    <Grid sx={{ mt: 6, mb: 7 }} container item xs={12}>
      <Paper sx={{ maxWidth: '100%', height: "100%", width: '100%', pb: 8}}>
        <Typography sx={{ pt: 5, pr: 7, textAlign: "center"}} variant="h3">{t('aboutPage.title')}</Typography>
        <Typography sx={{ m: "0 auto", pt: 1, pr: 0, maxWidth: 600, textAlign: "center"}} variant="body1">{t('aboutPage.description')}</Typography>

        <Grid item xs={6}>
            <Typography sx={{ pl: 5 }} variant="body1"> {t('aboutPage.certificat')}</Typography>
        </Grid>
        <Grid item xs={6}></Grid>
      </Paper>
    </Grid>
  )
}
export default About
