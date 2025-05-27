import { FlatList, type ListRenderItemInfo } from 'react-native'

import { CityCard } from '@/src/components/city-card'
import { Screen } from '@/src/components/screen'
import { cityPreviewList } from '@/src/data/cities'
import type { CityPreview } from '@/src/types'

export default function HomeScreen() {
  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />
  }

  return (
    <Screen>
      <FlatList data={cityPreviewList} renderItem={renderItem} showsVerticalScrollIndicator={false} />
    </Screen>
  )
}
