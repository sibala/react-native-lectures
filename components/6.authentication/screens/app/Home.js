import React, {useContext} from 'react'
import {Text, View, Button} from 'react-native'
import { AuthContext } from '../../contexts/AuthContext'

export const Home = () => {
  const {handleLogout} = useContext(AuthContext)
  return (
    <View style={{flex: 1}}>
      <Text>Login</Text>
      <Button title="Test login function" onPress={() => handleLogout()} />
    </View>
  )
}
