import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';

import Boton from '../../components/Boton';
import DenunciasUsuarioBar from '../../components/DenunciasUsuarioBar';
import DenunciasContraBar from '../../components/DenunciasContraBar';
//import { getPublicacionesByTipo } from '../../Controllers/Publicaciones.controller';

export default function ListaDenuncias({ navigation }) {
    
    const [data, setData] = useState([]);
    const [id, setID] = useState('');

   /*  useEffect(()=>{
        async function componentDidMount(){
            let rdo = await getPublicacionesByTipo('Comercio');
            setData(rdo);
            console.log(rdo)
        }
        componentDidMount();
    }, []); */

    const handleVolver = () => {
        navigation.goBack()
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Denuncias referentes al usuario</Text>
        <View style={styles.busquedas}>
            <Text style={styles.text}>ID:</Text>
            <TextInput
                    style={styles.input}
                    placeholder="ID de la denuncia"
                    onChangeText={id => setID(id)}
            />
        </View>
        <DenunciasUsuarioBar/>
        <FlatList
            data={data}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.touchable} onPress={() => {navigation.navigate('ComercioDatos', {urlImagenes: item.urlImagenes ? item.urlImagenes : '', nombre: item.nombre, descripcion: item.descripcion, direccion: item.direccion, telefono: item.telefono, mail: item.email});}}>
                    <Text style={styles.datos}>{item.nombre}</Text>
                    <Text style={styles.datos}>{item.descripcion}</Text>
                    <Text style={styles.datos}>{item.direccion}</Text>
                    <Text style={styles.datos}>{item.telefono}</Text>
                    <Text style={styles.datos}>{item.email}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.idPublicacion}
        />
        <DenunciasContraBar/>
        <FlatList
            data={data}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.touchable} onPress={() => {navigation.navigate('ComercioDatos', {urlImagenes: item.urlImagenes ? item.urlImagenes : '', nombre: item.nombre, descripcion: item.descripcion, direccion: item.direccion, telefono: item.telefono, mail: item.email});}}>
                    <Text style={styles.datos}>{item.nombre}</Text>
                    <Text style={styles.datos}>{item.descripcion}</Text>
                    <Text style={styles.datos}>{item.direccion}</Text>
                    <Text style={styles.datos}>{item.telefono}</Text>
                    <Text style={styles.datos}>{item.email}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.idPublicacion}
        />
        <Boton text='Volver al inicio' onPress={handleVolver}/>
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
    busquedas:{
        flexDirection:'row',
        alignItems:'center'
    },
    input: {
        width: '10%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'#FFFFFF',
        textAlign: 'center',
        color: 'black',
        alignSelf: 'center',
    },
});