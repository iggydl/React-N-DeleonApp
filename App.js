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
      {/* initial route asan ?  */}
      
      <Stack.Navigator
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            {/* scrap this homescreen kasi magulo pag nag ddebug always remember na di lang kayo maghahawak ng code paghiwalay niyo na login and register */}
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          {/* make this homescreen lang instead of homescreentwo kasi gagawin mo na magkahiwalay ang login and register */}
          <Stack.Screen name="HomeScreenTwo" component={HomeScreenTwo} />
        {/* missing profilescreen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
