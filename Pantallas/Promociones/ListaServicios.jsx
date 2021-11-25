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
            let rdo = await getPublicacionesByTipo('Servicio');
            setData(rdo);
        }
        componentDidMount();
    }, []);
    
    const handleComercios = (key) => {
        navigation.navigate('ListaComercios');
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
        <BotonPublicaciones text='Ver comercios' onPress={handleComercios}/>
        <FlatList
            data={data}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.touchable} onPress={() => {navigation.navigate('ServicioDatos', {urlImagenes: item.urlImagenes ? item.urlImagenes : '', nombre: item.nombre, horario: item.horarios, rubro: item.rubros, telefono: item.telefono, mail: item.email, descripcion: item.descripcion});}}>
                    <Text style={styles.datos}>{item.name}</Text>
                    <Text style={styles.datos}>Nombre y Apellido: {item.nombre}</Text>
                    <Text style={styles.datos}>Horarios: {item.horarios}</Text>
                    <Text style={styles.datos}>Rubro: {item.rubros}</Text>
                    <Text style={styles.datos}>Teléfono: {item.telefono}</Text>
                    <Text style={styles.datos}>Email: {item.email}</Text>
                    <Text style={styles.datos}>Descripción: {item.descripcion}</Text>
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