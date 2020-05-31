import React, { useReducer } from 'react';
import { ImageBackground, Text, View, TextInput, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';


var { width, height, scale } = Dimensions.get('window');


const changeTextReducer = (_, text) => ({
  text: text.toUpperCase(),
  toolong: text.length > 10,
});

export function SendScreen({ navigation }) {
  const [name, setName] = useReducer(changeTextReducer, { text: '' });
  const [body, setBody] = useReducer(changeTextReducer, { text: '' });

  return (
    <ImageBackground source={require('../assets/images/back.png')}  style={ styles.row }>
      <View style={ styles.flex1, styles.col }>
        <View style={ styles.flex1} >
          <Text style={styles.th}>なまえ</Text>
        </View>
        <View style={ styles.flex2 }>
          <TextInput value={name.text} onChangeText={setName} style={ styles.textbox } />
        </View>
      </View>
      <View style={ styles.flex2, styles.height }>
        <Text style={styles.th}>     てがみ</Text>
      </View>
      <View style={ styles.flex3, styles.alignTop }>
        <TextInput value={body.text} onChangeText={setBody} multiline={true} numberOfLines={20} style={styles.textarea} />
      </View>
      <View style={ styles.flex4, styles.bottom, styles.marginBottom100 }>
        <TouchableOpacity style={styles.alignCenter} onPress={() => navigation.navigate('SendMovie', {name: name, body: body})}>
          <Image source={require('../assets/images/send.png')} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

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
  alignTop: {
    justifyContent: "flex-start",
  },
  alignBottom: {
    justifyContent: "flex-end"
  },
  marginBottom100: {
    marginBottom: 100
  },
  th: {
    fontSize: 24,
    fontWeight: "bold",
  },
  height: {
    height: 24
  },
  alignCenter: {
    alignItems: 'center',
  },
  textbox: {
    borderColor: '#aaaaff',
    borderWidth: 1,
    height: 24
  },
  textarea: {
    borderColor: '#aaaaff',
    borderWidth: 1,
    height: 480,
    margin: 30,
  },
});