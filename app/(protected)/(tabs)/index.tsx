import { useRef, useState } from 'react'

import { type ListRenderItemInfo } from 'react-native'

import { useScrollToTop } from '@react-navigation/native'
import Animated, { FadingTransition } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useCategoryFindAll } from '@/src/domain/category/operations/useCategoryFindAll'
import type { CityPreview } from '@/src/domain/city/City'
import { useCityFindAll } from '@/src/domain/city/operations/useCityFindAll'
import { Box } from '@/src/ui/components/box'
import { CityCard } from '@/src/ui/components/city-card'
import { Screen } from '@/src/ui/components/screen'
import { useAppTheme } from '@/src/ui/components/theme/useAppTheme'
import { CityFilter } from '@/src/ui/containers/city-filter'
import { useDebounce } from '@/src/utils/hooks/useDebounce'

export default function HomeScreen() {
  const { spacing } = useAppTheme()
  const { top } = useSafeAreaInsets()

  const [cityName, setCityName] = useState('')
  const debouncedCityName = useDebounce(cityName)
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  )

  const { data: cities } = useCityFindAll({
    name: debouncedCityName,
    categoryId: selectedCategoryId,
  })

  const { data: categories } = useCategoryFindAll()

  const flatListRef = useRef(null)
  useScrollToTop(flatListRef)

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return (
      <Box paddingHorizontal="padding">
        <CityCard cityPreview={item} />
      </Box>
    )
  }

  return (
    <Screen style={{ paddingHorizontal: 0 }}>
      <Animated.FlatList
        data={cities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: spacing.padding,
          paddingTop: top,
          paddingBottom: spacing.padding,
        }}
        ref={flatListRef}
        itemLayoutAnimation={FadingTransition.duration(500)}
        ListHeaderComponent={
          <CityFilter
            categories={categories}
            cityName={cityName}
            onChangeCityName={setCityName}
            selectedCategoryId={selectedCategoryId}
            onChangeSelectedCityCategoryId={setSelectedCategoryId}
          />
        }
      />
    </Screen>
  )
}
