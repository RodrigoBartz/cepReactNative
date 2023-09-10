import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [cep, setCep] = useState(null)
  const [logradouro, setLogradouro] = useState(null)
  const [complemento, setComplemento] = useState(null)


  return (
    <View style={styles.container}>
      <View>
        <Text>TESTE JSON CEP</Text>
      </View>

      <View>
        <Text>CEP: </Text>
        <TextInput value={cep} onChangeText={setCep}
        placeholder="12345678"></TextInput>

        <Text>Logradouro: </Text>
        <TextInput value={logradouro} onChangeText={setLogradouro}
        placeholder="praça Luz"></TextInput>

        <Text>Complemento: </Text>
        <TextInput value={complemento} onChangeText={setComplemento}
        placeholder="casa"></TextInput>

        <Button title="gerar json"></Button>
      </View>

      <View>
        <Text>Resultado: </Text>
        <Text>"cep": "{cep}", </Text>
        <Text>"logradouro": "{logradouro}",</Text>
        <Text>"complemento": "{complemento}"</Text>
      </View>
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
