import React, {useState,useEffect} from 'react';
import { View, Text, FlatList, StyleSheet, Alert, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import ListCartItem from './components/ListCartItem'
import {v4 as uuidv4} from 'uuid';

//Home
const HomeScreen = ({ navigation, route }) => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems()
      setItems(itemsFromServer)
    }
    getItems()
  },[])

  const deleteItem = async (_id) => {
    const res = await fetch('http://10.0.2.2:3000/delete',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          id:_id
        })
      })
      .then(res=>res.json())
      .then(deletedItem=>{
        Alert.alert(`${deletedItem.text} deleted`)
      })
      .catch(err=>{
        Alert.alert("Something went wrong")
      })
      setItems(items.filter((item) => item._id !== _id))
  }

  const fetchItems = async () =>{
    const res = await fetch('http://10.0.2.2:3000/')
    const data = await res.json()

    return data
  }

  const addItem = async (text) => {
    const res = await fetch('http://10.0.2.2:3000/send-data',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(text)
    })
    const data = await res.json()
    setItems([...items, data])
  }

  const addToCart = (id, text, qty) => {
    Alert.alert(`${text} added to Cart`)
    setCartItems([{id, text, qty}, ...cartItems])
  }

  return (
    <View style={styles.container}>
        {/* <Header/> */}
        <Button
          title="Cart"
          onPress={() => navigation.navigate('Cart', cartItems)}/>
        <AddItem addItem={addItem}/>
        <FlatList data={items}
        renderItem={({item}) => <ListItem item={item} addToCart={addToCart} deleteItem={deleteItem}/>}
        keyExtractor={(item) => item._id}
        />
    </View>
  );
}

//Cart
const CartScreen = ({ route, navigation }) => {
  const [cartItems, setCartItems] = useState(route.params);

  const removeItem = (id) => {
      setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <View style={styles.container}>
      <FlatList data={cartItems}
        renderItem={({item}) => <ListCartItem cartItem={item} removeItem={removeItem}/>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

 const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
  })

export default App;