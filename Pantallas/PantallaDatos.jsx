import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Switch, Button } from 'react-native';

import Boton from '../components/Boton';

export default function PantallaDatos({ navigation }) {
    
    const handleInicio = () => {
       navigation.navigate('MainScreen');
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sus datos fueron enviados para revision</Text>
        <Text style={styles.text}>Si están correctos, en el transcurso de los siguientes días recibirá un email para crear tu clave de acceso.</Text>
        <Boton text='Volver al inicio' onPress={handleInicio}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#263238',
    },
    text:{
        fontSize: 34,
        color: '#FFFFFF'
    },
});