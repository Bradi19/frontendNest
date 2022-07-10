import {
  CSSObject,
  Drawer as MuiDrawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Theme,
} from '@mui/material'
import { Inbox, Mail } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { routers } from '../../config/router'
import { useNavigate } from 'react-router-dom'

const drawerWidth = 250
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))
const NavMenu = (props: any) => {
  const { open, setOpen, title, setTitle } = props
  const [router, setRouter] = useState<string>('')
  const history = useNavigate()
  const { t } = useTranslation()
  useEffect(() => {
    if (title === '') {
      loadPage('/', 'main')
      setRouter('main')
    }
  }, [])
  const loadPage = (path: string, name: string) => {
    setTitle(t(name))
    setRouter(name)
    history(path)
  }
  return (
    <Drawer
      sx={{
        top: '4.2em',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          top: '4.2em',
        },
      }}
      variant="permanent"
      anchor="left"
      open={open}
    >
      <List>
        {routers.map((text, index) => (
          <ListItem
            sx={{
              backgroundColor: `${
                router.includes(text.name) ? 'primary.text' : '#fff'
              }`,
            }}
            key={index}
            disablePadding
            onClick={() => loadPage(text.route, text.name)}
          >
            <ListItemButton>
              <ListItemIcon sx={{
                  color: `${
                    router.includes(text.name)
                      ? 'primary.textWhite'
                      : 'primary.text'
                  }`,
                  fontSize: '18px',
                }}>{text.icon}</ListItemIcon>
              <ListItemText
                sx={{
                  color: `${
                    router.includes(text.name)
                      ? 'primary.textWhite'
                      : 'primary.textBlack'
                  }`,
                  fontSize: '18px',
                }}
                primary={t(text.name)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
export default NavMenu
