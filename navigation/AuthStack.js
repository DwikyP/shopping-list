import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register'
 
const Stack = createStackNavigator();
 
const AuthStack = () => {
 
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};
 
export default AuthStack;