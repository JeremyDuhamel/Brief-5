import * as React from 'react'
import Title from './Title';
import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';


function AlertWhere({ navigation }) {
  return(
    <View>
      <Title/>
      <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('AlertWho')}>
          
          <Text style={styles.buttonText}>Suivant</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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
})

export default AlertWhere