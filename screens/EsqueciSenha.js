import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {

  const ExemploInput = () => {
    const [email3, setEmail3] = useState('');

    return (
      <ScrollView>
      <View style={styles.container}>

        <Text>Esqueceu a senha</Text>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={setEmail3}
          value={email3} 
        />


        <Button
          title="enviar"
          color="#00b83d"
        />

        <StatusBar style="auto" />
      </View>
      </ScrollView>
    );
  };

  return <ExemploInput />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '80%',
    marginBottom: 10,
  },
  tinyLogo: {
    borderRadius: 1000,
    width: 200,
    height: 200,
    marginBottom: 20,
  },
   div: {
    marginTop: 300
  }
});