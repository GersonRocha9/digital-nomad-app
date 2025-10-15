import type { City } from '@/src/domain/city/City'

import { Accordion } from '../components/accordion'
import { Box } from '../components/box'
import { Text } from '../components/text'

type Props = Pick<City, 'touristAttractions'>

export function CityDetailsTouristAttractions({ touristAttractions }: Props) {
  return (
    <Box padding="padding">
      <Text variant="title22" mb="s8">
        Pontos turísticos
      </Text>

      <Box gap="s8">
        {touristAttractions.map((attraction) => (
          <Accordion
            key={attraction.id}
            title={attraction.name}
            description={attraction.description}
          />
        ))}
      </Box>
    </Box>
  )
}
