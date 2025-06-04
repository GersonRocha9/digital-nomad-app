import MapView from 'react-native-maps'

import { BottomSheet, type IBottomSheetProps } from '../components/bottom-sheet'

import type { ICity } from '../types'

type BottomSheetMapProps = Omit<IBottomSheetProps, 'children'> & {
  location: ICity['location']
}

export function BottomSheetMap({
  location,
  ...bottomSheetProps
}: BottomSheetMapProps) {
  return (
    <BottomSheet {...bottomSheetProps}>
      <MapView
        style={{
          width: '100%',
          height: 700,
        }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </BottomSheet>
  )
}
