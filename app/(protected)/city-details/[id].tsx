import { useLocalSearchParams, useRouter } from 'expo-router'

import { Box } from '@/src/components/box'
import { Text } from '@/src/components/text'

export default function CityDetailsScreen() {
  const { back } = useRouter()
  const { id, name } = useLocalSearchParams()

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>City Details from ID #{id}</Text>
      {name && <Text>nome: {name}</Text>}

      <Text onPress={back}>Voltar</Text>
    </Box>
  )
}
