import React, {useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';

import ReclamoBar from '../components/ReclamoBar';
import DenunciasBar from '../components/DenunciasBar';
import PromocionBar from '../components/PromocionBar';
import MenuOpcion from '../components/MenuOpcion';
import BotonSalir from '../components/BotonSalir';

export default function MainScreen({ navigation }) {
    
    const handleGenerarComercio = () => {
        navigation.navigate('PublicacionComercio');
    }
    const handleGenerarServicio = () => {
        navigation.navigate('PublicacionServicio');
    }
    const handleSalir = () => {
        navigation.navigate('MainScreen');
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenido Vecino X</Text>
        <ReclamoBar/>
        <MenuOpcion text='Generar Reclamo' onPress={handleSalir}/>
        <MenuOpcion text='Consultar Reclamo' onPress={handleSalir}/>
        <DenunciasBar/>
        <MenuOpcion text='Generar Denuncia' onPress={handleSalir}/>
        <MenuOpcion text='Consultar Denuncia' onPress={handleSalir}/>
        <PromocionBar/>
        <MenuOpcion text='Generar publicación de comercio' onPress={handleGenerarComercio}/>
        <MenuOpcion text='Generar servicio profesional' onPress={handleGenerarServicio}/>
        <MenuOpcion text='Consulta de promociones' onPress={handleSalir}/>
        <BotonSalir text='Salir' onPress={handleSalir}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#E0E0E0',
    },
    text:{
        fontSize: 18,
        color: '#000000',
        marginTop: 20,
        marginLeft: 10,
        marginBottom: 20,
    },

});