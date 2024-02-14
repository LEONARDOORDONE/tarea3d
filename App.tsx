import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pantalla1 from './pantallas/Pantalla1';
import Pantalla2 from './pantallas/Pantalla2';
import Pantalla3 from './pantallas/Pantalla3';
import Pantalla4 from './pantallas/Pantalla4';
import Pantalla5 from './pantallas/Pantalla5';




const Stack = createNativeStackNavigator();
const App = () => {
  return( 
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen 
    name='Pantalla1' 
    component={Pantalla1} 
    options={{
    title: 'Bienvenido a starbucks',
      }}
      />

      <Stack.Screen 
      name='Pantalla2'
      component={Pantalla2}
      options= {({route}) =>{
      return {
      title: 'registrate'
      };
      }}
      />

      <Stack.Screen 
      name='Pantalla3'
      component={Pantalla3}
      options= {({route}) =>{
      return {
      title: 'verifica'
      };
      }}
      />

      <Stack.Screen 
      name='Pantalla4'
      component={Pantalla4}
      options= {({route}) =>{
      return {
      title: 'datos'
        };
      }}
      />

    <Stack.Screen 
      name='Pantalla5'
      component={Pantalla5}
      options= {({route}) =>{
      return {
      title: 'menu'
          
        };
      }}
      />
    </Stack.Navigator>
    </NavigationContainer> 
  );
};

export default App;
