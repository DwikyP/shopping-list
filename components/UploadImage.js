import React from 'react'
import { View, Text, FlatList, StyleSheet, Alert, Button, Icon, TouchableOpacity, Image } from 'react-native';

const UploadImage = ({image, takePhotoFromCamera, takePhotoFromGallery, uploadImage}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, {fontWeight:'bold'}]}>
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
                style={styles.btn}
                onPress={uploadImage}>
                    <Text
                    style={[styles.text, {color: 'darkblue',}]}
                    >Upload Image</Text>
                </TouchableOpacity>
            )}
            <TouchableOpacity 
            style={styles.btn}
            onPress={takePhotoFromCamera}>
                <Text
                style={[styles.text, {color: 'darkblue',}]}
                >Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.btn}
            onPress={takePhotoFromGallery}>
                <Text
                style={[styles.text, {color: 'darkblue',}]}
                >Upload From Gallery</Text>
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
