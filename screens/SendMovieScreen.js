import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

export function SendMovieScreen({ route, navigation }){
    return (
      <SafeAreaView style={ styles.container }>
        <Text>{route.params.name.text}</Text>
        <Text>{route.params.body.text}</Text>
      </SafeAreaView>
    );
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});