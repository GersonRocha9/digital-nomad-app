import { useWindowDimensions } from 'react-native'

import MapView from 'react-native-maps'

import { BottomSheet, type IBottomSheetProps } from '../components/bottom-sheet'
import { Box } from '../components/box'
import { IconButton } from '../components/icon-button'
import { useAppTheme } from '../components/theme/useAppTheme'

import type { ICity } from '../types'

type BottomSheetMapProps = Omit<IBottomSheetProps, 'children'> & {
  location: ICity['location']
}

export function BottomSheetMap({
  location,
  ...bottomSheetProps
}: BottomSheetMapProps) {
  const { height } = useWindowDimensions()
  const { borderRadii, spacing } = useAppTheme()

  return (
    <BottomSheet {...bottomSheetProps}>
      <MapView
        style={{
          width: '100%',
          height: height * 0.8,
          borderRadius: borderRadii.default,
        }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.2,
        }}
      />

      <Box position="absolute" right={spacing.padding} top={spacing.padding}>
        <IconButton iconName="Close" onPress={bottomSheetProps.onPress} />
      </Box>
    </BottomSheet>
  )
}
