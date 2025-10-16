import { TouchableOpacityBox, type TouchableOpacityBoxProps } from './box'
import { Text } from './text'

import type { ThemeColors } from './theme/theme'

type ButtonVariants = 'primary' | 'secondary'

const buttonColors: Record<
  ButtonVariants,
  { backgroundColor: ThemeColors; textColor: ThemeColors }
> = {
  primary: {
    backgroundColor: 'primary',
    textColor: 'text',
  },
  secondary: {
    backgroundColor: 'gray1',
    textColor: 'text',
  },
}

type ButtonProps = TouchableOpacityBoxProps & {
  title: string
  onPress: () => void
  variant?: ButtonVariants
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  ...touchableOpacityProps
}: ButtonProps) {
  const buttonProps = buttonColors[variant]

  return (
    <TouchableOpacityBox
      {...touchableOpacityProps}
      onPress={onPress}
      backgroundColor={buttonProps.backgroundColor}
      borderRadius="default"
      padding="padding"
      justifyContent="center"
      alignItems="center"
    >
      <Text color={buttonProps.textColor}>{title}</Text>
    </TouchableOpacityBox>
  )
}
