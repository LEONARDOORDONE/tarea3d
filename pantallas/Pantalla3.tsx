import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

function Pantalla3({ navigation }) {
const [codigo, setCodigo] = useState('');
const handleVerificacion = () => {
navigation.navigate('Pantalla4');
  };

  return (
    <View style={styles.container}>
    <Image source={require('../imagenes/logo.png')} style={styles.Imagenfondo} />
    <View style={styles.Contenido}>
    <Text style={styles.Titulo}>Verificación de Código</Text>
    <TextInput
          style={styles.input}
          placeholder="Código"
          keyboardType="numeric"
          onChangeText={(text) => setCodigo(text)}
        />
    <TouchableOpacity style={styles.boton} onPress={handleVerificacion}>
    <Text style={styles.textoboton}>Verificar</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Imagenfondo: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
    opacity: 0.5, 
  },
  Contenido: {
    width: '80%',
    alignItems: 'center',
    marginTop: '-70%',
  },
  Titulo: {
    fontSize: 24,
    marginBottom: 20,
    color: '#0F100F', 
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff', 
  },
  boton: {
    backgroundColor: '#0F100F',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  textoboton: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Pantalla3;
