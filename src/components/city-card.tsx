import { ImageBackground } from 'react-native'

import { Text } from './text'

import type { CityPreview } from '../types'

interface ICityCardProps {
  cityPreview: CityPreview
}

export function CityCard({ cityPreview }: ICityCardProps) {
  return (
    <ImageBackground source={cityPreview.coverImage} style={{ width: '100%', height: 280 }}>
      <Text>{cityPreview.name}</Text>

      <Text>{cityPreview.country}</Text>
    </ImageBackground>
  )
}
