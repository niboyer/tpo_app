import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Switch, Button } from 'react-native';

import Boton from '../../components/Boton';

export default function DevolucionNro({ navigation }) {
    
    const handleInicio = () => {
        navigation.navigate('HomeVecino');
     }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Gracias por su cooperación.</Text>
        <Text style={styles.numeroReclamo}>El número de su reclamo es X.</Text>
        <Text style={styles.extra}>Puede ver el estado de su reclamo a través de la aplicación y realizar un seguimiento del mismo con el número provisto.</Text>
        <Boton text='Volver al inicio' onPress={handleInicio}/>
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
    text:{
        fontSize: 28,
        color: '#000000',
        marginBottom: 65,
        fontWeight: 'bold',
    },
    numeroReclamo: {
        fontSize: 24,
        color: '#000000',
        marginBottom: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    extra: {
        fontSize: 22,
        color: '#000000'
    },
});