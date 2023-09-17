import { HomeHeader } from '@components/HomeHeader'
import Search from '@components/Search'
import { Box, ScrollView } from 'native-base'

export function Home() {
  return (
    <Box bgColor="white" flex={1}>
      <HomeHeader />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box p="4">
          <Search />
        </Box>
      </ScrollView>
    </Box>
  )
}
