import { Box } from '../components/box'
import { Text } from '../components/text'

import type { ICity } from '../types'

type ICityDetailsProps = Pick<ICity, 'name' | 'country' | 'description'>

export function CityDetailsInfo({
  name,
  country,
  description,
}: ICityDetailsProps) {
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
