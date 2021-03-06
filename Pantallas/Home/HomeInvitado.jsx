import React, {useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';

import PromocionBar from '../../components/PromocionBar';
import MenuOpcion from '../../components/MenuOpcion';
import BotonSalir from '../../components/BotonSalir';

export default function MainScreen({ navigation }) {
    
    const handleConsultarPromociones = () => {
        navigation.navigate('ListaComercios');
    }
    const handleSalir = () => {
        navigation.navigate('ListaComercios');
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenido</Text>
        <PromocionBar/>
        <MenuOpcion text='Consulta de promociones' onPress={handleConsultarPromociones}/>
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