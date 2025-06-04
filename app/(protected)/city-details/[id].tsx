import React from 'react'

import { Pressable } from 'react-native'

import { useLocalSearchParams } from 'expo-router'
import { useSharedValue } from 'react-native-reanimated'

import { Divider } from '@/src/components/divider'
import { Screen } from '@/src/components/screen'
import { Text } from '@/src/components/text'
import { BottomSheetMap } from '@/src/containers/bottom-sheet-map'
import { CityDetailsHeader } from '@/src/containers/city-details-header'
import { CityDetailsInfo } from '@/src/containers/city-details-info'
import { CityDetailsMaps } from '@/src/containers/city-details-maps'
import { CityDetailsRelatedCities } from '@/src/containers/city-details-related-cities'
import { CityDetailsTouristAttractions } from '@/src/containers/city-details-tourist-attractions'
import { useCityDetails } from '@/src/data/useCityDetails'

export default function CityDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { city } = useCityDetails(id)
  const isOpenBottomSheet = useSharedValue(false)

  function toggleMapBottomSheet() {
    isOpenBottomSheet.value = !isOpenBottomSheet.value
  }

  if (!city) {
    return (
      <Screen flex={1} alignItems="center" justifyContent="center">
        <Text>City not found</Text>
      </Screen>
    )
  }

  return (
    <>
      <Screen style={{ paddingHorizontal: 0 }} scrollable>
        <CityDetailsHeader
          id={city.id}
          coverImage={city.coverImage}
          categories={city.categories}
        />

        <CityDetailsInfo
          name={city.name}
          country={city.country}
          description={city.description}
        />

        <Divider paddingHorizontal="padding" />

        <CityDetailsTouristAttractions
          touristAttractions={city.touristAttractions}
        />

        <Divider paddingHorizontal="padding" />

        <Pressable onPress={toggleMapBottomSheet}>
          <CityDetailsMaps location={city.location} />
        </Pressable>

        <Divider paddingHorizontal="padding" />

        <CityDetailsRelatedCities />
      </Screen>

      <BottomSheetMap
        location={city.location}
        isOpen={isOpenBottomSheet}
        onPress={toggleMapBottomSheet}
      />
    </>
  )
}
