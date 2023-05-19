import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '@screens/Login';
import Home from '@screens/Home';
import {NavigationContainer, StackActions} from '@react-navigation/native';
const Stack = createStackNavigator();
export default function Navigator(props) {
  const {auth} = props;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={auth ? 'Home' : 'Login'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
