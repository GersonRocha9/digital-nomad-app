import { Box } from './box'

interface IBlackOpacityProps {
  opacity?: number
}

export function BlackOpacity({ opacity = 0.25 }: IBlackOpacityProps) {
  return (
    <Box
      position="absolute"
      width="100%"
      height="100%"
      backgroundColor="midnightBlack"
      opacity={opacity}
    />
  )
}
