import React, { useContext } from 'react';
import { View, Button, Text} from 'react-native';
import { Icon } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import { AuthContext } from '../navigation/AuthProvider';
import { ItemProvider } from '../context/ItemProvider'
 
const Stack = createStackNavigator();
 
const AppStack = () => {
    const {logout} = useContext(AuthContext);
  return (
    <ItemProvider>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name='Home' 
        component={Home} 
        options = {({navigation}) => ({
            headerRight: () => (
              <View style={{ flexDirection: 'row'}}>
                <Icon
                raised
                 name='shoppingcart'
                 type='antdesign'
                 onPress={() => {navigation.navigate('Cart')}}
                />
                <Icon
                  raised
                  name='logout'
                  type='material-community'
                  onPress={() => {logout()}}
               />
              </View>
            )
        })}
        />
        <Stack.Screen 
          name='Cart' 
          component={Cart} 
          options = {() => ({
            headerRight: () => (
                <Icon
                  raised
                  name='logout'
                  type='material-community'
                  onPress={() => {logout()}}
               />
            )
        })}/>
      </Stack.Navigator>
    </ItemProvider>
  );
}
 
export default AppStack;