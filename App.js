import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigators from './Navigator/Navigators';
import Toast from 'react-native-toast-message';


function App() {
  return (
    <NavigationContainer>
      <Navigators/>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}

export default App;