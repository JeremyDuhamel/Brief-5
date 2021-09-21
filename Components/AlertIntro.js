import * as React from 'react';
import { StyleSheet, StatusBar, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Title from './Title';
import { useState } from 'react';


function AlertIntro({ navigation }) {
  const [alertType, setAlertType] = useState();
  const [alertDesc, setAlertDesc] = useState();

  return (
    <View>
      <StatusBar backgroundColor="#000"></StatusBar>
      <Title/>
      <View style={styles.subTitle}>
        <Text style={styles.subTitleText}>VOUS AVEZ QUELQUES CHOSE À NOUS SIGNALER ? DITES NOUS EN PLUS !</Text>
      </View>
      
      <View>
        <Text style={styles.formTitle}>TYPE D'ALERTE</Text>
        <TouchableOpacity style={styles.picker}>
          <Picker
            selectedValue={alertType}
            onValueChange={(itemValue, itemIndex) => 
              setAlertType(itemValue)
          }>
            <Picker.Item style={styles.formPlaceholder} label="Toucher pour séléctionner" value="Default"/>
            <Picker.Item style={styles.formText} label="Accident de la route" value="Accident" />
            <Picker.Item style={styles.formText} label="Travaux" value="Travaux"/>
          </Picker>
        </TouchableOpacity>
      </View>
      
      <View style={{marginVertical: 30}}>
        <Text style={styles.formTitle}>DÉCRIVEZ L'ALERTE</Text>
        <View style={styles.picker}>
        <TextInput
          multiline
          style={styles.formTextInput}
          onChangeText={setAlertDesc}
          value={alertDesc}
          placeholder="Toucher pour écrire."
        />
        </View>
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('AlertWhen', { alertType, alertDesc })}>
        
        <Text style={styles.buttonText}>Suivant</Text>
      </TouchableOpacity>
    </View>
    
  )
  
}
const styles = StyleSheet.create({
  subTitle:{
    padding: 18
  },
  subTitleText:{
    textAlign: 'center',
    fontSize: 25,
    color: '#FFFFFF'
  },
  picker:{
    marginHorizontal: 22,
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  formPlaceholder:{
    fontSize: 20,
    color: "#a7a7a7",
  },
  formTitle:{
    color: 'white',
    fontSize: 23,
    marginHorizontal: 23,
    marginVertical: 5
  },
  formText:{
    fontSize: 20

  },
  formTextInput:{
    height: 150,
    margin: 2,
    paddingHorizontal: 8,
    fontSize: 20,
    textAlignVertical: 'top'
  },
  button:{
    backgroundColor: '#e22a2a',
    borderRadius: 8,
    marginHorizontal: 50,
    padding: 5
  },
  buttonText:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 32
  }
})
export default AlertIntro