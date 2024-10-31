import React from 'react';
import 'react-native-reanimated';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';


import Login from './src/screens/Login';
import Welcome from './src/screens/Welcome';
import Chat from './src/screens/Chat';
import Background from './src/Components/Background';

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
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={Login} 
            options={{
              title: ""
            }}
            />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Chat" component={Chat} />
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
