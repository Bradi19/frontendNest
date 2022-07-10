import * as React from 'react'
import {
  Box,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListItem,
  Paper,
  Typography,
} from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import * as config from './config'
import { Info } from '@mui/icons-material'

const Main = (props: any) => {
  return (
    <Paper
      sx={{
        maxWidth: '1200px!important',
        width: '100%',
        pt: 1,
        pb: 5,
        mt: 5,
        mb: 5,
        bgcolor: 'secondary.main',
      }}
    >
      <Grid
        sx={{ maxWidth: '100%', maxHeight: '400px', minHeight: '400px', mb: 5 }}
        item
        xs={12}
      >
        <Carousel
          indicators={false}
          animation={'slide'}
          sx={{
            '& img': {
              maxHeight: '400px',
              minHeight: '400px',
              width: '100%',
              objectFit: 'cover',
            },
          }}
        >
          {config.sliders.map((item: any, i: number) => (
            <ListItem key={i}>
              <Grid sx={{ position: 'relative' }} item xs={12}>
                <Box>
                  <img src={item.path} alt={item.name} />
                </Box>
                <Grid
                  container
                  sx={{
                    position: 'absolute',
                    top: 0,
                    backgroundColor: '#00000073',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    transform: 'scale(1)',
                    '&:hover': {
                      backgroundColor: '#00000000',
                      transform: 'scale(1.1)',
                      cursor: 'pointer',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      ml: 10,
                    }}
                    variant="body4"
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      ml: 10,
                    }}
                    variant="body2"
                  >
                    {item.description}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </Carousel>
      </Grid>
      <Grid item xs={12}>
        <Carousel indicators={false} animation={'slide'}>
          {config.news.map((item, i) => {
            return (
              <ListItem key={i}>
                <Grid>
                  <Typography
                    sx={{
                      ml: 10,
                    }}
                    variant="body1"
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      ml: 10,
                    }}
                    variant="subtitle1"
                  >
                    {item.description}
                  </Typography>
                </Grid>
              </ListItem>
            )
          })}
        </Carousel>
      </Grid>
      <Grid container item xs={12}>
        <ImageList sx={{ p: 2, width: "100%", minHeight: "500px", height: "100%"}}>

          {config.portfolio.map((item, int) => (
            <ImageListItem key={int}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    <Info />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Paper>
  )
}
export default Main
