import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'

import Boton from '../../components/Boton';
import BotonPublicaciones from '../../components/BotonPublicaciones';
import { getPublicacionesByTipo } from '../../Controllers/Publicaciones.controller';

export default function ListaComercios({ navigation }) {
    
    const [data, setData] = useState([]);

    useEffect(()=>{
        async function componentDidMount(){
            let rdo = await getPublicacionesByTipo('Comercio');
            setData(rdo);
            console.log(rdo)
        }
        componentDidMount();
    }, []);

    const handleServicios = (key) => {
        navigation.navigate('ListaServicios');
    }

    const handleSalir = () => {
        navigation.goBack()
    }

    return (
      <View style={styles.container}>
        <View>
            <Icon
                raised
                name='person-circle'
                type='ionicon'
                color='#000000'
                onPress={() => navigation.navigate('MainScreen')}
            />
        </View>
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
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.idPublicacion.toString()}
        />
        {/*<Boton text='Volver al inicio' onPress={handleSalir}/>*/}
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