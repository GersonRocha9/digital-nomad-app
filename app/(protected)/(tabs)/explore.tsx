import { useRef } from 'react'

import { FlatList, type ListRenderItemInfo } from 'react-native'

import { useScrollToTop } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import type { CitiesGroupedByCategory } from '@/src/domain/city/ICityRepo'
import { useCityFindGroupedByCategory } from '@/src/domain/city/operations/useCityFindGroupedByCategory'
import { CitiesGroupedByCategoryItem } from '@/src/ui/components/cities-grouped-by-category-item'
import { Divider } from '@/src/ui/components/divider'
import { Screen } from '@/src/ui/components/screen'
import { useAppTheme } from '@/src/ui/components/theme/useAppTheme'

export default function ExploreScreen() {
  const { data } = useCityFindGroupedByCategory()
  const { spacing } = useAppTheme()
  const { top } = useSafeAreaInsets()

  const flatListRef = useRef(null)
  useScrollToTop(flatListRef)

  function renderItem({ item }: ListRenderItemInfo<CitiesGroupedByCategory>) {
    return <CitiesGroupedByCategoryItem {...item} />
  }

  return (
    <Screen style={{ paddingHorizontal: 0 }}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.category.id}
        ItemSeparatorComponent={() => <Divider paddingHorizontal="padding" />}
        contentContainerStyle={{
          paddingTop: top,
          paddingBottom: spacing.padding,
        }}
      />
    </Screen>
  )
}
