import React, {useState, useEffect, useLayoutEffect, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, Button, Icon } from 'react-native';
import 'react-native-gesture-handler';
import ListCartItem from '../components/ListCartItem';
import { AuthContext } from '../navigation/AuthProvider';
import { CartContext } from '../context/CartProvider';

const Cart = ({route, navigation}) => {
  const {cartItems, setCartItems} = useContext(CartContext);

  const removeItem = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
    console.log(cartItems)
  };

  const changeQty = (id, type) => {
    const index = cartItems.findIndex((item => item.id == id))
    const newCartItems = [...cartItems];

    if(type=="decrease"){
      if(newCartItems[index].qty > 1)
        newCartItems[index].qty -= 1
    }
    else{
      newCartItems[index].qty += 1
    }
    setCartItems(newCartItems)
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={({item}) => (
          <ListCartItem cartItem={item} removeItem={removeItem} changeQty={changeQty} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

