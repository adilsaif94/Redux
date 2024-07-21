import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../Screens/Home';
import Shopping from '../Screens/Shopping';
import MyCart from '../Screens/MyCart';


const Stack = createNativeStackNavigator();

const Navigators = () => {
  return (


    <Stack.Navigator screenOptions={{ headerShown: false, }}>
     <Stack.Screen name="Shopping" component={Shopping} />
     <Stack.Screen name="Mycart" component={MyCart} />
     {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>


  );
};


export default Navigators

