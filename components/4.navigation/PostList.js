import React from 'react'
import {Text, View, Button} from "react-native"

export default function PostList({navigation}) {
  return (
    <View>
      <Text>Post list</Text>
      <Button
        title="Go to Item 86"
        onPress={() => navigation.navigate('Post Item', {
            itemId: 86,
            otherParam: 'Item 86',
          })}
      />
      <Button
        title="Go to Item 87"
        onPress={() => navigation.navigate('Post Item', {
            itemId: 87,
            otherParam: 'Item 87',
          })}
      />
      <Button
        title="Go to Item 88"
        onPress={() => navigation.navigate('Post Item', {
            itemId: 88,
            otherParam: 'Item 88',
          })}
      />
      <Button
        title="Go to Dummy page"
        onPress={() => navigation.navigate('Dummy Page')}
      />
    </View>
  )
}
