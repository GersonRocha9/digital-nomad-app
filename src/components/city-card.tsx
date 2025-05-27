import { ImageBackground } from 'react-native'

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
    <ImageBackground
      source={cityPreview.coverImage}
      style={{ width: '100%', height: 280 }}
      imageStyle={{ borderRadius: borderRadii.default }}
    >
      <Box position="absolute" width="100%" height="100%" backgroundColor="midnightBlack" opacity={0.25} />
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
  )
}
