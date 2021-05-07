import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'

const TotalPrice = ({cartItems, totalPrice, doCheckout}) => {

    return (
        <View
        style={styles.container}>
            <Text
            style={styles.text}>Total: ${totalPrice}</Text>
            <TouchableOpacity 
            disabled={cartItems.length > 0 ? false : true}
            style={styles.btn}
            onPress={doCheckout}>
                <Text
                style={[styles.text, {color: 'darkblue',}]}
                >Checkout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        backgroundColor: 'white'
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 4,
        marginLeft: 4
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8ab6d6',
        height: 60,
        padding: 9,
    },
})

export default TotalPrice
