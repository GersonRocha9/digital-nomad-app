import { Pressable, StyleSheet, View } from 'react-native'

import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated'

import { Box } from './box'
import { Text } from './text'
import theme from './theme/theme'
import { useAppTheme } from './theme/useAppTheme'

interface IAccordionProps {
  title: string
  description: string
}

export function Accordion({ title, description }: IAccordionProps) {
  const isOpen = useSharedValue(false)
  const progress = useSharedValue(0)

  function handleToggleAccordion() {
    isOpen.value = !isOpen.value
    progress.value = withTiming(isOpen.value ? 0 : 1, { duration: 500 })
  }

  return (
    <Pressable onPress={handleToggleAccordion}>
      <View>
        <AccordionHeader title={title} progress={progress} />
        <AccordionBody description={description} progress={progress} />
      </View>
    </Pressable>
  )
}

export function AccordionHeader({
  title,
  progress,
}: {
  title: string
  progress: SharedValue<number>
}) {
  const { colors, borderRadii } = useAppTheme()

  const iconAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: interpolate(progress.value, [0, 1], [0, -180]) + 'deg',
      },
    ],
    tintColor: interpolateColor(
      progress.value,
      [0, 1],
      [colors.gray2, colors.primary],
    ),
  }))

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      [colors.transparent, colors.gray1],
    ),

    borderWidth: interpolate(progress.value, [0, 1], [1, 0]),

    borderBottomLeftRadius: interpolate(
      progress.value,
      [0, 1],
      [borderRadii.default, 0],
    ),

    borderBottomRightRadius: interpolate(
      progress.value,
      [0, 1],
      [borderRadii.default, 0],
    ),
  }))

  return (
    <Animated.View style={[headerAnimatedStyle, styles.header]}>
      <Box flexShrink={1}>
        <Text variant="title16">{title}</Text>
      </Box>

      <Animated.Image
        source={require('@/assets/images/chevron-down.png')}
        style={[
          iconAnimatedStyle,
          {
            width: 24,
            height: 24,
          },
        ]}
      />
    </Animated.View>
  )
}

export function AccordionBody({
  description,
  progress,
}: {
  description: string
  progress: SharedValue<number>
}) {
  const { borderRadii } = useAppTheme()
  const height = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [0, 1]),
    height: interpolate(progress.value, [0, 1], [0, height.value]),

    borderTopLeftRadius: interpolate(
      progress.value,
      [0, 1],
      [borderRadii.default, 0],
    ),

    borderTopRightRadius: interpolate(
      progress.value,
      [0, 1],
      [borderRadii.default, 0],
    ),
  }))

  return (
    <Animated.View style={[animatedStyles, { overflow: 'hidden' }]}>
      <View
        style={styles.body}
        onLayout={(event) => {
          height.value = event.nativeEvent.layout.height
        }}
      >
        <Text>{description}</Text>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: theme.colors.gray1,
    borderRadius: theme.borderRadii.default,
  },
  body: {
    position: 'absolute',
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: theme.colors.gray1,
    borderBottomLeftRadius: theme.borderRadii.default,
    borderBottomRightRadius: theme.borderRadii.default,
  },
})
