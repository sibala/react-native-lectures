import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/auth/Login';
import { Register } from '../screens/auth/Register';
import { Home } from '../screens/app/Home';
import { Settings } from '../screens/app/Settings';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}