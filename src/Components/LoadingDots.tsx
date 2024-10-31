import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, withDelay } from 'react-native-reanimated';

const LoadingDots: React.FC = () => {
  const dot1Opacity = useSharedValue(0);
  const dot2Opacity = useSharedValue(0);
  const dot3Opacity = useSharedValue(0);

  useEffect(() => {
    dot1Opacity.value = withRepeat(withTiming(1, { duration: 300 }), -1, true);

    dot2Opacity.value = withDelay(200, withRepeat(withTiming(1, { duration: 300 }), -1, true));

    dot3Opacity.value = withDelay(300, withRepeat(withTiming(1, { duration: 300 }), -1, true));
  }, []);

  const animatedDotStyle = (opacity: Animated.SharedValue<number>) =>
    useAnimatedStyle(() => ({
      opacity: opacity.value,
    }));

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.dot, animatedDotStyle(dot1Opacity)]}/>
      <Animated.Text style={[styles.dot, animatedDotStyle(dot2Opacity)]}/>
      <Animated.Text style={[styles.dot, animatedDotStyle(dot3Opacity)]}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10, 
    backgroundColor: '#576f7d',
    borderRadius: 10,
    marginHorizontal: 5,
  },
});

export default LoadingDots;
