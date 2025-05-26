import { Button, StyleSheet, Text, View } from 'react-native'

import { Link, useRouter } from 'expo-router'

export default function HomeScreen() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>

      <Button
        title="Go to details"
        onPress={() => {
          router.push('/details')
        }}
      />

      <Link href="/city-details/4" asChild>
        <Text>Go To City Details</Text>
      </Link>

      <Link
        href={{
          pathname: '/city-details/[id]',
          params: {
            id: 10,
            name: 'Gerson Rocha',
          },
        }}
      >
        <Text>Passando params para a tela de city details</Text>
      </Link>
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
