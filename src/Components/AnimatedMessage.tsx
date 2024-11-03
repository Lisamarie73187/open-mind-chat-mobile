import React, { useEffect } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
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
        <View>
            {role === 'user' ? (
                <View style={styles.userMessageContainer}>
                    <Animated.View
                        style={[
                            styles.bubble,
                            styles.userBubble,
                            animatedStyle,
                        ]}
                    >
                        <Text style={styles.userText}>{message}</Text>
                    </Animated.View>
                    {role === 'user' && <Image source={require('../assets/AvatarTwo.png')} style={styles.avatarImage} />}
                </View>
            ) : (
                <View style={styles.assitantMessageContainer}>
                    <Image source={require('../assets/avatarOne.png')} style={styles.avatarImageOne} />
                    <Animated.View
                        style={[
                            styles.bubble,
                            styles.assistantBubble,
                            animatedStyle,
                        ]}
                    >
                        <Text style={styles.assistantText}>{message}</Text>
                    </Animated.View>
                </View>
            )}
        </View>


    );
};

const styles = StyleSheet.create({
    userMessageContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        margin: 10,
    },
    assitantMessageContainer: {
        flexDirection: 'row',
        margin: 10,
    },
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
        marginLeft: 5,
    },
    userText: {
        color: '#fff',
        fontSize: 16,
    },
    assistantText: {
        color: '#000',
        fontSize: 16,
    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginTop: 3,
    },
    avatarImageOne: {
        width: 45,
        height: 45,
        borderRadius: 25,
    },
    typingIndicatorContainer: {
        alignSelf: 'flex-start',
        margin: 10,
        padding: 5,
      },
});

export default AnimatedMessage;
