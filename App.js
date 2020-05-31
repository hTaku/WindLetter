import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
import { SendScreen } from './screens/SendScreen';
import { SendMovieScreen } from './screens/SendMovieScreen';
import { ReadScreen } from './screens/ReadScreen';
 
const Stack = createStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Wind Letter"
        screenOptions={{
          headerTintColor:"#ffffff",
          headerStyle: {
            backgroundColor: "#333399",
          }
        }}
        headerMode="float"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Send" component={SendScreen} options={{}} />
        <Stack.Screen name="SendMovie" component={SendMovieScreen} options={{}} />
        <Stack.Screen name="Read" component={ReadScreen} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}