import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'
import { Icon } from 'react-native-elements'

const ListCartItem = ({cartItem, removeItem, changeQty}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={[styles.listItemText, {flex: 4}]}>{cartItem.text}</Text>
                <Text style={[styles.listItemText, {flex: 2}]}>${cartItem.price}</Text>
                <TouchableOpacity 
                    style={styles.btn} 
                    onPress={() => changeQty(cartItem.id, "decrease")}>
                        <Text style={styles.btnText}>
                         <Icon
                            name="minus"
                            type='font-awesome'
                            size={20}
                            color="blue"
                        />
                        </Text>
                </TouchableOpacity>
                <Text style={styles.listItemText}>{cartItem.qty}</Text>
                <TouchableOpacity 
                    style={styles.btn} 
                    onPress={() => changeQty(cartItem.id, "increase")}>
                        <Text>
                         <Icon
                            name="plus"
                            type='font-awesome'
                            size={20}
                            color="blue"
                        />
                        </Text>
                </TouchableOpacity>
                <Icon 
                    name="remove" 
                    size={20} 
                    type='font-awesome'
                    color="firebrick" 
                    onPress={() => removeItem(cartItem.id)}/>
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

export default ListCartItem
