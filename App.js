import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import EsqueciSenha from './screens/EsqueciSenha';

export default function App() {
  const [tela, setTela] = useState('Login');

  return (
    <View style={styles.container}>
      {tela === 'Login' && <Login mudarTela={setTela} />}
      {tela === 'Cadastro' && <Cadastro mudarTela={setTela} />}
      {tela === 'EsqueciSenha' && <EsqueciSenha mudarTela={setTela} />}

      <Button title="Login" onPress={() => setTela('Login')} />
      <Button title="Cadastro" onPress={() => setTela('Cadastro')} />
      <Button title="Esqueci minha senha" onPress={() => setTela('EsqueciSenha')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
