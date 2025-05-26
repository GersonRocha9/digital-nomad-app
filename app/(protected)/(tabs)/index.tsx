import { Button, Text, View } from 'react-native'

import { router } from 'expo-router'

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>HomeScreen</Text>

      <Button
        title="Go to details"
        onPress={() => {
          router.push('/details')
        }}
      />
    </View>
  )
}
