import React, {useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, Button, Icon } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {HeaderBackButton, createStackNavigator} from '@react-navigation/stack';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import ListCartItem from './components/ListCartItem';
import Login from './src/Login';
import Register from './src/Register';
import auth from '@react-native-firebase/auth';
import {v4 as uuidv4} from 'uuid';

//Home
const HomeScreen = ({route, navigation}) => {
  // Checking Authenticated User (Still Error)
  //-------------------------------------------------------------
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) 
  //     setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //     return subscriber; // unsubscribe on unmount
  // }, [])

  // if (initializing) return null;

  // if (!user) {
  //    return navigation.navigate('Login')
  //  }
  // ----------------------------------------------------------

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   if(route.params?.data){
  //   setCartItems(...route.params.data)
  //   console.log(route.params?.data);
  //   }
  // }, [route.params?.data]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Log Out"
          onPress={() => {/*auth().signOut()*/ navigation.navigate("Login")}}
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems();
      setItems(itemsFromServer);
    };
    getItems();
  }, []);

  const deleteItem = async _id => {
    const res = await fetch('http://10.0.2.2:3000/delete', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        id: _id,
      }),
    })
      .then(res => res.json())
      .then(deletedItem => {
        Alert.alert(`${deletedItem.text} deleted`);
      })
      .catch(err => {
        Alert.alert('Something went wrong');
      });
    setItems(items.filter(item => item._id !== _id));
  };

  const fetchItems = async () => {
    const res = await fetch('http://10.0.2.2:3000/');
    const data = await res.json();

    return data;
  };

  const addItem = async text => {
    const res = await fetch('http://10.0.2.2:3000/send-data', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(text),
    });
    const data = await res.json();
    setItems([...items, data]);
  };

  const addToCart = (id, text, qty) => {
    Alert.alert(`${text} added to Cart`);
    setCartItems([{id, text, qty}, ...cartItems]);
  };

  return (
    <View style={styles.container}>
      {/* <Header/> */}
      {/* <Text>Welcome {user.email}</Text> */}
      <Button
        title="Cart"
        onPress={() => navigation.navigate('Cart', cartItems)}
      />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} addToCart={addToCart} deleteItem={deleteItem} />
        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

//Cart
const CartScreen = ({route, navigation}) => {
  const [cartItems, setCartItems] = useState([...route.params]);
  let items = [...route.params];

  useEffect(() => {
    console.log(cartItems)
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          title="back"
          onPress={() => navigation.navigate('Home', {data: items})} 
        />
      ),
    });
  }, [navigation])

  const removeItem = id => {
    let array = [...cartItems]; // make a separate copy of the array
    let index = array.findIndex(function (array) {
	    return array.id === id;
    });
    if (index !== -1) {
      array.splice(index, 1);
      setCartItems(array);
    }
    items = cartItems
    console.log(items)
    // setCartItems(cartItems.filter(item => item.id !== id));
    // console.log(cartItems)
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={({item}) => (
          <ListCartItem cartItem={item} removeItem={removeItem} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const Stack = createStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Cart" 
        component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
