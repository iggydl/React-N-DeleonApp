import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { mainStyle } from '../styles/styles';

const HomeScreenTwo = ({ navigation }) => { // Destructure navigation from props
  const handleLogin = () => {
    navigation.navigate('HomeScreen'); // Navigate to the Next screen
  };

  return (
    <ImageBackground
      source={require('../assets/perez-slogan.png')}
      style={mainStyle.container}
    >

      <View style={mainStyle.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={mainStyle.loginButton}>
          <Text style={mainStyle.loginText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreenTwo;