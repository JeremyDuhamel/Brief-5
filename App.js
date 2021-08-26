import * as React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';
import 'expo-dev-client'
import AlertIntro from './Components/AlertIntro';
import AlertWhen from './Components/AlertWhen';
import AlertWho from './Components/AlertWho';
import AlertWhere from './Components/AlertWhere';
import AlertPhoto from './Components/AlertPhoto';
import AlertEnd from './Components/AlertEnd';

const Stack = createNativeStackNavigator();
  
function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerStyle: {
            backgroundColor: '#000'
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'normal',
            color: '#000'
          },
          ...TransitionPresets.ModalTransition
        })}
      >
        <Stack.Screen name="SIMPLON.CITY" component={AlertIntro}/>
        <Stack.Screen name="AlertWhen" component={AlertWhen}/>
        <Stack.Screen name="AlertWhere" component={AlertWhere}/>
        <Stack.Screen name="AlertPhoto" component={AlertPhoto}/>
        <Stack.Screen name="AlertWho" component={AlertWho}/>
        <Stack.Screen name="AlertEnd" component={AlertEnd}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
