import { Loading } from '@components/Loading'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { Box, useTheme } from 'native-base'
import { AppRoutes } from './app.routes'
  
// import { AuthRoutes } from './auth.routes'

export function Routes() {
  const { colors } = useTheme()

  //mock 
  const user = {
    id: 1
  }

  const theme = DefaultTheme
  theme.colors.background = colors.blue[700]

  return (
    <Box flex={1}>
      <NavigationContainer theme={theme}>
      <AppRoutes />
        {/* {user.id ? <AppRoutes /> : <AuthRoutes />} */}
      </NavigationContainer>
    </Box>
  )
}
