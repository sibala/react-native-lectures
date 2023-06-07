import React from 'react'
import { StyleSheet, View, Text, Image, Pressable, Linking } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 



export default function ImagesFontsAndIcons() {
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/favicon.png')} />
        <Text style={styles.text}>Hello World</Text>
        <Text style={styles.text}>With Pacifico Font Family</Text>
        <View style={styles.fontContainer}>
            <Pressable onPress={() => {Linking.openURL('https://youtube.com')}}>
                <AntDesign name="youtube" size={24} color="black" />
            </Pressable>
            <FontAwesome name="facebook-square" size={24} color="black" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,          // Stretches out, takes up the available space
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontFamily: 'Pacifico',
        fontSize: 30,
    },
    fontContainer: {
        flexDirection: 'row',
        columnGap: 20,
    }
  });