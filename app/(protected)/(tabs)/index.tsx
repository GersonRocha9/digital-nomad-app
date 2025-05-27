import { useRef, useState } from 'react'

import { FlatList, type ListRenderItemInfo } from 'react-native'

import { useScrollToTop } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Box } from '@/src/components/box'
import { CityCard } from '@/src/components/city-card'
import { Screen } from '@/src/components/screen'
import { useAppTheme } from '@/src/components/theme/useAppTheme'
import { CityFilter } from '@/src/containers/city-filter'
import { categories } from '@/src/data/categories'
import { useCities } from '@/src/data/useCities'
import { useDebounce } from '@/src/hooks/useDebounce'
import type { CityPreview } from '@/src/types'

export default function HomeScreen() {
  const { spacing } = useAppTheme()
  const { top } = useSafeAreaInsets()

  const [cityName, setCityName] = useState('')
  const debouncedCityName = useDebounce(cityName)
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  )

  const { cityPreviewList } = useCities(debouncedCityName, selectedCategoryId)

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
      <FlatList
        data={cityPreviewList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: spacing.padding,
          paddingTop: top,
          paddingBottom: spacing.padding,
        }}
        ref={flatListRef}
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
