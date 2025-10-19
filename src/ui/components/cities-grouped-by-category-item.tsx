import { ScrollView } from 'react-native'

import type { CitiesGroupedByCategory } from '@/src/domain/city/ICityRepo'

import { Box } from './box'
import { categoryIconMap } from './category-pill'
import { CityCard } from './city-card'
import { Icon } from './icon'
import { Text } from './text'
import { useAppTheme } from './theme/useAppTheme'

export function CitiesGroupedByCategoryItem({
  category,
  cities,
}: CitiesGroupedByCategory) {
  const { spacing } = useAppTheme()

  return (
    <Box>
      <Box flexDirection="row" ml="s16">
        <Icon name={categoryIconMap[category.code]} color="primary" />
        <Box ml="s12" mb="s16">
          <Text variant="title22">{category.name}</Text>
          <Text variant="text14">{category.description}</Text>
        </Box>
      </Box>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          columnGap: spacing.s16,
          paddingLeft: spacing.s16,
        }}
      >
        {cities.map((city) => (
          <CityCard
            key={city.id}
            cityPreview={city}
            type="small"
            disableFavorite
          />
        ))}
      </ScrollView>
    </Box>
  )
}
