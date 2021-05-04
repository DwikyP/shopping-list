import React, {useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, Button, Icon } from 'react-native';
import 'react-native-gesture-handler';
import ListCartItem from '../components/ListCartItem';
import { AuthContext } from '../navigation/AuthProvider';

const Cart = ({route, navigation}) => {
  const [cartItems, setCartItems] = useState([...route.params]);
  //let items = [...route.params];

//   useEffect(() => {
//     console.log(cartItems)
//   }, [])

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerLeft: () => (
//         <HeaderBackButton
//           title="back"
//           onPress={() => navigation.navigate('Home', {data: items})} 
//         />
//       ),
//     });
//   }, [navigation])

  const removeItem = id => {
    // let array = [...cartItems]; // make a separate copy of the array
    // let index = array.findIndex(function (array) {
	//     return array.id === id;
    // });
    // if (index !== -1) {
    //   array.splice(index, 1);
    //   setCartItems(array);
    // }
    // items = cartItems
    // console.log(items)
    setCartItems(cartItems.filter(item => item.id !== id));
    console.log(cartItems)
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

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

