import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Background from '../Components/Background';

interface WelcomeProps {
  navigation: NavigationProp<any>;
}

export default function Welcome({navigation}: WelcomeProps) {
  const goToChat = () => {
    navigation.navigate('Chat')
  }

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome Lisa</Text>
        <Text style={styles.feelingText}>How are you feeling today?</Text>
        <Text style={styles.descriptionText}>
          Whether you're seeking a moment of peace, a compassionate listener, or a safe space to express your
          thoughts, <Text style={styles.boldText}>Ami</Text> is here to listen and offer support.
        </Text>
        <TouchableOpacity style={styles.button} onPress={goToChat}>
          <Text style={styles.buttonText}>Let’s Chat</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
    padding: 16,
  },
  welcomeText: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 8,
  },
  feelingText: {
    fontSize: 40,
    lineHeight: 48,
    maxWidth: '80%',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  descriptionText: {
    fontSize: 18,
    color: '#fff',
    maxWidth: '90%',
    textAlign: 'center',
    marginBottom: 24,
  },
  boldText: {
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#A4D065',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 18,
  },
});
