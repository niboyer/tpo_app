import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Boton from '../../components/Boton';
import DenunciasUsuarioBar from '../../components/DenunciasUsuarioBar';
import DenunciasContraBar from '../../components/DenunciasContraBar';
import { getDenunciasByID, getDenunciasByDocumento, getDenunciasByDocumentoDenunciado } from '../../Controllers/Denuncias.controller';

export default function ListaDenuncias({ navigation }) {
    
    const [documento, setdocumento] = useState('');

    const [dataDenuncias, setDataDenuncias] = useState([]);
    const [dataDenunciado, setDataDenunciado] = useState([]);
    const [id, setID] = useState('');

     useEffect(()=>{
        getStorageItems();
        async function componentDidMount(){
            let rdo = await getDenunciasByDocumento(documento);
            let rdo1 = await getDenunciasByDocumentoDenunciado('123456789');
            setDataDenuncias(rdo);
            setDataDenunciado(rdo1);
            console.log(rdo)
            console.log(rdo1)
        }
        componentDidMount();
    }, []);

    const getStorageItems = async () => {
        const userData = await loadData('documento');
        setdocumento(userData);
    }

    const storeData = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value);
        } catch (e) {
          console.log(e.message)
        }
      }
  
      const loadData = async (key) => {
        const recuperado = await AsyncStorage.getItem(key);
        return recuperado;
      }

      const clearAll = async () => {
        try {
          await AsyncStorage.clear()
        } catch(error) {
          console.log(error);
        }
      }
    
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
            data={dataDenuncias}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.touchable} onPress={() => {navigation.navigate('DatosDenunciante', {urlImagenes: item.urlImagenes ? item.urlImagenes : '', descripcion: item.descripcion, descripcionDenunciado: item.descripcionDenunciado, idSitio: item.idSitio,estado: item.estado});}}>
                    <Text style={styles.datos}>{item.descripcion}</Text>
                    <Text style={styles.datos}>{item.descripcionDenunciado}</Text>
                    <Text style={styles.datos}>{item.idSitio}</Text>
                    <Text style={styles.datos}>{item.estado}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.idDenuncias}
        />
        <DenunciasContraBar/>
        <FlatList
            data={dataDenunciado}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.touchable} onPress={() => {navigation.navigate('DatosDenunciado', {urlImagenes: item.urlImagenes ? item.urlImagenes : '', descripcion: item.descripcion, descripcionDenunciado: item.descripcionDenunciado, idSitio: item.idSitio});}}>
                    <Text style={styles.datos}>{item.descripcion}</Text>
                    <Text style={styles.datos}>{item.descripcionDenunciado}</Text>
                    <Text style={styles.datos}>{item.idSitio}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.idDenuncias}
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