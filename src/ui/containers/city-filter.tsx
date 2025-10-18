import { ScrollView } from 'react-native'

import type { Category } from '@/src/domain/category/Category'

import { Box } from '../components/box'
import { CategoryPill } from '../components/category-pill'
import { SearchInput } from '../components/search-input'

interface ICityFilterProps {
  categories?: Category[]
  cityName: string
  onChangeCityName: (cityName: string) => void
  selectedCategoryId: string | null
  onChangeSelectedCityCategoryId: (id: string | null) => void
}

export function CityFilter({
  categories,
  cityName,
  onChangeCityName,
  selectedCategoryId,
  onChangeSelectedCityCategoryId,
}: ICityFilterProps) {
  return (
    <Box>
      <Box paddingHorizontal="padding">
        <SearchInput
          testID="city-filter-search-input"
          value={cityName}
          onChangeText={onChangeCityName}
          placeholder="Qual seu próximo destino?"
        />
      </Box>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box mt="s16" flexDirection="row" gap="s8" paddingHorizontal="padding">
          {categories?.map((category) => (
            <CategoryPill
              key={category.id}
              active={category.id === selectedCategoryId}
              category={category}
              onPress={() =>
                onChangeSelectedCityCategoryId(
                  category.id === selectedCategoryId ? null : category.id,
                )
              }
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  )
}
