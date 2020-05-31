import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export function HomeScreen({navigation}){
  return (
    <View>
      <Button title = "手紙を出す" onPress={() => navigation.navigate('Send')} />
      <Button title = "手紙を読む" onPress={() => navigation.navigate('Read')} />
    </View>
  );
}

