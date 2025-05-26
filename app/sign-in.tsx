import { StyleSheet, Text, View } from 'react-native'

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
