import React, { useState } from 'react';
import { View, 
    Button, 
    Text, 
    TextInput, 
    Image, 
    StyleSheet } from 'react-native';


function Pantalla2({ navigation, route }) {
    const params = route.params;
    const handleOnPress = ()=> {
    navigation.navigate('Pantalla3');
    };

  return (
    <View style={styles.contenedor}>
    <Image source={require('../imagenes/logo.png')}style={styles.imagen} />
    <Text style={styles.titulo}>Ingresa con tu correo</Text>
    <TextInput
    style={styles.input}
    placeholder="Correo"
      />
    <TextInput
    style={styles.input}
    placeholder="Contraseña"
    secureTextEntry   
      />
    <Button title="Continuar" onPress={handleOnPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    padding: 25,
  },

  titulo: {
    fontSize: 16,
    marginBottom: 10,
    color: '#0F100F',
  },

  input: {
    height: 50,
    width: '100%',
    borderColor: '#0F100F',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },

  imagen: {
    width: 85, 
    height: 85, 
    marginBottom: 20,
  },
 
});

export default Pantalla2;
