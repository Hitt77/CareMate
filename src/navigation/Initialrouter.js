import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import Pet from '../screen/Pet';


const Stack = createNativeStackNavigator();

export default function Initialrouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name='BottomTab' component={BottomTab}/>
       {/* <Stack.Screen name='Drawer' component={Drawer}/> */}
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
