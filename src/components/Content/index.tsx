import { Grid } from '@mui/material'
import React from 'react'
import NavMenu from '../NavMenu'
import Routers from '../Routers'

const Content = (props: any) => {
  const { open, setOpen, setTitle, title } = props
  return (
    <Grid
      sx={{ mt: 5, justifyContent: 'center', bgcolor: 'primary.main' }}
      container
      item
      xs={12}
    >
      <Grid sx={{ maxWidth: '100%' }}>
        <NavMenu
          title={title}
          setTitle={(e: string) => setTitle(e)}
          setOpen={(e: boolean) => setOpen(e)}
          open={open}
        />
      </Grid>
      <Grid
        sx={{
          maxWidth: { xs: 1200 },
          width: '100%',
        }}
      >
        <Routers />
      </Grid>
    </Grid>
  )
}
export default Content
