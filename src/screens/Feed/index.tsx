import { HomeHeader } from '@components/HomeHeader'
import { VStack } from 'native-base'

export function Feed() {
  return (
    <>
      <HomeHeader />
      <VStack bgColor="white" flex={1} mt={8}></VStack>
    </>
  )
}
