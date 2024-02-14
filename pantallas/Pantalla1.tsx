import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, StyleSheet, TouchableOpacity,ScrollView, View } from "react-native";


const Pantalla1 = ({navigation}) =>{
    const handlePress = () =>{
    navigation.navigate('Pantalla2');};
    return(
    <View style={styles.Contenedor}>
    <SafeAreaView>
    <ScrollView>
    <TouchableOpacity onPress={handlePress}>
    <Image
    style={styles.Fondo}
    source={require('../imagenes/starbucks.jpg')}
    resizeMode="contain"/>
    </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
    </View>)
}

const styles = StyleSheet.create({
    Contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    Fondo: {
        width: 500,
        height: 700,
        alignSelf: 'center',
    },
});

export default Pantalla1;