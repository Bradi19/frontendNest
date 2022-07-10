import { Facebook, Telegram } from '@mui/icons-material'
import { Grid, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Contacts = (props: any) => {
  const { t } = useTranslation()
  return (
    <Grid sx={{ mt: 6, mb: 7 }} container item xs={12}>
      <Paper sx={{ position: 'relative', width: '100%', height: '100%' }}>
        <Grid
          sx={{
            justifyContent: 'center',
            mb: 6,
          }}
          container
          item
          xs={12}
        >
          <Grid
            sx={{
                mb: 6,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            container
            item
            xs={12}
          >
            <Typography sx={{ pt: 5, pr: 7, textAlign: 'center' }} variant="h3">
              {t('contacts.title')}
            </Typography>
            <Typography variant="body1">{t('contacts.description')}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography sx={{ textAlign: 'center', borderBottom: "1px solid #000" }} variant="body1">
              {t('contacts.phone')}
            </Typography>
            <Typography sx={{ textAlign: 'center', borderBottom: "1px solid #000" }} variant="body1">
              {t('contacts.email')}
            </Typography>
            <Typography sx={{ textAlign: 'center', borderBottom: "1px solid #000" }} variant="body1">
              {t('contacts.messanger')}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ borderBottom: "1px solid #000" }} variant="body1">
              {t('contacts.phoneNumber')}
            </Typography>
            <Typography sx={{ borderBottom: "1px solid #000" }} variant="body1">
              {t('contacts.emailText')}
            </Typography>
            <Grid sx={{ borderBottom: "1px solid #000",  }} item xs={12}>
              <Link href='https://facebook.com/mikibok66' sx={{ cursor: "pointer",color: "primary.text" }}><Facebook /></Link> <Link href='https://t.me/razrabotkasajta_biz' sx={{ cursor: "pointer", color: "primary.text" }}><Telegram /></Link>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}
export default Contacts
