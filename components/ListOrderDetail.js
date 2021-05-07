import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'
import { Icon } from 'react-native-elements'

const ListOrderDetail = ({orderDetailItem}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={[styles.listItemText, {flex: 4}]}>{orderDetailItem.text}</Text>
                <Text style={[styles.listItemText, {flex: 2}]}>${orderDetailItem.price}</Text>
                <Text style={styles.listItemText}>{orderDetailItem.qty}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
btn: {
    backgroundColor: '#8ab6d6',
    padding: 9,
    margin: 5,
  },
 listItem: {
     padding: 15,
     backgroundColor: '#f8f8f8',
     borderBottomWidth: 1,
     borderColor: '#eee'
 },
 listItemView: {
     flexDirection: 'row',
     alignItems: 'center'
 },
 listItemText: {
     fontSize: 18
 }
})

export default ListOrderDetail