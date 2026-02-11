import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function App() {

  const ExemploInput = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://i1.sndcdn.com/artworks-k3rY9KdgRnU67j5B-HlCzdg-t1080x1080.jpg',
          }}
        />

        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={setEmail}
          value={email}
        />

        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="senha"
          secureTextEntry={true}
          onChangeText={setSenha}
          value={senha}
        />

        <Button
          title="Logar"
          color="#00b83d"
        />

        <Button
          title="Cadastrar-se"
          color="#00b83d"
        />

        <Text>Esqueci minha senha</Text>

        <StatusBar style="auto" />
      </View>
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
  }
});
