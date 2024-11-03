import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { ReactNode } from 'react';

const Background = ({ children }: { children: ReactNode }) => {
  return (
    <ImageBackground
      source={require('../assets/backgroundLight.jpg')}
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
});

export default Background;
