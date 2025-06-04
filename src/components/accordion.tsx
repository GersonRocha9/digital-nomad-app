import { Pressable, StyleSheet, View } from 'react-native'

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated'

import { Box } from './box'
import { Icon } from './icon'
import { Text } from './text'
import theme from './theme/theme'

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
        <AccordionBody description={description} isOpen={isOpen} />
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
  const iconAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: interpolate(progress.value, [0, 1], [0, -180]) + 'deg',
      },
    ],
  }))

  return (
    <View style={styles.header}>
      <Box flexShrink={1}>
        <Text variant="title16">{title}</Text>
      </Box>

      <Animated.View style={iconAnimatedStyle}>
        <Icon name="Chevron-down" color="gray2" />
      </Animated.View>
    </View>
  )
}

export function AccordionBody({
  description,
  isOpen,
}: {
  description: string
  isOpen: SharedValue<boolean>
}) {
  const height = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => ({
    height: isOpen.value
      ? withTiming(height.value, { duration: 500 })
      : withTiming(0, { duration: 500 }),
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
    backgroundColor: theme.colors.gray2,
    borderBottomLeftRadius: theme.borderRadii.default,
    borderBottomRightRadius: theme.borderRadii.default,
  },
})
