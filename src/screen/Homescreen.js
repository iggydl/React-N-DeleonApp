import React, {useState} from 'react';
import {TextInput, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { loginStyle } from '../styles/styles';

const LoginScreen = () => {
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setConfirmPassword] = useState('');

  const handleLogin = () => {

    console.log('Firstname',fname);
    console.log('Lastname',lname)
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', cpassword);
  };

  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={loginStyle.container}>
      <Text style={loginStyle.formHeader}>Login Account</Text>

      <TextInput
        style={loginStyle.input}
        placeholder="Firstname"
        placeholderTextColor="#888"
        value={fname}
        onChangeText={setFirstName}
      />
      <TextInput
        style={loginStyle.input}
        placeholder="Lastname"
        placeholderTextColor="#888"
        value={lname}
        onChangeText={setLastName}
      />
      <TextInput
        style={loginStyle.input}
        placeholder="Username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={loginStyle.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={loginStyle.input}
        placeholder="Confirm Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={cpassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={loginStyle.loginButton} onPress={handleLogin}>
        <Text style={loginStyle.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default LoginScreen;
