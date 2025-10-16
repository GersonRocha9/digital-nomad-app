import { Image, ImageProps } from 'react-native'

type LogoProps = ImageProps

export function Logo({ width = 150, height = 60, ...imageProps }: LogoProps) {
  return (
    <Image
      source={require('../../../assets/images/logo.png')}
      style={{
        ...imageProps,
        width: width,
        height: height,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 60,
      }}
    />
  )
}
