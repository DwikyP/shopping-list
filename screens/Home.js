import React, {useState, useEffect, useLayoutEffect, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, Button, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';
import ListCartItem from '../components/ListCartItem';
import {v4 as uuidv4} from 'uuid';
import { AuthContext } from '../navigation/AuthProvider';
import { ItemContext } from '../context/ItemProvider';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

//Home
const Home = ({route, navigation}) => {
  //const [items, setItems] = useState([]);

  const {items, setItems, cartItems, setCartItems, setOrders} = useContext(ItemContext);

  const {user, logout} = useContext(AuthContext);

  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems();
      setItems(itemsFromServer);
    };

    const getOrders = async () => {
      const ordersFromServer = await fetchOrders();
      setOrders(ordersFromServer);
    };

    getItems();
    getOrders();
  }, []);

//request items
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

  const addItem = async (text, price) => {
    const res = await fetch('http://10.0.2.2:3000/send-data', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        text, 
        price
        }),
    });
    const data = await res.json();
    setItems([...items, data]);
    //console.log(price)
  };

  const addToCart = (id, text, qty, price) => {
    const isAdded = cartItems.map((item) => item.id)
    if(!isAdded.includes(id)){
      Alert.alert(`${text} added to Cart`);
      setCartItems([{id, item: text, qty, price}, ...cartItems]);
      console.log(cartItems)
    }
    else
      Alert.alert(`${text} already added to Cart`);
  };

 const fetchOrders = async () =>{
   const res = await fetch(`http://10.0.2.2:3000/order/${user.uid}`);
   const data = await res.json();

  return data;
 }

  return (
    <View style={styles.container}>
      {/* <Header/> */}
      <View style={styles.welcome}>
        <Text style={styles.user}>Welcome {user.email}</Text>
      </View>
      <TouchableOpacity 
        style={styles.btn} 
        onPress={() => navigation.navigate('Order')}>
          <Text style={styles.btnText}>
            <Icon name="shopping-bag" 
              size={20}/> My Order
          </Text>
      </TouchableOpacity>
      <AddItem addItem={addItem} />
      <View style={styles.listItemView}>
          <Text style={[styles.listItemText, {flex: 1}]}>Item</Text>
           <Text style={[styles.listItemText, {flex: 1}]}>Price</Text>
        </View>
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    backgroundColor: '#8ab6d6',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkblue',
    fontSize: 20,
    textAlign: 'center',
  },
  welcome: {
      alignItems: 'center'
  },
  user: {
      fontSize: 18
  },
  listItemView: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
 },
 listItemText: {
    fontSize: 18,
    marginRight: 4,
    marginLeft: 4
 }
});