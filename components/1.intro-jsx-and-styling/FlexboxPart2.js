import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function FlexboxPart2() {
  return (
    <View style={styles.container}>
      <View style={styles.box}><Text>Box 1</Text></View>
      <View style={styles.box}><Text>Box 2</Text></View>
      <View style={styles.box}><Text>Box 3</Text></View>

      <View style={styles.box}><Text>Box 4</Text></View>
      <View style={styles.box}><Text>Box 5</Text></View>
      <View style={styles.box}><Text>Box 6</Text></View>

      <View style={styles.box}><Text>Box 7</Text></View>
      <View style={styles.box}><Text>Box 8</Text></View>
      <View style={styles.box}><Text>Box 9</Text></View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,                      // Stretches out, takes up the available space
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'flex-start', // position items along the main-axis
      alignItems: 'flex-start',     // Works only when flexWrap: 'nowrap'. Position items along the cross-axis
      alignContent: 'center',       // Works only when flexWrap: 'wrap'. Position lines along the cross-axis
    //   backgroundColor: '#aaa',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    box: { 
        borderWidth: 2,
        width: '33.3333%',

    },
  });
  