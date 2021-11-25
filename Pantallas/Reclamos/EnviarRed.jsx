import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, Switch, Button } from 'react-native';

import Boton from '../../components/Boton';

export default function EnviarRed({ route, navigation }) {
    
    const { idReclamos } = route.params;
    
    const handleEnviarRed = () => {
       navigation.navigate('DevolucionNro', {idReclamos: idReclamos});
    }

    const handleGuardarLocal = () => {
        navigation.navigate('GuardadoLocal');
     }

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>No se encontró una conexión wifi para enviar el reclamo.</Text>
        <Text style={styles.text}>¿Desea enviarlo a través de la red de datos?</Text>
        <Boton text='Si, enviarlo por red de datos' onPress={handleEnviarRed}/>
        <Text style={styles.text}>Si no acepta, su reclamo será guardado localmente hasta que usted disponga de una red de datos o wifi.</Text>
        <Boton text='Guardarlo local' onPress={handleGuardarLocal}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#E0E0E0',
    },
    titulo: {
        fontSize: 26,
        color: '#000000',
        marginBottom: 40,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    text:{
        fontSize: 26,
        color: '#000000',
        marginBottom: 5,
        marginTop: 15,
    },
});