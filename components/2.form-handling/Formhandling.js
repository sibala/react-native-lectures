import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native'

export default function Formhandling() {
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
        <Text>Email to:</Text>
        <TextInput 
          value={email}
          style={styles.input} 
          placeholder="Email..."      
          onChangeText={(value) => setEmail(value)}    
        />
        <TextInput 
          value={age}
          style={styles.input} 
          placeholder="Age..."
          keyboardType="numeric"
          onChangeText={(value) => setAge(value)}      
        />
        <TextInput 
          multiline
          value={message}
          style={styles.input} 
          placeholder="Message..."  
          onChangeText={(value) => setMessage(value)}     
        />
        <Button color="red" title="Send" onPress={() => {Alert.alert('The email form has been sent from: ' + email)}}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,          // Stretches out, takes up the available space    
        justifyContent: 'center',
        // alignItems: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginVertical: 10,
    }
});