import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/auth/Login';
import { Register } from '../screens/auth/Register';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}