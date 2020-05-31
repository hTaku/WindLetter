import React, { useReducer } from 'react';
import { Text, View, TextInput, Button } from 'react-native';


const changeTextReducer = (_, text) => ({
  text: text.toUpperCase(),
  toolong: text.length > 10,
});

export function SendScreen({ navigation }) {
  const [name, setName] = useReducer(changeTextReducer, { text: '' });
  const [body, setBody] = useReducer(changeTextReducer, { text: '' });

  return (
    <>
      <View>
        <Text>なまえ</Text>
        <TextInput value={name.text} onChangeText={setName} />
      </View>
      <View>
        <Text>てがみ</Text>
        <TextInput value={body.text} onChangeText={setBody} multiline={true} numberOfLines={4} />
      </View>
      <View>
        <Button title="てがみをだす" onPress={() => navigation.navigate('SendMovie', {name: name, body: body})} />
      </View>
    </>
  );
};
