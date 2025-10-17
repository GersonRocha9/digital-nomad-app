import RNToast, { type ToastConfig } from 'react-native-toast-message'

import { Box } from '@/src/ui/components/box'
import { Text } from '@/src/ui/components/text'
import type { ThemeColors } from '@/src/ui/components/theme/theme'

import type { Feedback, FeedbackType } from '../../IFeedbackService'

const toastColors: Record<
  FeedbackType,
  { backgroundColor: ThemeColors; textColor: ThemeColors }
> = {
  success: { backgroundColor: 'fbSuccessBg', textColor: 'fbSuccessSurface' },
  error: { backgroundColor: 'fbErrorBg', textColor: 'fbErrorSurface' },
  warning: { backgroundColor: 'fbWarningBg', textColor: 'fbWarningSurface' },
  info: { backgroundColor: 'fbInfoBg', textColor: 'fbInfoSurface' },
}

function CustomToast({ type, description, message }: Feedback) {
  const { backgroundColor, textColor } = toastColors[type ?? 'success']

  return (
    <Box
      paddingHorizontal="s24"
      paddingVertical="s12"
      borderRadius="default"
      backgroundColor={backgroundColor}
    >
      <Text variant="title16" color={textColor} textAlign="center">
        {message}
      </Text>
      {description && (
        <Text marginTop="s4" color={textColor}>
          {description}
        </Text>
      )}
    </Box>
  )
}

const toastConfig: ToastConfig = {
  success: ({ props }) => <CustomToast {...props} />,
  warning: ({ props }) => <CustomToast {...props} />,
  error: ({ props }) => <CustomToast {...props} />,
  info: ({ props }) => <CustomToast {...props} />,
}

export function Toast() {
  return (
    <RNToast
      autoHide
      topOffset={80}
      config={toastConfig}
      visibilityTime={3000}
    />
  )
}
