import { Box, Grid, Paper, Typography } from '@mui/material'
import * as config from './config/'
import React from 'react'

const Portfolio = (props: any) => {
  const even = (n: number) => {
    return !(n % 2)
  }
  return (
    <Grid sx={{ mt: 6 }} container item xs={12}>
      <Grid sx={{ flex: 'wrap' }} container item xs={12}>
        {config.portfolio.map((item, int) => {
          return (
            <Grid key={int} item xs={12} md={6}>
              <Paper
                sx={{
                  marginRight: { xs: 0, md: `${even(int) ? '20px' : '0'}` },
                  marginBottom: '20px',
                  maxHeight: '250px',
                  minHeight: '250px',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Box
                  sx={{
                    maxWidth: '100%',
                    objectFit: 'cover',
                    height: '100%',
                    '& img': {
                      maxWidth: '100%',
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                    },
                  }}
                >
                  <img src={item.img} alt={item.title} />
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                  }}
                >
                  <Typography
                    sx={{
                      ml: 10,
                    }}
                    variant="body1"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      ml: 10,
                    }}
                    variant="subtitle1"
                  >
                    {item.author}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}
export default Portfolio
