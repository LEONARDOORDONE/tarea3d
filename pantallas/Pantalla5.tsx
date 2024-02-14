import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Pantalla5 ({ route }) {
  const { nombre, correo, numero,} = route.params;

  return (
    <View style={styles.contenedor}>    
      <View style={styles.informacion}>
        <Text style={styles.usuario}>{nombre}</Text>
        <Text style={styles.email}>{correo}</Text>
        <Text style={styles.userCell}>{numero}</Text>  
      </View> 
     <View style={styles.additionalText}>
        <Text>Saved Address</Text>
        <Text>Smart Login</Text>
        <Text>Language</Text>
        <Text>FAQ</Text>
        <Text>Help</Text>
        <Text>Privacy Policy</Text>
        <Text>Terms of Service</Text>
        <Text>Contact Us</Text>
      </View>
      <Text style={styles.logOut}>Log Out</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#E74C3C', 
    padding: 15,
  },
  informacion: {
    alignItems: 'center',
    marginTop: 30,
  },
  usuario: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 14,
    color: '#555',
  },
  userCell: {
    fontSize: 22,
    color: '#555',
  },
  additionalText: {
    fontSize: 25,
    marginTop: 30,
  },
  logOut: {
    marginTop: 'auto', 
    fontSize: 25,
    fontWeight: 'bold',
     
  },
});

export default Pantalla5;