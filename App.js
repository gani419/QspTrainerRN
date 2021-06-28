import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import QRCode from "./screens/QRCode";
import ClassSelection from "./screens/ClassSelection";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="QRCode" component={QRCode} />
      <Stack.Screen name="ClassSelection" component={ClassSelection} />
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