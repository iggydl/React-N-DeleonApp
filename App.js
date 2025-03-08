import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/Homescreen';
import HomeScreenTwo from './src/screen/HomescreenTwo';
import SplashScreen from './src/screen/SplashScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="HomeScreenTwo" component={HomeScreenTwo} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
