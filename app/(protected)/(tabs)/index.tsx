import { FlatList, Text as RNText, type ListRenderItemInfo } from 'react-native'

import { CityCard } from '@/src/components/city-card'
import { Screen } from '@/src/components/screen'
import { Text } from '@/src/components/text'
import { cityPreviewList } from '@/src/data/cities'
import type { CityPreview } from '@/src/types'

export default function HomeScreen() {
  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />
  }

  return (
    <Screen marginTop="s56">
      <Text variant="title28">Madrid</Text>

      <RNText
        style={{
          color: '#FFF',
          fontSize: 28,
        }}
      >
        Madrid
      </RNText>
      <FlatList data={cityPreviewList} renderItem={renderItem} />
    </Screen>
  )
}
