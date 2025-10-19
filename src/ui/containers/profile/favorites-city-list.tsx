import {
  FlatList,
  type FlatListProps,
  type ListRenderItemInfo,
} from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import type { CityPreview } from '@/src/domain/city/City'
import { useCityFindAllFavorites } from '@/src/domain/city/operations/useCityFindAllFavorites'

import { FavoriteCityCard } from '../../components/favorite-city-card'
import { useAppTheme } from '../../components/theme/useAppTheme'

export function FavoriteCityList({
  ListFooterComponent,
  ListHeaderComponent,
}: Pick<
  FlatListProps<CityPreview>,
  'ListFooterComponent' | 'ListHeaderComponent'
>) {
  const { spacing } = useAppTheme()
  const { data: favoriteCities } = useCityFindAllFavorites()
  const { top } = useSafeAreaInsets()

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <FavoriteCityCard cityPreview={item} />
  }

  return (
    <FlatList
      data={favoriteCities}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      contentContainerStyle={{
        gap: spacing.padding,
        paddingTop: top,
        paddingBottom: spacing.padding,
      }}
    />
  )
}
