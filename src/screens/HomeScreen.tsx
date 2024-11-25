import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Background from '../Components/Background';
import { EmotionButton } from '../Components/EmotionButton'; // Adjust the path as needed

interface WelcomeProps {
  navigation: NavigationProp<any>;
}

export default function HomeScreen({ navigation }: WelcomeProps) {
  const goToChat = () => {
    navigation.navigate('Chat');
  };

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.spaceText}>Lisa's Space</Text>
        <View style={styles.dailyCareContainer}>
          <Text style={styles.dailyCareText}>Daily Care</Text>
          <Text style={styles.feelingText}>How are you feeling today?</Text>
          <View style={styles.buttonContainer}>
            <EmotionButton icon="happy-outline" text="Happy" color="#ffcbce" />
            <EmotionButton icon="sad-outline" text="Sad" color="#c2dcff" />
            <EmotionButton icon="bolt" text="Angry" color="#fbcdae" />
            <EmotionButton icon="alert-outline" text="Anxious" color="#b8b8f8" />
          </View>
        </View>
        <View style={styles.startAChatContainer}>
          <Text style={styles.dailyCareText}>My AI Friend</Text>
          <Text style={styles.feelingText}>Hi, I'm <Text style={styles.ami}>AMI</Text> your AI friend</Text>
          <TouchableOpacity style={styles.button} onPress={goToChat}>
            <Text style={styles.buttonText}>Let’s Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  dailyCareContainer: {
    alignContent: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 20,
    marginBottom: 16,
    padding: 12,
    height: 170,
  },
  startAChatContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 20,
    marginBottom: 16,
    padding: 12,
    height: 130,
  },
  spaceText: {
    fontSize: 24,
    paddingBottom: 10,
    color: "#2e297e",
    fontWeight: 'bold',
  },
  dailyCareText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#2e297e",
  },
  ami: {
    fontWeight: 'bold',
    color: "#2e297e",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  feelingText: {
    fontSize: 16,
    paddingTop: 5,
    color: "#2e297e",
  },
  button: {
    backgroundColor: '#4e48a8',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 18,
  },
});
