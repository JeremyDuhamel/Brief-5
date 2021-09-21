import * as React from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, TextInput, Modal} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker'
import Title from './Title';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

function AlertWhen({ route, navigation }) {
  const { alertType, alertDesc } = route.params
  const [alertDate, setAlertDate] = useState(new Date())
  let stringifiedAlertDate = JSON.stringify(alertDate)
  return (
    <View>
      <StatusBar backgroundColor="#000"></StatusBar>
      <Title/>
      <View style={styles.subTitle}>
        <Text style={styles.subTitleText}>QUAND CELA S’EST-IL DÉROULÉ ?</Text>
      </View>
      
      <View>
        <Text style={styles.formTitle}>ENTREZ LA DATE</Text>
        <View style={styles.modalView}>
          <DatePicker style={styles.dateTimePicker} date={alertDate} mode="datetime" onDateChange={setAlertDate} androidVariant="nativeAndroid"/>
        </View>
      </View>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('AlertPhoto', { alertType, alertDesc, stringifiedAlertDate })}>
        
        <Text style={styles.buttonText}>Suivant</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  subTitle:{
    padding: 18,
    marginBottom: 40
  },
  subTitleText:{
    textAlign: 'center',
    fontSize: 25,
    color: '#FFFFFF'
  },
  picker:{
    marginHorizontal: 22,
    marginBottom: 40,
    padding: 20,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  formTitle:{
    color: 'white',
    fontSize: 23,
    marginHorizontal: 23,
    marginVertical: 5
  },
  formText:{
    fontSize: 20,
    textAlign: 'center',
    color: '#000'
  },
  dateTimePicker:{
    backgroundColor: 'white',
    borderRadius: 8
  },
  button:{
    backgroundColor: '#e22a2a',
    borderRadius: 8,
    marginTop: 20,
    marginHorizontal: 50,
    padding: 5,   
  },
  buttonText:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 32
  },
  modalView: {
    marginHorizontal: 22,
    marginBottom: 30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    alignContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
})
export default AlertWhen