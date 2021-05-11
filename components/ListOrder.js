import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'
import { Icon } from 'react-native-elements'

const ListOrder = ({order, navigation}) => {
    return (
        <TouchableOpacity
        style={styles.listItem}
        onPress={() => navigation.navigate('OrderDetail', order)}>
            <View
            style={styles.listItemView}>
                <View>
                    <Text style={styles.listItemText}>Order {order._id}</Text>
                    <Text style={styles.listItemText}>Status: {order.status}</Text>
                </View>
                <Text style={styles.listItemText}>Total: ${order.totalPrice}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
     padding: 10,
     backgroundColor: '#f8f8f8',
     borderBottomWidth: 1,
     borderColor: '#eee'
 },
 listItemView: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
 },
 listItemText: {
    fontSize: 14,
    marginRight: 4,
    marginLeft: 4
 }
});

export default ListOrder
