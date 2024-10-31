import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';

interface AnimatedBubbleProps {
  message: string;
  role: 'user' | 'assistant';
}

const AnimatedMessage: React.FC<AnimatedBubbleProps> = ({ message, role }) => {
  const opacity = useSharedValue(0);
  const translation = useSharedValue(50);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 300 });
    translation.value = withSpring(0, {
      damping: 15,
      stiffness: 300,
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translation.value }],
    };
  });

  return (
    <Animated.View
      style={[
        styles.bubble,
        role === 'user' ? styles.userBubble : styles.assistantBubble,
        animatedStyle,
      ]}
    >
      <Text style={role === 'user' ? styles.userText : styles.assistantText}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '75%',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#1ca3c9',
    marginRight: 10,
  },
  assistantBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  userText: {
    color: '#fff',
    fontSize: 16,
  },
  assistantText: {
    color: '#000',
    fontSize: 16,
  },
});

export default AnimatedMessage;
