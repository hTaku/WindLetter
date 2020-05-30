import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export function HomeScreen({navigation}){
  return (
    <View>
      <Button title = "手紙を出す" onPress={() => navigation.navigate('Send')} />
    </View>
  );
}

