
// "rfc" command for creating inital function component code
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function JsxAndStylingIntro() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}><Text>Box 1</Text></View>
      <View style={[styles.box, styles.box2]}><Text>Box 2</Text></View>
      <View style={[styles.box, styles.box3]}><Text>Box 3</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#aaa',

    // 1 property for all sides
    // margin: 20,

    // 4 property for all sides
    // marginTop: 20,
    // marginBottom: 20,
    // marginLeft: 20,
    // marginRight: 20,

    // 2 property for all sides
    marginVertical: 20,
    marginHorizontal: 20,

    // Same shorthands applies for padding
  },
  box: {
    height: 50,
    marginBottom: 20,
  },
  box1: {
    backgroundColor: 'pink',
    width: '25%',
    borderWidth: 5,
    borderColor: 'tomato',
  },
  box2: {
    backgroundColor: 'beige',
    width: '50%',
    borderBottomWidth: 5,
    borderBottomColor: 'orange',
    borderStyle: 'dashed',
  },
  box3: {
    backgroundColor: 'skyblue',
    width: '100%',
    borderRightWidth: 5,
    borderRightColor: 'steelblue',
  },
});
