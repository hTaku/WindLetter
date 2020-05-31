import React from 'react';
import { Text, View } from 'react-native';

export function SendMovieScreen({ route, navigation }){
    return (
      <View>
        <Text>{route.params.name.text}</Text>
        <Text>{route.params.body.text}</Text>
      </View>
    );
 }