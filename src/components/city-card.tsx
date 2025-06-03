import { ImageBackground, Pressable } from 'react-native'

import { Link } from 'expo-router'

import { BlackOpacity } from './black-opacity'
import { Box } from './box'
import { Icon } from './icon'
import { Text } from './text'
import { useAppTheme } from './theme/useAppTheme'

import type { CityPreview } from '../types'

interface ICityCardProps {
  cityPreview: CityPreview
}

export function CityCard({ cityPreview }: ICityCardProps) {
  const { borderRadii } = useAppTheme()

  return (
    <Link href={`/city-details/${cityPreview.id}`} asChild>
      <Pressable>
        <ImageBackground
          source={cityPreview.coverImage}
          style={{ width: '100%', height: 280 }}
          imageStyle={{ borderRadius: borderRadii.default }}
        >
          <BlackOpacity />

          <Box flex={1} padding="s24" justifyContent="space-between">
            <Box alignSelf="flex-end">
              <Icon name="Favorite-outline" color="text" />
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
