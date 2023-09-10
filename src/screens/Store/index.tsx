import { HomeHeader } from '@components/HomeHeader';
import { Box, Heading, VStack } from 'native-base';

import Card from './components/Card';

export function Store() {
    return (
        <>
            <HomeHeader />
            <VStack bgColor='blue.700' flex={1} mt={8}>
                <Heading color="white" fontSize="2xl" fontFamily="heading" textAlign='center'>
                    Aqui todo seu esforço será recompesado.
                </Heading>

                <Box flex={1} px={6} mt={6}>
                    <Card />
                </Box>
            </VStack>
        </>
    )
}