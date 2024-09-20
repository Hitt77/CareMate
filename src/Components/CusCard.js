import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';

import images from '../theme/Images';

export default function CusCard({Pic,tag,landScape}) {

  return (
    <View style={{}}>
        {landScape ?
    <TouchableOpacity style={{height: 200, width: 170,backgroundColor:'#FFE7EA',borderRadius:30,overflow:'hidden',marginHorizontal:10}}>
      <Image style={{height:70,width:70}} source={images.rond1}></Image>
      <Image style={{height:120,width:120,left:49,bottom:25}} source={Pic}></Image>
      <Text style={{bottom:25,left:40,color:'#000',fontWeight:'600',fontSize:16}}>{tag}</Text>
      <Image style={{height:50,width:50,left:130,bottom:35,transform:[{rotate:'180deg'}]}} source={images.rond1}></Image>
    </TouchableOpacity>
    :
    <TouchableOpacity style={{height: 150, width: 180,backgroundColor:'#FFE7EA',borderRadius:30,overflow:'hidden',top:25}}>
      <Image style={{height:50,width:50,left:150,transform:[{rotate:'90deg'}]}} source={images.rond1}></Image>
      <Image style={{height:170,width:170,bottom:80,resizeMode:'contain'}} source={Pic}></Image>
      <Text style={{bottom:110,left:40,color:'#000',fontWeight:'600',fontSize:16}}>{tag}</Text>
      <Image style={{height:50,width:50,bottom:120,right:15,transform:[{rotate:'240deg'}]}} source={images.rond1}></Image>
    </TouchableOpacity>}
    </View>
  );
}

const styles = StyleSheet.create({});
