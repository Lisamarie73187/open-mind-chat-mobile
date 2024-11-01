import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import Background from '../Components/Background';

interface LoginProps {
  navigation: NavigationProp<any>;
}

const Login = ({ navigation }: LoginProps) => {
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '' });
  const [isSigningUp, setIsSigningUp] = useState(false);
  const scale = useSharedValue(1);

  const handleInputChange = (field: string, value: string) => {
    setCredentials(prevState => ({ ...prevState, [field]: value }));
  };

  const handleAuthAction = () => {
    scale.value = withSpring(0);
    isSigningUp ? console.log('Signed up') : navigation.navigate('Welcome');
  };

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>{isSigningUp ? 'Sign Up' : 'Login'} to Open Mind Chat</Text>
        
        {isSigningUp && (
          <TextInput
            placeholder="Name"
            value={credentials.name}
            onChangeText={(value) => handleInputChange('name', value)}
            style={styles.input}
          />
        )}
        
        <TextInput
          placeholder="Email"
          value={credentials.email}
          onChangeText={(value) => handleInputChange('email', value)}
          keyboardType="email-address"
          style={styles.input}
        />
        
        <TextInput
          placeholder="Password"
          value={credentials.password}
          onChangeText={(value) => handleInputChange('password', value)}
          secureTextEntry
          style={styles.input}
        />
        
        <TouchableOpacity onPress={handleAuthAction} style={styles.button}>
          <Text style={styles.buttonText}>{isSigningUp ? 'Sign Up' : 'Log In'}</Text>
        </TouchableOpacity>
        
        <Text style={styles.switchText}>
          {isSigningUp ? 'Already have an account?' : 'Don’t have an account?'}{' '}
          <Text onPress={() => setIsSigningUp(!isSigningUp)} style={styles.linkText}>
            {isSigningUp ? 'Log in' : 'Sign up'}
          </Text>
        </Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 110,
    alignItems: 'center',
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '100%',
  },
  button: {
    backgroundColor: '#8bc34a',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  switchText: {
    textAlign: 'center',
    marginTop: 15,
    color: '#333',
  },
  linkText: {
    color: '#00796b',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default Login;
