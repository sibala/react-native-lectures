import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Home';
import Contact from '../Contact';
import PostList from '../PostList';
import StackNavigator from './StackNavigator';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Post List" component={StackNavigator} />
      <Drawer.Screen name="Contact" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}