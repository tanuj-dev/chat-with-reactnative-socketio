import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '@screens/Login';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import Main from './main';
const Stack = createStackNavigator();
export default function Navigator(props) {
  const {auth} = props;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={auth ? 'Main' : 'Login'}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
