import React from 'react';
import 'react-native-reanimated';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';


import Login from './src/screens/Login';
import Chat from './src/screens/Chat';
import Background from './src/Components/Background';
import HomeScreen from './src/screens/HomeScreen';
import Journal from './src/screens/Journal';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;

  return (
    <View style={[styles.background, { backgroundColor }]}>
          <Background>

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerBackTitleVisible: false,
            headerStyle: { 
              backgroundColor: 'transparent',
             },
            headerTintColor: '#2e297e',
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={Login} 
            options={{
              title: ""
            }}
            />
          <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{
                title: ""
              }}
              />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen 
            name="Journal" 
            component={Journal} 
            options={{
                title: "Journal"
              }}
              />
        </Stack.Navigator>
      </NavigationContainer>
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default App;
