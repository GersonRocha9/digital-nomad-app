import { Accordion } from '../components/accordion'
import { Box } from '../components/box'
import { Text } from '../components/text'

import type { ICity } from '../types'

type Props = Pick<ICity, 'touristAttractions'>

export function CityDetailsTouristAttractions({ touristAttractions }: Props) {
  return (
    <Box padding="padding">
      <Text>City Details Tourist Attractions</Text>

      {touristAttractions.map((attraction) => (
        <Accordion
          key={attraction.id}
          title={attraction.name}
          description={attraction.description}
        />
      ))}
    </Box>
  )
}
