import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const AddItem = ({title, addItem}) => {
    const [text, setText] = useState('');
    const [price, setPrice] = useState('')

    const onChange = (textValue) => setText(textValue);
    const onChangePrice = (priceValue) => setPrice(priceValue)

    const onAdd = () => {
      if(!text || !price){
        Alert.alert(
          "Error", 
          "Please enter an item and the price",
          [
            { text: "OK"}
          ]
        );
        return
      }
      addItem(text, price)
    }

    return (
        <View>
            <View 
            style={styles.container}>
              <Text style={styles.text}>Item: </Text>
              <TextInput 
              placeholder="Add Item..." 
              style={styles.input}
              onChangeText={onChange}/>
            </View>
            <View 
            style={styles.container}>
              <Text style={styles.text}>Price: $</Text>
              <TextInput 
              placeholder="Price" 
              style={styles.input}
              onChangeText={onChangePrice}
              keyboardType="numeric"/>
            </View>
            <TouchableOpacity 
              style={styles.btn} 
              onPress={() => onAdd()}>
                <Text style={styles.btnText}>
                  <Icon name="plus" 
                    size={20}/> Add Item
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
    marginRight: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    fontSize: 18,
    height: 40,
    padding: 5,
    margin: 5,
  },
  btn: {
    backgroundColor: '#8ab6d6',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkblue',
    fontSize: 20,
    textAlign: 'center',
  },
   text: {
    fontSize: 18,
 },
})

export default AddItem
