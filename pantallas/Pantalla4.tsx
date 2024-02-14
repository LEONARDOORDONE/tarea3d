import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert  } from 'react-native';

function Pantalla4({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleIrAPantallainicio = () => {
    if (nombre && correo && telefono) {
      navigation.navigate('Pantalla5', {
    nombre,
    correo,
    telefono,
      });
    } else {
      Alert.alert('complete todos los campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingrese sus datos</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        onChangeText={(text) => setNombre(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        onChangeText={(text) => setCorreo(text)}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Número Telefónico"
        onChangeText={(text) => setTelefono(text)}
        keyboardType="phone-pad"
      />

      
      <TouchableOpacity
        style={styles.button}
        onPress={handleIrAPantallainicio}
      >
        <Text style={styles.buttonText}>Ir a pantalla principal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: '-70%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color:'#1C2833',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#0F100F',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#0F100F',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    color: '#3F8912',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Pantalla4;
