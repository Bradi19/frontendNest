import { createTheme, ThemeOptions } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true
    body4: true
  }
}
interface ExtendedTypographyOptions extends TypographyOptions {
  body3: React.CSSProperties
  body4: React.CSSProperties
}
const theme = createTheme({
  typography: {
    h3: {
      color: '#ffa500',
    },
    body2: {
      fontSize: 18,
      color: '#fff',
    },
    body1: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 16,
    },
    body3: {
      fontSize: 24,
    },
    body4: {
      fontSize: 24,
      color: '#fff',
    },
  } as ExtendedTypographyOptions,
  palette: {
    primary: {
      main: '#f0f1f0',
      text: '#ffa500',
      textWhite: '#fff',
      textBlack: '#463109',
    },
    secondary: {
      main: '#fff',
    },
  },
} as ThemeOptions)

export default theme
