import { FlatList, type ListRenderItemInfo } from 'react-native'

import { Box } from '@/src/components/box'
import { CityCard } from '@/src/components/city-card'
import { cityPreviewList } from '@/src/data/cities'
import type { CityPreview } from '@/src/types'

export default function HomeScreen() {
  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />
  }

  return (
    <Box flex={1}>
      <FlatList data={cityPreviewList} renderItem={renderItem} />
    </Box>
  )
}
