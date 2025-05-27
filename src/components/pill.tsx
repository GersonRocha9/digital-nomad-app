import { Box, type BoxProps } from './box'
import { Icon, type IconName } from './icon'
import { Text } from './text'

export interface IPillProps {
  label: string
  iconName: IconName
  active: boolean
}

export function Pill({ label, iconName, active }: IPillProps) {
  return (
    <Box {...boxStyles} backgroundColor={active ? 'gray1' : 'transparent'}>
      <Icon name={iconName} size={16} color={active ? 'primary' : 'gray2'} />
      <Text ml="s4" variant="text12">
        {label}
      </Text>
    </Box>
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
