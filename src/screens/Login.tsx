import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Background from '../Components/Background';

interface LoginProps {
  navigation: NavigationProp<any>;
}

const Login = ({ navigation }: LoginProps) => {
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '' });
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleInputChange = useCallback((field: string, value: string) => {
    setCredentials(prevState => ({ ...prevState, [field]: value }));
  }, []);

  const handleAuthAction = useCallback(() => {
    isSigningUp ? console.log('Signed up') : navigation.navigate('HomeScreen');
  }, [isSigningUp, navigation]);

  const toggleSignUp = useCallback(() => {
    setIsSigningUp(prevState => !prevState);
  }, []);

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
          <Text onPress={toggleSignUp} style={styles.linkText}>
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
    alignItems: 'center',
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2e297e',
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
    backgroundColor: '#4e48a8',
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
    color: '#ff8f79',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default Login;
