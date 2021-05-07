import React from 'react'
import { View, Text, FlatList, StyleSheet, Alert, Button } from 'react-native'
import 'react-native-gesture-handler'
import ListOrderDetail from '../components/ListOrderDetail'
import OrderDetailDesc from '../components/OrderDetailDesc'

const OrderDetail = ({route, navigation}) => {
    const order = route.params

    return (
        <View style={styles.container}>
            <View style={styles.listItemView}>
                <Text style={[styles.listItemText, {flex: 4}]}>Item</Text>
                <Text style={[styles.listItemText, {flex: 1}]}>Price</Text>
                <Text style={styles.listItemText}>Quantity</Text>
                </View>
            <FlatList
                data={order.items}
                renderItem={({item}) => (
                 <ListOrderDetail orderDetailItem={item} />
                )}
                keyExtractor={item => item.id}
            />
            <OrderDetailDesc order={order} navigation={navigation}/>
        </View>
    )
}
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
})

export default OrderDetail
