import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "./screens/SplashScreen"
import LoginScreen from "./screens/LoginScreen"
import Home from "./screens/Home";
import QRCode from "./screens/QRCode";
import ClassSelection from "./screens/ClassSelection";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="QRCode" component={QRCode} options={{headerShown:false}}/>
      <Stack.Screen name="ClassSelection" component={ClassSelection} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
    <MyStack/>
    </NavigationContainer>
  );
}