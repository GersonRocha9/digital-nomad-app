import { useRef } from 'react'

import { FlatList, type ListRenderItemInfo } from 'react-native'

import { useScrollToTop } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { CityCard } from '@/src/components/city-card'
import { Screen } from '@/src/components/screen'
import { useAppTheme } from '@/src/components/theme/useAppTheme'
import { CityFilter } from '@/src/containers/city-filter'
import { cityPreviewList } from '@/src/data/cities'
import type { CityPreview } from '@/src/types'

export default function HomeScreen() {
  const { spacing } = useAppTheme()
  const { top } = useSafeAreaInsets()

  const flatListRef = useRef(null)
  useScrollToTop(flatListRef)

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />
  }

  return (
    <Screen>
      <FlatList
        data={cityPreviewList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: spacing.padding, paddingTop: top, paddingBottom: spacing.padding }}
        ref={flatListRef}
        ListHeaderComponent={<CityFilter />}
      />
    </Screen>
  )
}
