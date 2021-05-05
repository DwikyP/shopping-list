import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const ListItem = ({item, addToCart, deleteItem}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text 
                style={[styles.listItemText, {flex: 3}]}>
                    {item.text}
                </Text>
                <Text style={styles.listItemText}>
                    ${item.price}
                </Text>
                <TouchableOpacity 
                    style={styles.btn} 
                    onPress={() =>addToCart(item._id, item.text, 1, item.price)}>
                        <Text style={styles.btnText}>
                            Add To Cart
                        </Text>
                </TouchableOpacity>
                {/* <Button
                style={styles.listItemChild}
                title="Add to Cart"
                onPress={() => addToCart(item._id, item.text, 1)}/> */}
                <Icon 
                style={styles.listItemChild}
                name="remove" size={20} 
                color="firebrick" 
                onPress={() => deleteItem(item._id)}/>
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
  btnText: {
    color: 'darkblue',
    fontSize: 18,
    textAlign: 'center',
  },
 listItem: {
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee'
 },
 listItemView: {
    flexDirection: 'row',
    alignItems: 'center'
 },
 listItemText: {
    fontSize: 18,
    marginRight: 4,
    marginLeft: 4
 },
 listItemChild:{
    marginRight: 4,
    marginLeft: 4
 }
})

export default ListItem
