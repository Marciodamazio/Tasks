import React from 'react';
import {NavigationContainer} from " @react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Newtask from "./src/pages/Newtask"
import Task from "./src/pages/Task"
import Details from "./src/pages/Details"

const  Stack =createStackNavigator()
export default function Task() {
 return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Task">
        <Stack.Scream
          name="Task"
          component={Task}
          options={{
            headerTintColor:"#f92e6a"
          }}
        
        />
        <Stack.Scream
          name="new task"
          component={Newtask}
          options={{
            headerTintColor:"#f92e6a"
          }}
        
        />
        <Stack.Scream
          name="Detais"
          component={Details}
          options={{
            headerTintColor:"#f92e6a"
          }}
        
        />
       
    </Stack.Navigator>
  </NavigationContainer>
 );
}