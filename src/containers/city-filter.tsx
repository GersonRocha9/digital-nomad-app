import { useState } from 'react'

import { ScrollView } from 'react-native'

import { Box } from '../components/box'
import { CategoryPill } from '../components/category-pill'
import { SearchInput } from '../components/search-input'

import type { ICategory } from '../types'

interface ICityFilterProps {
  categories: ICategory[]
}

export function CityFilter({ categories }: ICityFilterProps) {
  const [cityName, setCityName] = useState('')
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  )

  return (
    <Box>
      <Box paddingHorizontal="padding">
        <SearchInput
          value={cityName}
          onChangeText={setCityName}
          placeholder="Qual seu próximo destino?"
        />
      </Box>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box mt="s16" flexDirection="row" gap="s8" paddingHorizontal="padding">
          {categories.map((category) => (
            <CategoryPill
              key={category.id}
              active={category.id === selectedCategoryId}
              category={category}
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  )
}
