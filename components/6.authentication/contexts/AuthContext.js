import React, { createContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext()


export const AuthProvider = ({children}) => {
  const [accessToken, setAccessToken] = useState(null);
  
  const handleLogin = async () => {
    console.log('handleLogin')

    try {
      // fetch accessToken...
      await AsyncStorage.setItem('accessToken', 'somehting')
      setAccessToken('Somehting')
    } catch(error) {
      console.log(error)
    }
  }

  const handleLogout = async () => {
    console.log('handleLogout')

    try {
      await AsyncStorage.removeItem('accessToken')
      setAccessToken(null)
    } catch(error) {
      console.log(error)
    }
  }

  const isLoggedIn = async () => {
    console.log('isLoggedIn')

    try {
      const token = await AsyncStorage.getItem('accessToken')
      setAccessToken(token)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, [])

  return (
    <AuthContext.Provider value={{accessToken, handleLogin, handleLogout}}>
      {children}
    </AuthContext.Provider>
  )

}