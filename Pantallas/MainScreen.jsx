import React, {useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';

import Boton from '../components/Boton';

export default function MainScreen({ navigation }) {

    const handleIngresar = () => {
       navigation.navigate('ElegirLogin');
    }
    const handleCrear = () => {
      navigation.navigate('DatosCrear');
    }
    const handleInvitado = () => {
      navigation.navigate('ListaComercios');
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>¿Tiene cuenta ya creada?</Text>
        <Boton text='Ingresar' onPress={handleIngresar}/>
        <Text style={styles.text}>¿Desea crear su nueva cuenta?</Text>
        <Boton text='Crear cuenta' onPress={handleCrear}/>
        <Boton text='Continuar como invitado' onPress={handleInvitado}/>
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
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold'
    },
    buttonText: {
      fontSize: 18,
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
    },
});