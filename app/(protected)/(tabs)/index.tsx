import { FlatList, type ListRenderItemInfo } from 'react-native'

import { CityCard } from '@/src/components/city-card'
import { Icon } from '@/src/components/icon'
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

      <Icon name="Adventure" color="primary" size={50} />
      <Icon name="Beach" />
      <Icon name="Person-fill" />
      <Icon name="Person-outline" />
      <FlatList data={cityPreviewList} renderItem={renderItem} showsVerticalScrollIndicator={false} />
    </Screen>
  )
}
