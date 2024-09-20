import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import images from '../theme/Images';

const CustomButton = ({onPress, borderColor,gradientColors,tag,Pic}) => {
  return (
    <TouchableOpacity style={{
      borderRadius: 30,
      overflow: 'hidden', 
      height: 50, 
      width: 120,borderWidth:1,borderColor:borderColor ,marginHorizontal:5
    }} onPress={onPress}>
      <LinearGradient start={{x:0,y:0.9}}  colors={gradientColors} style={styles.gradient}>
        <View style={styles.iconWrapper}>
          <Image source={Pic} style={styles.icon} />
        </View>
        <Text style={styles.text}>{tag}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  iconWrapper: {
    marginRight: 10
  },
  icon: {
    height: 15,
    width: 15
  },
  text: {
    fontSize: 14,
    color: '#333', // Set text color to contrast with gradient
  },
});

export default CustomButton;
