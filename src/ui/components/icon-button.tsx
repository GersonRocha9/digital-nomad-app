import { Pressable, type PressableProps } from 'react-native'

import { Box } from './box'
import { Icon, type IconName } from './icon'
import { useAppTheme } from './theme/useAppTheme'

interface IIconButtonProps {
  iconName: IconName
  onPress: PressableProps['onPress']
  testID?: string
}

export function IconButton({ iconName, onPress, testID }: IIconButtonProps) {
  const { boxShadows } = useAppTheme()

  return (
    <Pressable onPress={onPress} testID={testID ?? iconName}>
      <Box
        backgroundColor="primary"
        width={50}
        height={50}
        justifyContent="center"
        alignItems="center"
        borderRadius="rounded"
        style={{ boxShadow: boxShadows.primary }}
      >
        <Icon name={iconName} color="pureWhite" />
      </Box>
    </Pressable>
  )
}
