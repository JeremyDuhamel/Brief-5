import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

function Title() {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>SIMPLON.CITY</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    paddingBottom: 15
  },
  titleText:{
    textAlign: 'center',
    fontSize: 50,
    color: '#FFFFFF'
  }
})

export default Title