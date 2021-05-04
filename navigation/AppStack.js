import React, { useContext } from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import { AuthContext } from '../navigation/AuthProvider';
 
const Stack = createStackNavigator();
 
const AppStack = () => {
    const {logout} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
      name='Home' 
      component={Home} 
      options = {() => ({
          headerRight: () => (
            <Button
            title="Log Out"
            onPress={() => {logout()}}
            />
          )
      })}
      />
      <Stack.Screen name='Cart' component={Cart} />
    </Stack.Navigator>
  );
}
 
export default AppStack;