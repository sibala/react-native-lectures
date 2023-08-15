import React from 'react'
import {Text, Button, View} from "react-native"

export default function PostItem({navigation, route}) {
  const { itemId, otherParam } = route.params;
  return (
    <View>
      <Text>Post item {itemId}</Text>
      <Button
          title="Go to Dummy Page"
          onPress={() => navigation.push('Dummy Page')}
        />
    </View>
  )
}
