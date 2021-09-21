import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Title from './Title';
import { StatusBar } from 'expo-status-bar';

function AlertPhoto({ route, navigation }) {
  const { alertType, alertDesc, stringifiedAlertDate, capturedImage } = route.params
  const [selectedImage, setSelectedImage] = useState(null)
  
  /** Galerie */
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("La permission d'accéder à la galerie est requise !");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ uri: pickerResult.uri });
  }

  let imageToSend = 'https://i.imgur.com/TkIrScD.png';
  if (selectedImage !== null) {
    imageToSend = selectedImage.uri;
  }
  if (capturedImage !== undefined){
    imageToSend = capturedImage.uri;
  } 
  return (
    <View>
      <Title/>
      <View style={styles.subTitle}>
        <Text style={styles.subTitleText}>VOULEZ-VOUS AJOUTER UNE PHOTO ?</Text>
      </View>
      <View style={styles.buttonPhoto}>
        <TouchableOpacity onPress={openImagePickerAsync}>
          <Text style={styles.buttonPhotoText}>DEPUIS LA GALERIE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonPhoto}>
        <TouchableOpacity
        onPress={() => navigation.navigate('OpenCamera', { alertType, alertDesc, stringifiedAlertDate, imageToSend })}>
          <Text style={styles.buttonPhotoText}>DEPUIS LA CAMÉRA</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image source={{uri: imageToSend}} style={styles.logo} />
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('AlertWho', { alertType, alertDesc, stringifiedAlertDate, imageToSend })}>
        
        <Text style={styles.buttonText}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  subTitle:{
    padding: 18,
    marginHorizontal: 50,
    marginBottom: 20
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  subTitleText:{
    textAlign: 'center',
    fontSize: 25,
    color: '#FFFFFF'
  },
  button:{
    backgroundColor: '#e22a2a',
    borderRadius: 8,
    marginVertical: 40,
    marginHorizontal: 50,
    padding: 5
  },
  buttonText:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 32
  },
  buttonPhoto:{
    marginHorizontal: 22,
    marginVertical: 10,
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#2a95e2'
  },
  buttonPhotoText:{
    fontSize: 20,
    color: 'white'
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  container: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    alignItems: 'center',
    width: 305,
    height: 159,
    marginBottom: 20,
  },
});

export default AlertPhoto