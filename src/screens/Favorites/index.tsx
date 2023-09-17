import { HomeHeader } from '@components/HomeHeader'
import { Box, ScrollView } from 'native-base'

export function Favorites() {
  return (
    <Box bgColor="white" flex={1}>
      <HomeHeader />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}></ScrollView>
    </Box>
  )
}
