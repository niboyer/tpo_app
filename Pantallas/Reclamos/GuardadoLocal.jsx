import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Switch, Button } from 'react-native';

import Boton from '../../components/Boton';

export default function GuardadoLocal({ navigation }) {
    
    const handleInicio = () => {
        navigation.navigate('HomeVecino');
     }

    return (
      <View style={styles.container}>
        <Text style={styles.gracias}>Gracias por su cooperación.</Text>
        <Text style={styles.text}>Su reclamo ha sido guardado localmente.</Text>
        <Text style={styles.extra}>Cuando se disponga de una red wifi, se enviará el reclamo y se le otorgará el número del mismo.</Text>
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
    gracias:{
        fontSize: 28,
        color: '#000000',
        marginBottom: 5,
        fontWeight: 'bold',
    },
    text:{
        fontSize: 28,
        color: '#000000',
        marginBottom: 25,
        fontWeight: 'bold',
    },
    extra:{
        fontSize: 22,
        color: '#000000',
        marginTop: 35,
        marginBottom: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});