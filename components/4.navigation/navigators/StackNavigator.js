import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostList from '../PostList';
import PostItem from '../PostItem';
import DummyPage from '../DummyPage';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="Post List" component={PostList} options={{
        title: 'Hej',
        headerShown: false,
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#000"
          />
        ),
      }}/>
      <Stack.Screen name="Post Item" component={PostItem} />
      <Stack.Screen name="Dummy Page" component={DummyPage} options={{
        headerShown: false
      }}/>
    </Stack.Navigator>
  );
}