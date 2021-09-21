import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

function OpenCamera({ route, navigation }) {
  const { alertType, alertDesc, stringifiedAlertDate } = route.params
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);
  let camera = Camera

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const __sendImage = () => {
    if (capturedImage !== null){
      navigation.navigate('AlertPhoto', { alertType, alertDesc, stringifiedAlertDate, capturedImage })
    } else {
      navigation.navigate('AlertPhoto', { alertType, alertDesc, stringifiedAlertDate })
    }
  }

  const __takePicture = async () => {
    if (!camera) return
    const photo = await camera.takePictureAsync()
    console.log(photo)
    setCapturedImage(photo)
  }
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} 
      type={type}
      ref={(r) => {
      camera = r
    }}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={__takePicture}>
            <Text style={styles.text}> Photo </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={__sendImage}>
            <Text style={styles.text}> Envoyer </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    backgroundColor: '#e22a2a',
    borderRadius: 8,
    flex: 1,
    padding : 5,
    marginHorizontal: 7,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default OpenCamera