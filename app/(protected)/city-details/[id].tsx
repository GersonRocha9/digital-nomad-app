import React from 'react'

import { ActivityIndicator, Pressable } from 'react-native'

import { useLocalSearchParams } from 'expo-router'
import Animated, { FadeIn, useSharedValue } from 'react-native-reanimated'

import { useCityFindById } from '@/src/domain/city/operations/useCityFindById'
import { Divider } from '@/src/ui/components/divider'
import { Screen } from '@/src/ui/components/screen'
import { Text } from '@/src/ui/components/text'
import { useAppTheme } from '@/src/ui/components/theme/useAppTheme'
import { BottomSheetMap } from '@/src/ui/containers/bottom-sheet-map'
import { CityDetailsHeader } from '@/src/ui/containers/city-details-header'
import { CityDetailsInfo } from '@/src/ui/containers/city-details-info'
import { CityDetailsMaps } from '@/src/ui/containers/city-details-maps'
import { CityDetailsRelatedCities } from '@/src/ui/containers/city-details-related-cities'
import { CityDetailsTouristAttractions } from '@/src/ui/containers/city-details-tourist-attractions'

const PAGE_ANIMATION_TIME = 1000

export default function CityDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { colors } = useAppTheme()
  const { data: city, isLoading, error } = useCityFindById(id)
  const isOpenBottomSheet = useSharedValue(false)

  function toggleMapBottomSheet() {
    isOpenBottomSheet.value = !isOpenBottomSheet.value
  }

  if (isLoading) {
    return (
      <Screen flex={1} alignItems="center" justifyContent="center">
        <ActivityIndicator color={colors.primary} />
      </Screen>
    )
  }

  if (error || !city) {
    return (
      <Screen flex={1} alignItems="center" justifyContent="center">
        <Text>Erro ao buscar cidade</Text>
      </Screen>
    )
  }

  return (
    <>
      <Screen style={{ paddingHorizontal: 0 }} scrollable>
        <Animated.View entering={FadeIn.duration(PAGE_ANIMATION_TIME)}>
          <CityDetailsHeader
            id={city.id}
            coverImage={city.coverImage}
            categories={city.categories}
            isFavorite={city.isFavorite}
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

          <CityDetailsRelatedCities id={city.id} />
        </Animated.View>
      </Screen>

      <Animated.View entering={FadeIn.duration(0).delay(PAGE_ANIMATION_TIME)}>
        <BottomSheetMap
          location={city.location}
          isOpen={isOpenBottomSheet}
          onPress={toggleMapBottomSheet}
        />
      </Animated.View>
    </>
  )
}
