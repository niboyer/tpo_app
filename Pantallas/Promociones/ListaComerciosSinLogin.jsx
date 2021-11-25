import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'

import Boton from '../../components/Boton';
import BotonPublicaciones from '../../components/BotonPublicaciones';
import { getPublicacionesByTipo } from '../../Controllers/Publicaciones.controller';

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ListaComercios({ navigation }) {
    
    const [data, setData] = useState([]);
    const [tipoUsuario, setTipoUsuario] = useState('');

    useEffect(()=>{
        getStorageItems();
    }, []);

    const getStorageItems = async () => {
        const userData = await loadData('tipoUser');
        setTipoUsuario(userData);

        let rdo = await getPublicacionesByTipo('Comercio');
        setData(rdo);
      }

      const loadData = async (key) => {
        const recuperado = await AsyncStorage.getItem(key);
        return recuperado;
      }

    const handleServicios = (key) => {
        navigation.navigate('ListaServiciosSinLogin');
    }

    const handleSalir = () => {
        if(tipoUsuario === 'vecino'){
            navigation.navigate('HomeVecino');
        }
        else{
            navigation.navigate('HomeInspector');
        }
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Consulta de promociones</Text>
        <BotonPublicaciones text='Ver servicios' onPress={handleServicios}/>
        <FlatList
            data={data}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.touchable} onPress={() => {navigation.navigate('ComercioDatos', {urlImagenes: item.urlImagenes ? item.urlImagenes : '', nombre: item.nombre, descripcion: item.descripcion, direccion: item.direccion, telefono: item.telefono, mail: item.email});}}>
                    <Text style={styles.datos}>Nombre: {item.nombre}</Text>
                    <Text style={styles.datos}>Descripcion: {item.descripcion}</Text>
                    <Text style={styles.datos}>Direccion: {item.direccion}</Text>
                    <Text style={styles.datos}>Telefono: {item.telefono}</Text>
                    <Text style={styles.datos}>Email: {item.email}</Text>
                    <Text style={styles.datos}>Estado: {item.estado}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.idPublicacion.toString()}
        />
        <Boton text='Volver al inicio' onPress={handleSalir}/>
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
    datos:{
        fontSize: 14,
        color: '#000000',
        backgroundColor: '#C5CAE9',
        marginLeft: 10,
    },
    touchable:{
        borderColor: '#000000',
        marginBottom: 4,
    },
});