import React, {useContext} from 'react'
import {Text, View, Button} from 'react-native'
import { AuthContext } from '../../contexts/AuthContext';
console.log('Login')

export const Login = () => {
  const {handleLogin} = useContext(AuthContext);

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>Login</Text>
      <Button title="Test login function" onPress={() => handleLogin()} />
    </View>
  )
}


