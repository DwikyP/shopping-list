import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const ListCartItem = ({cartItem, removeItem, changeQty}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={[styles.listItemText, {flex: 3}]}>{cartItem.text}</Text>
                <Button
                title="--"
                onPress={() => changeQty(cartItem.id, "decrease")}/>
                <Text style={styles.listItemText}>qty: {cartItem.qty}</Text>
                <Button
                title="+"
                onPress={() => changeQty(cartItem.id, "increase")}/>
                <Icon name="remove" size={20} color="firebrick" 
                onPress={() => removeItem(cartItem.id)}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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

export default ListCartItem
