import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContactInfo from '../ContactInfo';
import ContactMap from '../ContactMap';
import { Feather, FontAwesome } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ContactInfo" component={ContactInfo} options={{
        tabBarIcon: ({color, size}) => <Feather name="info" size={size} color={color} />
      }}/>
      <Tab.Screen name="ContactMap" component={ContactMap} options={{
        tabBarIcon: ({color, size}) => <FontAwesome name="map-marker" size={size} color={color} />,
        title: '',
        headerShown: false,
      }}/>
    </Tab.Navigator>
  );
}