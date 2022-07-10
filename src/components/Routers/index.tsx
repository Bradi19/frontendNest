import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Grid } from '@mui/material'
import Main from '../Main'
import Portfolio from '../Portfolio'
import About from '../About'
import Contacts from '../Contacts'

const Routers = () => {
  return (
    <Grid
      container
      sx={{
        maxWidth: 1200,
      }}
    >
      <Grid 
       sx={{
        width: '100%',
      }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Grid>
    </Grid>
  )
}
export default Routers
