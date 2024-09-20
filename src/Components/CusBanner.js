import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import images from '../theme/Images';

export default function CusBanner() {
  return (
    <View
      style={{
        height: 120,
        width: '90%',
        backgroundColor: '#FFE7EA',
        borderRadius: 30,
        overflow: 'hidden',marginVertical:5
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{
            height: 60,
            width: 60,
            marginTop: 60,
            resizeMode: 'contain',
            transform: [{rotate: '180deg'}],
          }}
          source={images.sidepanel}></Image>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',

            height: '100%',
            width: '90%',
            right: 40,
          }}>
          <Image
            style={{height: 60, width: 60, resizeMode: 'contain'}}
            source={images.providers}></Image>
          <View style={{left: 5}}>
            <Text style={{fontSize: 15, color: '#000', fontWeight: '600'}}>
              Rohit Singhania
            </Text>
            <Text style={{fontSize: 12, marginTop: 5, color: '#000'}}>
              Lorem ipsum dolor sit amet consectetur. Eget {'\n'}commodo ipsum.
            </Text>
            <TouchableOpacity
              style={{
                height: 20,
                width: 80,
                backgroundColor: '#CF76DD',
                top: 10,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 10, color: '#fff'}}>Know More</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          style={{height: 70, width: 70, right: 80}}
          source={images.sidepanel}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
