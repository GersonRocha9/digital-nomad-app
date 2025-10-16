import { Pressable } from 'react-native'

import { router, type LinkProps } from 'expo-router'

import { Text } from './text'

interface TextLinkProps {
  text: string
  ctaText: string
  href?: LinkProps['href']
  goBackOnPress?: boolean
}

export function TextLink({
  text,
  ctaText,
  href,
  goBackOnPress,
}: TextLinkProps) {
  function handleOnPress() {
    if (href) {
      router.navigate(href)
    } else if (goBackOnPress) {
      router.back()
    } else {
    }
  }

  return (
    <Pressable onPress={handleOnPress}>
      <Text marginTop="s16" alignSelf="center" variant="text14" color="gray2">
        {text}{' '}
        <Text color="primary" variant="title14">
          {ctaText}
        </Text>
      </Text>
    </Pressable>
  )
}
