import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const ListCartItem = ({cartItem, removeItem}) => {
    const [qty, setQty] = useState(cartItem.qty)

    const changeQty = (type) => {
        if(type=="decrease"){
            if(qty>0)
                setQty(prevQty => prevQty - 1)
        }
        else{
            setQty(prevQty => prevQty + 1)
        }
    }

    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={[styles.listItemText, {flex: 3}]}>{cartItem.text}</Text>
                <Button
                title="--"
                onPress={() => changeQty("decrease")}/>
                <Text style={styles.listItemText}>qty: {qty}</Text>
                <Button
                title="+"
                onPress={() => changeQty("increase")}/>
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
