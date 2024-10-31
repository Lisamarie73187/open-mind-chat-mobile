// src/components/Background.js

import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { ReactNode } from 'react';

const Background = ({ children }: { children: ReactNode }) => {
  return (
    <ImageBackground
      source={require('../assets/OpenMindChatBackground.jpg')} // Adjust path as necessary
      style={styles.background}
      resizeMode="cover"
    >
     {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
//   container: {
//     flex: 1,
//     justifyContent: 'center', // Centers content vertically
//     alignItems: 'center', // Centers content horizontally
//     padding: 16, // Optional padding if you want space around the content
//   },
});

export default Background;
