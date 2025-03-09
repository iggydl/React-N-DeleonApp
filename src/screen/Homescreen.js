import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { loginStyle } from '../styles/styles';

const LoginScreen = () => {
  const [activeTab, setActiveTab] = useState('login'); // State to manage active tab
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    console.log('Firstname', fname);
    console.log('Lastname', lname);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', cpassword);
    // on press ng user for this function uulitin mo i check if na meet ba ang minimum requirements for login or register
  };

  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={loginStyle.container}
    >
      <Text style={loginStyle.formHeader}>Login Account</Text>

      {/* Container for the form */}
      <View style={loginStyle.formContainer}>

        {/* this is good naka condition kung ano lalabas login or register but mas maganda if nakahiwalay ang screen ng login and register. that way pag may problem login hindi madadamay yung register */}

        {/* Tabs for Login and Register */}
        <View style={loginStyle.tabContainer}>
          <TouchableOpacity
            style={[loginStyle.tab, activeTab === 'login' && loginStyle.activeTab]}
            onPress={() => setActiveTab('login')}
          >
            <Text style={[loginStyle.tabText, activeTab === 'login' ? loginStyle.activeTabText : { color: '#000' }]}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[loginStyle.tab, activeTab === 'register' && loginStyle.activeTab]}
            onPress={() => setActiveTab('register')}
          >
            <Text style={[loginStyle.tabText, activeTab === 'register' ? loginStyle.activeTabText : { color: '#000' }]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        {activeTab === 'login' && (
          <>
            <TextInput
              style={loginStyle.input}
              placeholder="Username"
              placeholderTextColor="#888"
              value={username}
              onChangeText={setUsername}
            />
                      {/* mas maganda if hinaharang na dito ano ang minimum requirements for password */}

            <TextInput
              style={loginStyle.input}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={loginStyle.loginButton} onPress={handleLogin}>
              <Text style={loginStyle.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </>
        )}

        {activeTab === 'register' && (
          <>
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
            {/* mas maganda if hinaharang na dito ano ang minimum requirements for password */}
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

            {/* bakit handleLogin function mo dito ? mas better if hiwalay sila ng function better debugging practice */}
            <TouchableOpacity style={loginStyle.loginButton} onPress={handleLogin}>
              <Text style={loginStyle.loginText}>REGISTER</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;