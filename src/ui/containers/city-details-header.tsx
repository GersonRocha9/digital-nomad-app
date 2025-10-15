import { ImageBackground, ScrollView } from 'react-native'

import { router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import type { City } from '@/src/domain/city/City'

import { BlackOpacity } from '../components/black-opacity'
import { Box } from '../components/box'
import { CategoryPill } from '../components/category-pill'
import { Icon } from '../components/icon'
import { IconButton } from '../components/icon-button'
import { PILL_HEIGHT } from '../components/pill'

type CityDetailsProps = Pick<City, 'id' | 'categories' | 'coverImage'>

export function CityDetailsHeader({
  categories,
  coverImage,
}: CityDetailsProps) {
  const { top } = useSafeAreaInsets()

  return (
    <Box>
      <ImageBackground
        source={
          typeof coverImage === 'number' ? coverImage : { uri: coverImage }
        }
        style={{
          width: '100%',
          height: 400,
        }}
        imageStyle={{
          borderBottomRightRadius: 40,
        }}
      >
        <BlackOpacity />

        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          paddingHorizontal="padding"
          style={{
            paddingTop: top,
          }}
        >
          <IconButton iconName="Chevron-left" onPress={router.back} />
          <Icon name="Favorite-outline" size={30} color="pureWhite" />
        </Box>
      </ImageBackground>

      <ScrollView
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        style={{
          marginTop: -PILL_HEIGHT / 2,
        }}
      >
        <Box flexDirection="row" gap="s8" paddingHorizontal="padding">
          {categories.map((category) => (
            <CategoryPill key={category.id} category={category} active />
          ))}
        </Box>
      </ScrollView>
    </Box>
  )
}
