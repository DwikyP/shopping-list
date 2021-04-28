import React, {useState,useEffect} from 'react';
import { View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import {v4 as uuidv4} from 'uuid';


const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems()
      setItems(itemsFromServer)
    }
    getItems()
  },[])

  const deleteItem = async (_id) => {
    const res = await fetch('http://10.0.2.2:3000/delete',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          id:_id
        })
      })
      .then(res=>res.json())
      .then(deletedItem=>{
        Alert.alert(`${deletedItem.text} deleted`)
      })
      .catch(err=>{
        Alert.alert("Something went wrong")
      })
      setItems(items.filter((item) => item._id !== _id))
  }

  const fetchItems = async () =>{
    const res = await fetch('http://10.0.2.2:3000/')
    const data = await res.json()

    return data
  }

  const addItem = async (text) => {
    if(!text){
      Alert.alert(
      "Error", 
      "Please enter an item",
      [
        { text: "OK"}
      ]
      );
    }
    else{
      const res = await fetch('http://10.0.2.2:3000/send-data',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(text)
      })
      const data = await res.json()
      setItems([data, ...items])
    }
  }

  return(
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem}/>
      <FlatList data={items}
      renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
      keyExtractor={(item) => item._id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
})

export default App;