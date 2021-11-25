import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Boton from '../../components/Boton';
import DenunciasUsuarioBar from '../../components/DenunciasUsuarioBar';
import DenunciasContraBar from '../../components/DenunciasContraBar';
import { getDenunciasByID, getDenunciasByDocumento, getDenunciasByDocumentoDenunciado } from '../../Controllers/Denuncias.controller';

export default function ListaDenuncias({ navigation }) {
    
    const [documento, setdocumento] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');
    const [dataDenuncias, setDataDenuncias] = useState([]);
    const [dataDenunciado, setDataDenunciado] = useState([]);
    //const [id, setID] = useState('');

     useEffect(()=>{
        getStorageItems();
    }, []);

    const getStorageItems = async () => {
        const documento = await loadData('documento');
        const userData = await loadData('tipoUser');
        setTipoUsuario(userData);
        setdocumento(documento);

        let rdo = await getDenunciasByDocumento(documento);
        let rdo1 = await getDenunciasByDocumentoDenunciado(documento);
        setDataDenuncias(rdo);
        setDataDenunciado(rdo1);
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
        if(tipoUsuario === 'vecino'){
            navigation.navigate('HomeVecino');
        }
        else{
            navigation.navigate('HomeInspector');
        }
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Denuncias referentes al usuario</Text>
        {/* <View style={styles.busquedas}>
            <Text style={styles.text}>ID:</Text>
            <TextInput
                    style={styles.input}
                    placeholder="ID de la denuncia"
                    onChangeText={id => setID(id)}
            />
        </View> */}
        <DenunciasUsuarioBar/>
        <FlatList
            data={dataDenuncias}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.touchable} onPress={() => {
                    navigation.navigate('DatosDenunciante', {
                        urlImagenes: item.denunciasExtendidas.length > 0 ? item.denunciasExtendidas[0].urlImagenes : '', 
                        sitioCalle: item.sitio.calle, 
                        sitioNumero: item.sitio.numero, 
                        sitioEntreCalleA: item.sitio.entreCalleA,
                        sitioEntreCalleB: item.sitio.entreCalleB,
                        sitioDescripcion: item.sitio.descripcion,
                        descripcion: item.descripcion, 
                        descripcionDenunciado: item.denunciasExtendidas[0].descripcionDenunciado,
                        estado: item.estado,
                        idDenuncias: item.idDenuncias
                        });
                }}>
                    <Text style={styles.datos}>Denuncia N°: {item.idDenuncias}</Text>
                    <Text style={styles.datos}>Descripcion Denuncia: {item.descripcion}</Text>
                    <Text style={styles.datos}>Descripcion denunciado: {item.denunciasExtendidas[0].descripcionDenunciado}</Text>
                    <Text style={styles.datos}>Estado: {item.estado}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.idDenuncias.toString()}
        />
        <DenunciasContraBar/>
        <FlatList
            data={dataDenunciado}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.touchable} onPress={() => {
                    navigation.navigate('DatosDenunciado', {
                        urlImagenes: item.denunciasExtendidas.length > 0 ? item.denunciasExtendidas[0].urlImagenes : '',
                        sitioCalle: item.sitio.calle, 
                        sitioNumero: item.sitio.numero, 
                        sitioEntreCalleA: item.sitio.entreCalleA,
                        sitioEntreCalleB: item.sitio.entreCalleB,
                        sitioDescripcion: item.sitio.descripcion,
                        descripcion: item.descripcion,
                        descripcionDenunciado: item.denunciasExtendidas[0].descripcionDenunciado,
                        idDenuncias: item.idDenuncias
                    });
                }}>
                    <Text style={styles.datos}>Denuncia N°: {item.idDenuncias}</Text>
                    <Text style={styles.datos}>Descripcion Denuncia: {item.descripcion}</Text>
                    <Text style={styles.datos}>Descripcion denunciado: {item.denunciasExtendidas[0].descripcionDenunciado}</Text>
                    <Text style={styles.datos}>Estado: {item.estado}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.idDenuncias.toString()}
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