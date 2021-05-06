import React, {useState, useEffect, useLayoutEffect, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, Button, Icon } from 'react-native';
import 'react-native-gesture-handler';
import ListCartItem from '../components/ListCartItem';
import TotalPrice from '../components/TotalPrice'
import { AuthContext } from '../navigation/AuthProvider';
import { ItemContext } from '../context/ItemProvider';

const Cart = ({route, navigation}) => {
  const {items, cartItems, setCartItems} = useContext(ItemContext);
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const sumTotal = arr =>
      arr.reduce((sum, { price }) => sum + price, 0)
    
    setTotalPrice(sumTotal(cartItems))
  }, [])

  const removeItem = id => {
    const indexCart = cartItems.findIndex((item => item.id == id))
    const itemPrice = cartItems[indexCart].price

    setTotalPrice(prevTotal => prevTotal - itemPrice)
    setCartItems(cartItems.filter(item => item.id !== id));

    console.log(cartItems)
  };

  const changeQty = (id, type) => {
    const indexCart = cartItems.findIndex((item => item.id == id))
    const indexItem = items.findIndex((item => item._id == id))
    const newCartItems = [...cartItems];
    const itemPrice = items[indexItem].price

    if(type=="decrease"){
      if(newCartItems[indexCart].qty > 1){
        newCartItems[indexCart].qty -= 1
        newCartItems[indexCart].price -= itemPrice
        setTotalPrice(prevTotal => prevTotal - itemPrice)
      }
    }
    else{
      newCartItems[indexCart].qty += 1
      newCartItems[indexCart].price += itemPrice
      setTotalPrice(prevTotal => prevTotal + itemPrice)
    }
    setCartItems(newCartItems)
  };

  return (
    <View style={styles.container}>
      <View style={styles.listItemView}>
          <Text style={[styles.listItemText, {flex: 7}]}>Item</Text>
           <Text style={[styles.listItemText, {flex: 4}]}>Price</Text>
           <Text style={[styles.listItemText, {flex: 4}]}>Quantity</Text>
        </View>
      <FlatList
        data={cartItems}
        renderItem={({item}) => (
          <ListCartItem cartItem={item} removeItem={removeItem} changeQty={changeQty} />
        )}
        keyExtractor={item => item.id}
      />
      <TotalPrice totalPrice={totalPrice} navigation={navigation}/>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
     padding: 15,
     backgroundColor: '#f8f8f8',
     borderBottomWidth: 1,
     borderColor: '#eee'
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

