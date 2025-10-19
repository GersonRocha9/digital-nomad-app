import { ScrollView } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import type { City } from '@/src/domain/city/City'

import { useCityRelatedCities } from '../../domain/city/operations/useCityRelatedCities'
import { Box } from '../components/box'
import { CityCard } from '../components/city-card'
import { Text } from '../components/text'
import { useAppTheme } from '../components/theme/useAppTheme'

type Props = Pick<City, 'id'>

export function CityDetailsRelatedCities({ id }: Props) {
  const { data: cities } = useCityRelatedCities(id)
  const { spacing } = useAppTheme()
  const { bottom } = useSafeAreaInsets()

  return (
    <Box style={{ paddingBottom: bottom }}>
      <Text variant="title22" mb="s16" paddingHorizontal="padding">
        Veja também
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator
        contentContainerStyle={{
          gap: spacing.padding,
          paddingHorizontal: spacing.padding,
        }}
      >
        {cities?.map((city) => (
          <CityCard key={city.id} cityPreview={city} type="small" />
        ))}
      </ScrollView>
    </Box>
  )
}
