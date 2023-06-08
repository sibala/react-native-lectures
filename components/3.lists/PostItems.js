import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'

export default function PostItems({item, toggleContent}) {
  return (
    <TouchableOpacity style={styles.articleContainer} onPress={() => toggleContent(item._id)}>  
        <View style={styles.article}>
            <Text style={styles.title}>{item.title}</Text>
            {
                item.displayContent 
                    ? <Text>{item.body}</Text>
                    : null
            }
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    article: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: 'beige',
    },
    articleContainer: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});
