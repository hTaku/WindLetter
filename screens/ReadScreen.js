import React from 'react';
import { ImageBackground, Text, View, StyleSheet, Image, Alert, Dimensions, TouchableOpacity } from 'react-native';

var { width, height, scale } = Dimensions.get('window');


export function ReadScreen({ navigation }){
  const message = {name: 'A', body: 'コロナつらい。。。'};
  if('' === message){
    return (
      <View>
        <Text>メッセージはありません。</Text>
      </View>
    );
  } else {
    return (
      <ImageBackground source={require('../assets/images/back.png')} style={styles.row}>
        <View style={styles.flex1}>
          <Text style={ styles.fontSize36Bold }>{message.name}さんからの</Text>
          <Text style={ styles.fontSize36Bold }>メッセージです。</Text>
        </View>
        <View style={styles.flex2}>
          <Text style={styles.fontSize24Bold}>手紙</Text>
          <Text style={styles.fontSize24}>{message.body}</Text>
        </View>
        <View style={styles.flex3}>
          <TouchableOpacity onPress={() => navigation.navigate('React')} style={styles.alignCenter} >
            <Image source={require('../assets/images/react.png')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
 }

const styles = StyleSheet.create({
  row: {
    flex: 1,
    margin: -20,
    height: height+20,
  },
  col: {
    flex: 1,
    flexDirection: 'row'
  },
  flex1: {
    flex: 1,
    margin: 30
  },
  flex2: {
    flex: 2,
    margin: 30
  },
  flex3: {
    flex: 3,
    margin: 30
  },
  flex4: {
    flex: 4,
    margin: 30
  },
  marginLeft30: {
    marginLeft: 30
  },
  height24: {
    height: 24,
  },
  height480: {
    height: 240,
  },
  alignTop: {
    justifyContent: "flex-start",
  },
  alignCenter: {
    alignItems: 'center',
  },
  fontSize36Bold: {
    fontSize: 36,
    fontWeight: "bold"
  },
  fontSize24Bold: {
    fontSize: 24,
    fontWeight: "bold"
  },
  fontSize24: {
    fontSize: 24,
    fontStyle: "italic"
  }
});