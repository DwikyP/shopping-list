import React, {useState, useEffect, useLayoutEffect, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, Button, Icon } from 'react-native';
import 'react-native-gesture-handler';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';
import ListCartItem from '../components/ListCartItem';
import {v4 as uuidv4} from 'uuid';
import { AuthContext } from '../navigation/AuthProvider';

//Home
const Home = ({route, navigation}) => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const {user, logout} = useContext(AuthContext)

  // useEffect(() => {
  //   if(route.params?.data){
  //   setCartItems(...route.params.data)
  //   console.log(route.params?.data);
  //   }
  // }, [route.params?.data]);

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
      <View style={styles.welcome}>
        <Text style={styles.user}>Welcome {user.email}</Text>
      </View>
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
      alignItems: 'center'
  },
  user: {
      fontSize: 18
  }
});