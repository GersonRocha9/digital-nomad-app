import { useState } from 'react'

import { Pressable, StyleSheet, View } from 'react-native'

import { Box } from './box'
import { Icon } from './icon'
import { Text } from './text'
import theme from './theme/theme'

interface IAccordionProps {
  title: string
  description: string
}

export function Accordion({ title, description }: IAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Pressable onPress={() => setIsOpen(!isOpen)}>
      <View>
        <AccordionHeader title={title} />
        {isOpen && <AccordionBody description={description} />}
      </View>
    </Pressable>
  )
}

export function AccordionHeader({ title }: { title: string }) {
  return (
    <View style={styles.header}>
      <Box flexShrink={1}>
        <Text variant="title16">{title}</Text>
      </Box>
      <Icon name="Chevron-down" color="gray2" />
    </View>
  )
}

export function AccordionBody({ description }: { description: string }) {
  return (
    <View style={styles.body}>
      <Text>{description}</Text>
    </View>
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
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: theme.colors.gray2,
    borderBottomLeftRadius: theme.borderRadii.default,
    borderBottomRightRadius: theme.borderRadii.default,
  },
})
