import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {

  const ExemploInput = () => {
    const [email2, setEmail2] = useState('');
    const [senha2, setSenha2] = useState('');
    const [nome, setNome] = useState('');

    return (
      <ScrollView>
      <View style={styles.container}>
          <Text>Cadastro</Text> 
          <Text>Nome</Text>
          <TextInput
          style={styles.input}
          placeholder="nome"
          onChangeText={setNome}
          value={nome}
        />

        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={setEmail2}
          value={email2}
        />

        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="senha"
          secureTextEntry={true}
          onChangeText={setSenha2}
          value={senha2}
        />

        <Button
          title="Cadastrar"
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