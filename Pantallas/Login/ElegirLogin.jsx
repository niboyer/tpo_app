import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Switch, Button } from 'react-native';

import Boton from '../../components/Boton';

export default function ElegirLogin({ navigation }) {
    
    const handleVecino= () => {
       navigation.navigate('VerificarDNI');
    }
    const handleInspector = () => {
      navigation.navigate('LoginInspector');
    }


    return (
      <View style={styles.container}>
        <Text style={styles.text}>Elija como quiere ingresar</Text>
        <Boton text='Ingresar como vecino' onPress={handleVecino}/>
        <Boton text='Ingresar como inspector' onPress={handleInspector}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#E0E0E0'
    },
    text:{
        fontSize: 18,
        marginBottom: 50,
        color: '#000000',
        fontWeight: 'bold'
    },
    boton:{
        margin: 20,
    },
});