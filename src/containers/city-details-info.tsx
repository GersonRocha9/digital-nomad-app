import { Box } from '../components/box'
import { Text } from '../components/text'

import type { City } from '../types'

type CityDetailsProps = Pick<City, 'name' | 'country' | 'description'>

export function CityDetailsInfo({
  name,
  country,
  description,
}: CityDetailsProps) {
  return (
    <Box padding="padding">
      <Text variant="title28" mb="s2">
        {name}
      </Text>
      <Text variant="text18" mb="s24">
        {country}
      </Text>
      <Text variant="text14">{description}</Text>
    </Box>
  )
}
