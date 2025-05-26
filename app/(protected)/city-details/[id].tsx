import { StyleSheet, Text, View } from 'react-native'

import { useLocalSearchParams, useRouter } from 'expo-router'

export default function CityDetailsScreen() {
  const { back } = useRouter()
  const { id, name } = useLocalSearchParams()

  return (
    <View style={styles.container}>
      <Text>City Details from ID #{id}</Text>
      {name && <Text>nome: {name}</Text>}

      <Text onPress={back}>Voltar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
