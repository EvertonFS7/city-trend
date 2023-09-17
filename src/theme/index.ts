import { extendTheme } from 'native-base'

export const THEME = extendTheme({
  colors: {
    green: {
      400: '#59cc01',
    },
    blue: {
      700: '#141f25',
    },
    purple: {
      300: '#8f69cc',
    },
    gray: {
      500: '#36474f',
      400: '#38464f',
      300: '#5c5c5c',
      200: '#E1E1E6',
      100: '#EEEEEE',
    },
    white: '#FFFFFF',
    black: '#000000',
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148,
  },
})
