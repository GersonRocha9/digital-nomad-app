import MapView from 'react-native-maps'

import { Box } from '../components/box'
import { Text } from '../components/text'
import { useAppTheme } from '../components/theme/useAppTheme'

import type { City } from '../types'

type CityDetailsMapsProps = Pick<City, 'location'>

export function CityDetailsMaps({ location }: CityDetailsMapsProps) {
  const { borderRadii } = useAppTheme()

  return (
    <Box padding="padding">
      <Text variant="title22" mb="s16">
        Mapa
      </Text>

      <MapView
        style={{
          width: '100%',
          height: 200,
          borderRadius: borderRadii.default,
        }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </Box>
  )
}
