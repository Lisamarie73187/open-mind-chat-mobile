import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp, useNavigationState } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

type RootStackParamList = {
  HomeScreen: undefined;
  Chat: undefined;
  Journal: undefined;
};

const BottomNavigation: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const state = useNavigationState((state) => state);
  const currentRoute = state.routes[state.index].name;

  const renderNavItem = (routeName: keyof RootStackParamList, iconName: string, label: string) => (
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate(routeName)}>
      <Icon name={iconName} size={24} color={currentRoute === routeName ? '#fff' : 'grey'} />
      <Text style={currentRoute === routeName ? styles.labelSelected : styles.label}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderNavItem('HomeScreen', 'home-outline', 'Home')}
      {renderNavItem('Chat', 'chatbox-ellipses-outline', 'Chat')}
      {renderNavItem('Journal', 'book-outline', 'Journal')}
      {renderNavItem('Chat', 'heart-outline', 'Self Care')}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#564fbc',
    paddingVertical: 12,
    margin: 10,
    borderTopColor: '#ddd',
    borderRadius: 25,
  },
  navItem: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: 'grey',
  },
  labelSelected: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BottomNavigation;
