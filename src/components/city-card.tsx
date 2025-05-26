import { ImageBackground } from 'react-native'

import { Text } from './text'

import type { CityPreview } from '../types'

interface ICityCardProps {
  cityPreview: CityPreview
}

export function CityCard({ cityPreview }: ICityCardProps) {
  return (
    <ImageBackground source={cityPreview.coverImage} style={{ width: 200, height: 200 }}>
      <Text>{cityPreview.name}</Text>

      <Text>{cityPreview.country}</Text>
    </ImageBackground>
  )
}
