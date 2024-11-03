import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

interface EmotionButtonProps {
  icon: string;
  text: string;
  color: string;
}

export function EmotionButton({ icon, text, color }: EmotionButtonProps) {
  return (
    <View style={styles.emotionButtonContainer}>
      <View style={[styles.emotionButton, { backgroundColor: color }]}>
        {text === 'Angry' ? (
          <FAIcon name={icon} size={50} color="#fff" />
        ) : (
          <Icon name={icon} size={50} color="#fff" />
        )}
      </View>
      <Text style={styles.emotionText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emotionButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emotionButton: {
    padding: 5,
    borderRadius: 30,
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  emotionText: {
    marginTop: 5,
    color: '#2e297e',
  }
});
