import { Pressable, StyleSheet, View } from 'react-native'

import Animated, {
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

  function handleToggleAccordion() {
    isOpen.value = !isOpen.value
  }

  return (
    <Pressable onPress={handleToggleAccordion}>
      <View>
        <AccordionHeader title={title} isOpen={isOpen} />
        <AccordionBody description={description} isOpen={isOpen} />
      </View>
    </Pressable>
  )
}

export function AccordionHeader({
  title,
  isOpen,
}: {
  title: string
  isOpen: SharedValue<boolean>
}) {
  return (
    <View style={styles.header}>
      <Box flexShrink={1}>
        <Text variant="title16">{title}</Text>
      </Box>

      <Icon
        name={isOpen ? 'Chevron-up' : 'Chevron-down'}
        color={isOpen ? 'fieryRed' : 'gray2'}
      />
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

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: isOpen.value
        ? withTiming(height.value, { duration: 500 })
        : withTiming(0, { duration: 500 }),
    }
  })

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
