import { useLocalSearchParams } from 'expo-router'

import { Screen } from '@/src/components/screen'
import { Text } from '@/src/components/text'
import { CityDetailsHeader } from '@/src/containers/city-details-header'
import { CityDetailsInfo } from '@/src/containers/city-details-info'
import { CityDetailsMaps } from '@/src/containers/city-details-maps'
import { CityDetailsRelatedCities } from '@/src/containers/city-details-related-cities'
import { CityDetailsTouristAttractions } from '@/src/containers/city-details-tourist-attractions'
import { useCityDetails } from '@/src/data/useCityDetails'

export default function CityDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { city } = useCityDetails(id)

  if (!city) {
    return (
      <Screen flex={1} alignItems="center" justifyContent="center">
        <Text>City not found</Text>
      </Screen>
    )
  }

  return (
    <Screen style={{ paddingHorizontal: 0 }}>
      <CityDetailsHeader
        id={city.id}
        coverImage={city.coverImage}
        categories={city.categories}
      />
      <CityDetailsInfo />
      <CityDetailsTouristAttractions />
      <CityDetailsMaps />
      <CityDetailsRelatedCities />
    </Screen>
  )
}
