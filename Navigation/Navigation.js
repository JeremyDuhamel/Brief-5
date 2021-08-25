import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator({
  Home: {
    screen: 'Home',
    navigationOptions:{
      title: 'Home'
    }
  }
});


export default NavigationContainer(Stack)
