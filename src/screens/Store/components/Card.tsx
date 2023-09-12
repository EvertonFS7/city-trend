import { FontAwesome5 } from '@expo/vector-icons'
import { FlatList, Heading, HStack, Image, VStack } from 'native-base'
import { TouchableOpacity } from 'react-native'

const DATA = [
  {
    id: '58694a0f-3da1-471f-bd96-d3qdf3qffqr3r',
    title: 'Gift Card 50$',
    image:
      'https://images.g2a.com/360x600/1x1x1/steam-gift-card-50-usd-steam-key-global-i10000000258118/867bf953149d4926b01826ab',
    price: '750',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Gift Card 100R$',
    image:
      'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1XInG?ver=429f',
    price: '950',
  },
  {
    id: '58694a0f-3da1-471f-bd96-fsfsfs78fsf',
    title: '1000 V-Bucks',
    image:
      'https://cdn1.epicgames.com/fn/offer/EGS_1000VBucks_1920x1080-1920x1080-874f1246563fa2e19689c280b78f9ac3ca04eadf.png',
    price: '650',
  },
  {
    id: '58694a0f-3da1-471f-bd96-dadaduad838dh3',
    title: 'Tênis Nike Air Force',
    image: 'https://imgnike-a.akamaihd.net/768x768/02458351.jpg',
    price: '8500',
  },
  {
    id: '58694a0f-3da1-471f-bd96-shnqwudh31279',
    title: 'Uniforme LOUD',
    image:
      'https://banzika.com.br/image/cache/catalog/2022/1878qw4er8qw-1000x1000.jpg',
    price: '2700',
  },
  {
    id: '58694a0f-3da1-471f-bd96-rq3rq3rqrq3r3',
    title: 'Livro - O Menino Maluquinho ',
    image: 'https://m.media-amazon.com/images/I/51LjfgMU-SL._SY445_SX342_.jpg',
    price: '25',
  },
  {
    id: '58694a0f-3da1-471f-bd96-dj82jh38dhjd3',
    title: 'Teclado Gamer Redragon',
    image: 'https://m.media-amazon.com/images/I/617fOo46ISL._AC_SX679_.jpg',
    price: '2100',
  },
]

export default function Card() {
  return (
    <VStack flex={1}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <HStack borderColor="#3a474d" borderWidth={1} rounded="md" mb={3}>
              <Image
                source={{
                  uri: item.image,
                }}
                size="20"
                alt="Image do usuário"
                rounded="md"
                resizeMode="cover"
              />

              <VStack
                direction="column"
                px={2}
                py={4}
                display="flex"
                justifyContent="space-between"
              >
                <Heading color="white" fontSize="lg" fontFamily="heading">
                  {item.title}
                </Heading>

                <HStack px={1.5}>
                  <Heading
                    color="white"
                    fontSize="md"
                    fontFamily="heading"
                    mr={2}
                  >
                    L$ {item.price}
                  </Heading>
                  <FontAwesome5 name="coins" size={17} color="#ffff00" />
                </HStack>
              </VStack>
            </HStack>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        borderColor="green.400"
      />
    </VStack>
  )
}
