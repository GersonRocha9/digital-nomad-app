import {
  ImageBackground,
  Pressable,
  type ImageBackgroundProps,
} from 'react-native'

import { Link } from 'expo-router'

import type { CityPreview } from '@/src/domain/city/City'

import { BlackOpacity } from './black-opacity'
import { Box } from './box'
import { CityFavoriteButton } from './city-favorite-button'
import { Text } from './text'
import { useAppTheme } from './theme/useAppTheme'

interface ICityCardProps {
  cityPreview: CityPreview
  style?: ImageBackgroundProps['style']
}

export function CityCard({ cityPreview, style }: ICityCardProps) {
  const { borderRadii } = useAppTheme()

  return (
    <Link href={`/city-details/${cityPreview.id}`} push asChild>
      <Pressable>
        <ImageBackground
          source={
            typeof cityPreview.coverImage === 'number'
              ? cityPreview.coverImage
              : { uri: cityPreview.coverImage }
          }
          style={[{ width: '100%', height: 280 }, style]}
          imageStyle={{ borderRadius: borderRadii.default }}
        >
          <BlackOpacity />

          <Box flex={1} padding="s24" justifyContent="space-between">
            <Box alignSelf="flex-end">
              <CityFavoriteButton city={cityPreview} />
            </Box>

            <Box>
              <Text variant="title22">{cityPreview.name}</Text>
              <Text>{cityPreview.country}</Text>
            </Box>
          </Box>
        </ImageBackground>
      </Pressable>
    </Link>
  )
}
