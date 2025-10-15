import { Pressable, type PressableProps } from 'react-native'

import { Box, type BoxProps } from './box'
import { Icon, type IconName } from './icon'
import { Text } from './text'

export interface IPillProps {
  label: string
  iconName: IconName
  active: boolean
  onPress?: PressableProps['onPress']
}

export const PILL_HEIGHT = 16 + 16 + 2 + 2

export function Pill({ label, iconName, active, onPress }: IPillProps) {
  return (
    <Pressable onPress={onPress}>
      <Box {...boxStyles} backgroundColor={active ? 'gray1' : 'transparent'}>
        <Icon name={iconName} size={16} color={active ? 'primary' : 'gray2'} />
        <Text ml="s4" variant="text12">
          {label}
        </Text>
      </Box>
    </Pressable>
  )
}

const boxStyles: BoxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: 'gray1',
  borderRadius: 'rounded',
  paddingVertical: 's8',
  paddingHorizontal: 's12',
}
