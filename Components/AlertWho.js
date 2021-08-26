import * as React from 'react'
import { Text, TextInput, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import Title from './Title';
import { useState } from 'react';

function AlertWho({ route, navigation }) {
  const { alertType, alertDesc, alertDate } = route.params
  const [name, setName] = useState();
  const [firstName, setFirstName] = useState();
  const [adressStreet, setAdressStreet] = useState();
  const [adressNumber, setAdressNumber] = useState();
  const [adressPostal, setAdressPostal] = useState();
  const [adressTown, setAdressTown] = useState();
  const [tel, setTel] = useState();
  const [email, setEmail] = useState();
  
  return(
    <ScrollView>
      <Title/>
      <View style={styles.subTitle}>
        <Text style={styles.subTitleText}>POURRIEZ VOUS NOUS EN DIRE PLUS SUR VOUS ?</Text>
      </View>

      <View>
        <Text style={styles.formTitle}>NOM</Text>
        <View style={styles.picker}>
        <TextInput
          style={styles.formTextInput}
          onChangeText={setName}
          value={name}
          placeholder="Nom"
          autoCompleteType='name'
        />
        </View>
      </View>

      <View>
        <Text style={styles.formTitle}>PRÉNOM</Text>
        <View style={styles.picker}>
        <TextInput
          style={styles.formTextInput}
          onChangeText={setFirstName}
          value={firstName}
          placeholder="Prénom"
        />
        </View>
      </View>

      <View>
        <Text style={styles.formTitle}>ADRESSE - VOIE</Text>
        <View style={styles.picker}>
        <TextInput
          style={styles.formTextInput}
          onChangeText={setAdressStreet}
          value={adressStreet}
          placeholder="Adresse - Voie"
          autoCompleteType='street-address'
        />
        </View>
      </View>

      <View>
        <Text style={styles.formTitle}>ADRESSE - N°</Text>
        <View style={styles.picker}>
        <TextInput
          style={styles.formTextInput}
          onChangeText={setAdressNumber}
          value={adressNumber}
          placeholder="Adresse - N°"
          keyboardType= 'numeric'
        />
        </View>
      </View>

      <View>
        <Text style={styles.formTitle}>ADRESSE - CODE POSTAL</Text>
        <View style={styles.picker}>
        <TextInput
          style={styles.formTextInput}
          onChangeText={setAdressPostal}
          value={adressPostal}
          placeholder="Adresse - Code Postal"
          autoCompleteType='postal-code'
          keyboardType= 'numeric'
        />
        </View>
      </View>

      <View>
        <Text style={styles.formTitle}>ADRESSE - VILLE</Text>
        <View style={styles.picker}>
        <TextInput
          style={styles.formTextInput}
          onChangeText={setAdressTown}
          value={adressTown}
          placeholder="Adresse - Ville"
        />
        </View>
      </View>

      <View>
        <Text style={styles.formTitle}>TÉL</Text>
        <View style={styles.picker}>
        <TextInput
          style={styles.formTextInput}
          onChangeText={setTel}
          value={tel}
          placeholder="Tél"
          autoCompleteType='tel'
          keyboardType= 'phone-pad'
        />
        </View>
      </View>

      <View>
        <Text style={styles.formTitle}>MAIL</Text>
        <View style={styles.picker}>
        <TextInput
          style={styles.formTextInput}
          onChangeText={setEmail}
          value={email}
          placeholder="Mail"
          autoCompleteType='email'
        />
        </View>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('AlertEnd' , { alertType, alertDesc, alertDate, name, firstName, adressStreet, adressNumber, adressPostal, adressTown, tel, email })}>
        
        <Text style={styles.buttonText}>Suivant</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  subTitle:{
    padding: 18,
    marginBottom: 10,
  },
  subTitleText:{
    textAlign: 'center',
    fontSize: 25,
    color: '#FFFFFF'
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
  picker:{
    marginHorizontal: 22,
    marginBottom: 15,
    padding: 10,
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
  formTextInput:{
    margin: 2,
    paddingHorizontal: 8,
    fontSize: 20,
  }
})

export default AlertWho