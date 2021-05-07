import React, {useState, useEffect, useContext} from 'react'
import { View, Text, FlatList, StyleSheet, Alert, Button } from 'react-native'
import 'react-native-gesture-handler'
import ListOrder from '../components/ListOrder'
import { ItemContext } from '../context/ItemProvider';

const Order = ({navigation}) => {
    const {orders} = useContext(ItemContext)
    
    // useEffect(() => {
    //     console.log(orders)
    // }, [])

    return (
        <View style={styles.container}>
            <FlatList
            data={orders}
            renderItem={({item}) => (
                <ListOrder order={item} navigation={navigation}/>
            )}
            keyExtractor={item => item.id}
        />
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Order
