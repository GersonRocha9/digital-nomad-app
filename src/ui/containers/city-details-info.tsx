import type { City } from '@/src/domain/city/City'

import { Box } from '../components/box'
import { Text } from '../components/text'

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
