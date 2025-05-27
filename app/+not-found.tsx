import React from 'react'

import { StyleSheet } from 'react-native'

import { Link, Stack } from 'expo-router'

import { Box } from '@/src/components/box'
import { Text } from '@/src/components/text'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Box
        flex={1}
        alignItems="center"
        justifyContent="center"
        padding="padding"
      >
        <Text>This screen does not exist.</Text>
        <Link href="/" style={styles.link}>
          <Text>Go to home screen!</Text>
        </Link>
      </Box>
    </>
  )
}

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
})
