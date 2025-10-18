import { useState } from 'react'

import { TextInput, TextInputProps } from 'react-native'

import { Box, type BoxProps } from './box'
import { IconButton } from './icon-button'
import { useAppTheme } from './theme/useAppTheme'

type SearchInputProps = {} & Pick<
  TextInputProps,
  'value' | 'onChangeText' | 'placeholder' | 'testID'
>

export function SearchInput({
  value,
  onChangeText,
  placeholder,
  testID,
}: SearchInputProps) {
  const { colors, textVariants } = useAppTheme()
  const [isFocused, setIsFocused] = useState(false)

  function onPressIconButton() {
    if (value!.length > 0) {
      onChangeText?.('')
    }
  }

  return (
    <Box
      {...boxStyle}
      style={{ borderColor: isFocused ? colors.primary : colors.gray1 }}
    >
      <TextInput
        testID={testID}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          ...textVariants.title16,
          color: colors.text,
          height: '100%',
          width: '100%',
          flexShrink: 1,
        }}
      />
      <IconButton
        iconName={value!.length > 0 ? 'Close' : 'Search-outline'}
        onPress={onPressIconButton}
      />
    </Box>
  )
}

const boxStyle: BoxProps = {
  flexDirection: 'row',
  padding: 's8',
  paddingLeft: 's16',
  justifyContent: 'space-between',
  backgroundColor: 'gray1',
  height: 70,
  alignItems: 'center',
  borderRadius: 'rounded',
  borderWidth: 2,
}
