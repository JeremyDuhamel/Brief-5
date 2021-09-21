import React, { useState, useEffect } from 'react';
import Title from './Title';
import emailjs from 'emailjs-com';
import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function AlertEnd({route, navigation}) {
  const { alertType, alertDesc, stringifiedAlertDate, name, firstName, adressStreet, adressNumber, adressPostal, adressTown, tel, email, imageToSend } = route.params
  const sendEmail = () => {

    let templateParams = {
      from_name: 'Maire',
      alertType : JSON.stringify(alertType),
      alertDesc : JSON.stringify(alertDesc),
      stringifiedAlertDate,
      name,
      firstName,
      adressStreet,
      adressNumber,
      adressPostal,
      adressTown,
      tel,
      email,
      imageToSend
    };
    emailjs.send('service_w9510md', 'template_u41fy3p', templateParams, 'user_3xHmAk6H4N8alXap3fPAj')
      Alert.alert(
        "Confirmation",
        "Alerte Envoyée. Merci de votre collaboration !",
      );
  }

  return(
    <View>
      <StatusBar backgroundColor="#000"></StatusBar>
      <Title/>
      <TouchableOpacity
      style={styles.button}
      onPress={sendEmail}>
        <Text style={styles.buttonText}>Envoyer</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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
})

export default AlertEnd