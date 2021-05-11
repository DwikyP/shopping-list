import React, {useState, useContext, useEffect} from 'react'
import { View, Text, FlatList, StyleSheet, Alert, Button } from 'react-native'
import UploadImage from '../components/UploadImage'
import ImagePicker from 'react-native-image-crop-picker';
import { ItemContext } from '../context/ItemProvider';

const Payment = ({route, navigation}) => {
    const {orders, setOrders} = useContext(ItemContext)
    const [image, setImage] = useState(null)
    const order = route.params

    // useEffect(() => {
    //     console.log(order)
    // }, [])

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            setImage(image.path)
        });
    }

    const takePhotoFromGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            setImage(image.path)
        });
    }

    const uploadImage = () => {
        const indexOrder = orders.findIndex((item => item._id == order._id))
        const newOrders = [...orders]

        newOrders[indexOrder].status = "PROCESSING"
        setOrders(newOrders)

        Alert.alert(`Image Uploaded`)

        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <UploadImage image={image} takePhotoFromCamera={takePhotoFromCamera} takePhotoFromGallery={takePhotoFromGallery} uploadImage={uploadImage}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        justifyContent: 'center',
    },
})

export default Payment
