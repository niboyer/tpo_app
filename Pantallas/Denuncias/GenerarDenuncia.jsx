import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Switch, Button } from 'react-native';

import Boton from '../../components/Boton';

export default function GenerarDenuncia({ navigation }) {
    
    const handleDenComercio= () => {
       navigation.navigate('GenerarDenunciaComercio');
    }
    const handleDenVecino = () => {
      navigation.navigate('GenerarDenunciaVecino');
    }


    return (
      <View style={styles.container}>
        <Text style={styles.text}>Elija que tipo de denuncia quiere realizar</Text>
        <Boton text='Denuncia contra Comercio' onPress={handleDenComercio}/>
        <Boton text='Denuncia contra vecino' onPress={handleDenVecino}/>
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
        color: '#000000'
    },
    boton:{
        margin: 40,
    },
});