import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const ListItem = ({item, addToCart, deleteItem}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={[styles.listItemText, {flex: 3}]}>{item.text}</Text>
                <Button
                title="Add to Cart"
                onPress={() => addToCart(item._id, item.text, 1)}/>
                <Icon name="remove" size={20} color="firebrick" 
                onPress={() => deleteItem(item._id)}/>
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

export default ListItem
