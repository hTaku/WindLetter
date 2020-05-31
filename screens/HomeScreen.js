import React from 'react';
import { Image, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';


var { width, height, scale } = Dimensions.get('window');
export function HomeScreen({navigation}){
  return (
    <ImageBackground source={require('../assets/images/back.png')} style={ styles.container } >
      <TouchableOpacity onPress={() => navigation.navigate('Send')}>
        <Image source={require('../assets/images/send.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Read')}>
        <Image source={require('../assets/images/read.png')} />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: -100,
    alignItems: 'center',
    justifyContent: 'center',
    height: height+100,
  },
});