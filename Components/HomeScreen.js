import * as React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import AlertIntro from './AlertIntro';

function HomeScreen() {
  return (
    <View style={styles.defaultView}>
       
       <AlertIntro/>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#1D1D1D'
  }
})
export default HomeScreen