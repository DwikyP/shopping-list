import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'

const OrderDetailDesc = ({order, navigation}) => {
    return (
        <View
        style={styles.container}>
        <   View>
                <Text
                style={styles.text}>Total: ${order.totalPrice}</Text>
                <Text style={styles.text}>Status: {order.status}</Text>
            </View>
            <TouchableOpacity 
            disabled={order.status=="WAITING FOR PAYMENT" ? false : true}
            style={styles.btn}
            onPress={() => navigation.navigate("Payment", order)}
            >
                <Text
                style={[styles.text, {color: 'darkblue',}]}
                >{order.status=="WAITING FOR PAYMENT" ? "Upload Payment" : "Paid"}</Text>
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
        fontSize: 16,
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

export default OrderDetailDesc
