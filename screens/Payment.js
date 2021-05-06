import React, {useState} from 'react'
import { View, Text, FlatList, StyleSheet, Alert, Button, Icon } from 'react-native'
import UploadImage from '../components/UploadImage'
import ImagePicker from 'react-native-image-crop-picker';

const Payment = () => {
    const [image, setImage] = useState(null)

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
       Alert.alert(`Image Uploaded`);
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
