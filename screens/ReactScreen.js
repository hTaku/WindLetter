import React from 'react';
import { Image, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

var { width, height, scale } = Dimensions.get('window');

export function ReactScreen({ route, navigation }){
    return (
      <ImageBackground source={require('../assets/images/back.png')} style={ styles.container }>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/images/15-1.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/images/15-2.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/images/15-3.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/images/15-4.png')} />
        </TouchableOpacity>
      </ImageBackground>
    );
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: -20,
    height: height+20,
  }
});