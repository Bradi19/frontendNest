import { Menu } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'

const Header = (props: any) => {
  const { open, setOpen, title } = props
  const openMenu = () => {
    setOpen(!open)
  }
  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        zIndex: 999,
        position: 'fixed',
        top: 0,
        backgroundColor: '#fff',
        minHeight: 68,
        maxHeight: 68,
      }}
    >
      <Grid
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        item
        xs={1}
      >
        <Menu onClick={() => openMenu()} />
      </Grid>
      <Grid
        sx={{ justifyContent: 'center', alignItems: 'center' }}
        container
        item
        xs={10}
      >
        <Typography sx={{ color: 'primary.textBlack'}}variant="body3">{title}</Typography>
      </Grid>
    </Grid>
  )
}
export default Header
