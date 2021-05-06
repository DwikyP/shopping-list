import React from 'react'
import { View, Text, FlatList, StyleSheet, Alert, Button, Icon, TouchableOpacity, Image } from 'react-native';

const UploadImage = ({image, takePhotoFromCamera, takePhotoFromGallery, uploadImage}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Upload Proof of Payment
            </Text>
            {image && (
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                />
            )}
            {image && (
                <TouchableOpacity 
                style={styles.btn}>
                    <Text
                    disabled={false}
                    style={[styles.text, {color: 'darkblue',}]}
                    onPress={uploadImage}>Upload Image</Text>
                </TouchableOpacity>
            )}
            <TouchableOpacity 
            style={styles.btn}>
                <Text
                disabled={false}
                style={[styles.text, {color: 'darkblue',}]}
                onPress={takePhotoFromCamera}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.btn}>
                <Text
                disabled={false}
                style={[styles.text, {color: 'darkblue',}]}
                onPress={takePhotoFromGallery}>Upload From Gallery</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    text:{
        fontSize: 16,
        margin: 2
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8ab6d6',
        height: 30,
        width: 200,
        padding: 2,
        margin: 3
    },
    image: {
        margin: 3,
        width: 300, 
        height: 400 
    }
})


export default UploadImage
