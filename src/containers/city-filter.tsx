import { useState } from 'react'

import { Box } from '../components/box'
import { SearchInput } from '../components/search-input'

export function CityFilter() {
  const [cityName, setCityName] = useState('')

  return (
    <Box>
      <SearchInput value={cityName} onChangeText={setCityName} placeholder="Qual seu próximo destino?" />
    </Box>
  )
}
