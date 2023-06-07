import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function FlexboxPart1() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}><Text>Box 1</Text></View>
      <View style={styles.box2}><Text>Box 2</Text></View>
      <View style={styles.box3}><Text>Box 3</Text></View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,                 // Stretches out, takes up the available space
      flexDirection: 'row',
      backgroundColor: '#aaa',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    box1: { 
      flex: 1,          // 1/6 = 16.6666% of the available space
      backgroundColor: 'pink',
    },
    box2: {
      flex: 2,          // 2/6 = 33% of the available space
      backgroundColor: 'beige',
    },
    box3: {
      flex: 3,          // 3/6 = 50% of the available space
      backgroundColor: 'skyblue',
    },
  });
  