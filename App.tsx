import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Login from './src/screens/Login';
import Welcome from './src/screens/Welcome';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;

  return (
    <View style={[styles.background, { backgroundColor }]}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#9ea0ff' },
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen name="Home" component={Login} />
          <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default App;
