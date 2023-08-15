import React from 'react'
import {Text, View, Button} from "react-native"

export default function DummyPage({navigation}) {
  return (
    <View>
      <Text>DummyPage</Text>
      <Button
          title="Go to Item"
          onPress={() => navigation.push('Post Item')}
        />
      <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
    </View>
  )
}
