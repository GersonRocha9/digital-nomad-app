import React, { PropsWithChildren } from 'react'

import { StyleSheet, TouchableOpacity } from 'react-native'

import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated'

export interface IBottomSheetProps {
  onPress: VoidFunction
  isOpen: SharedValue<boolean>
  duration?: number
}

export function BottomSheet({
  onPress,
  isOpen,
  duration = 500,
  children,
}: PropsWithChildren<IBottomSheetProps>) {
  const height = useSharedValue(0)
  const progress = useDerivedValue(() =>
    withTiming(isOpen.value ? 0 : 1, { duration }),
  )

  const sheetAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: progress.value * height.value,
      },
    ],
    zIndex: 2,
  }))

  const backdropAnimatedStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: isOpen ? 1 : withDelay(duration, withTiming(-1, { duration: 0 })),
  }))

  return (
    <>
      <Animated.View style={[styles.backdrop, backdropAnimatedStyle]}>
        <TouchableOpacity style={{ flex: 1 }} onPress={onPress} />
      </Animated.View>

      <Animated.View
        style={[styles.sheet, sheetAnimatedStyle]}
        onLayout={(event) => {
          height.value = event.nativeEvent.layout.height
        }}
      >
        {children}
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  sheet: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
})
