import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Pet from '../screen/Pet';
import images from '../theme/Images';
import Drawer from './Drawer';
import DrawerNavigator from './Drawer';

const Tab = createBottomTabNavigator();

function PlayScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Play Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Screen</Text>
    </View>
  );
}
function Search() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Search</Text>
    </View>
  );
}

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  height: 30,
                  width: 100,
                  backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FFE7EA',
                  borderRadius: 20,
                }}>
                <Image
                  source={images.home}
                  style={{
                    width: 18,
                    height: 18,
                    right: 15,
                    tintColor: '#CF76DD',
                  }}
                />
              </View>
            ) : (
              <Image
                source={images.home}
                style={{width: 20, height: 20, tintColor: 'black'}}
              />
            ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: '#000',
                position: 'absolute',
                bottom: 15,
                right: 20,
              }}>
              {focused && 'Pet'}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  height: 30,
                  width: 100,
                  backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FFE7EA',
                  borderRadius: 20,
                }}>
                <Image
                  source={images.search}
                  style={{
                    width: 18,
                    height: 18,
                    right: 20,
                    tintColor: '#CF76DD',
                  }}
                />
              </View>
            ) : (
              <Image
                source={images.search}
                style={{width: 20, height: 20, tintColor: 'black'}}
              />
            ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: '#000',
                position: 'absolute',
                bottom: 15,
                right: 15,
              }}>
              {focused && 'Search'}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Play"
        component={PlayScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  height: 30,
                  width: 100,
                  backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FFE7EA',
                  borderRadius: 20,
                }}>
                <Image
                  source={images.play}
                  style={{
                    width: 18,
                    height: 18,
                    right: 15,
                    tintColor: '#CF76DD',
                  }}
                />
              </View>
            ) : (
              <Image
                source={images.play}
                style={{width: 20, height: 20, tintColor: 'black'}}
              />
            ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: '#000',
                position: 'absolute',
                bottom: 15,
                right: 20,
              }}>
              {focused && 'Play'}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  height: 30,
                  width: 100,
                  backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FFE7EA',
                  borderRadius: 20,
                }}>
                <Image
                  source={images.profile}
                  style={{
                    width: 18,
                    height: 18,
                    right: 20,
                    tintColor: '#CF76DD',
                  }}
                />
              </View>
            ) : (
              <Image
                source={images.profile}
                style={{width: 20, height: 20, tintColor: 'black'}}
              />
            ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: '#000',
                position: 'absolute',
                bottom: 15,
                right: 20,
              }}>
              {focused && 'Profile'}
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
