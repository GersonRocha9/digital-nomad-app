import { ScrollView } from 'react-native'

import { Box } from '../components/box'
import { CategoryPill } from '../components/category-pill'
import { SearchInput } from '../components/search-input'

import type { ICategory } from '../types'

interface ICityFilterProps {
  categories?: ICategory[]
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
