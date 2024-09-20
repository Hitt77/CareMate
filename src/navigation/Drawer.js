// App.js
import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screen/Home';
import Pet from '../screen/Pet';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Profile')} title="Go to Profile" />
    </View>
  );
}


function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();


export default function DrawerNavigator() {
  return (
    
      <Drawer.Navigator  initialRouteName="Home" screenOptions={{headerShown:false,drawerStyle:{backgroundColor:'#FFBDBA'}}}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Pet Care" component={Pet} />
      </Drawer.Navigator>
    
  );
}
