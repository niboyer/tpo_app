import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput, CheckBox} from 'react-native';

import Boton from '../../components/Boton';
import { getReclamosByDocumento, getReclamosByTipo } from '../../Controllers/Reclamos.controller';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';

export default function ListaReclamos({ navigation }) {
    
    const [documento, setDocumento] = useState('');
    const [data, setData] = useState([]);
    const [selectedDesperfecto, setSelectedDesperfecto] = useState();
    const [tipo, setTipo] = useState('');
    const [isPropio, setPropio] = useState(false);
    const [isGeneral, setGeneral] = useState(true);
    const [desperfectos, setDesperfectos] = useState([]);

   useEffect(()=>{
    getStorageItems();
        async function componentDidMount(){
            let rdo = await getReclamosByDocumento('');
            setData(rdo);
        }
        componentDidMount();
    }, []);

    const getStorageItems = async () => {
        const documento = await loadData('documento');
        setDocumento(documento);

        const desperfectos = await listarDesperfectos();
        setDesperfectos(desperfectos)
    }

    const listarDesperfectos = async () => 
    {
      let url = 'http://192.168.42.1:8080/api/desperfectos';
      try {
          var myHeaders = new Headers();
          myHeaders.append('pragma', 'no-cache');
          myHeaders.append('cache-control', 'no-cache');

          var requestOptions = {
              method: 'GET',
              mode: "cors",
              headers: myHeaders,
          };
          let response = await fetch(url, requestOptions);
          let data = await response.json();
          return data.listarDesperfectos;
      }
      catch (error) {
          console.log("Error", error.message);
      };
    }

    const loadData = async (key) => {
        const recuperado = await AsyncStorage.getItem(key);
        return recuperado;
      }

    const handleVolver = () => {
        navigation.goBack()
    }

    const handleCheckPropio = () => {
        setPropio(true);
        setGeneral(false);
        async function componentDidMount(){
            let rdo = await getReclamosByDocumento(documento);
            setData(rdo);
        }
        componentDidMount();
    }

    const handleCheckGeneral = () => {
        setPropio(false);
        setGeneral(true);
        async function componentDidMount(){
            let rdo = await getReclamosByDocumento('');
            setData(rdo);
        }
        componentDidMount();
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Reclamos existentes en el municipio</Text>
            <View style={{
                borderWidth: 2, 
                borderColor: '#bdc3c7',
                margin: 10,
                borderRadius: 10,
                padding: 7, 
            }}>
                <Text style={{
                    fontSize: 15,
                    color: '#000000',
                    marginLeft: 5,
                    marginBottom: 5,
                }}>FILTROS</Text>

                <View style={{
                    flexDirection: "row",
                    height: 40,
                    padding: 0,
                    borderRadius: 10, 
                    borderWidth: 2, 
                    borderColor: '#bdc3c7', 
                    overflow: 'hidden',
                    backgroundColor: '#C5CAE9'
                }}
                >     
                    <Text style={{flex: 0.2, textAlign: 'center', alignSelf:'center'}}>Tipo:</Text>
                    <Picker
                        style={{
                            flex: 1,
                            color:'black',
                        }}
                        selectedValue={selectedDesperfecto}
                        onValueChange={(itemValue, itemIndex) =>
                        setSelectedDesperfecto(itemValue)
                        }>
                        <Picker.Item label='Seleccione una opcion...' value='0' />
                        {desperfectos.map(function(v, index){
                        return (<Picker.Item label={v.descripcion} value={v.idDesperfecto} key={v.idDesperfecto}/>)
                        })}
                    </Picker>
                </View>
                <View style={styles.busquedas}>            
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isPropio}
                            onValueChange={handleCheckPropio}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}>Propio</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={isGeneral}
                            onValueChange={handleCheckGeneral}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}>General</Text>
                    </View>
                </View>
            </View>        
        <FlatList
            data={data}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.touchable} onPress={() => {
                        navigation.navigate('ReclamoIndividual', {
                            urlImagenes: item.urlImagenes ? item.urlImagenes : '', 
                            direccion1: item.direccion1, 
                            direccion2: item.direccion2, 
                            tipo: item.tipo, 
                            descripcion: item.descripcion, 
                            estado: item.estado
                        });
                }}>
                    <Text style={styles.datos}>Sitio: {item.sitio.descripcion}</Text>
                    <Text style={styles.datos}>Tipo: {item.desperfecto.descripcion}</Text>
                    <Text style={styles.datos}>Reclamo N°: {item.idReclamo}</Text>
                    <Text style={styles.datos}>Reclamo N° Asociado: {item.IdReclamoUnificado ? item.IdReclamoUnificado : "N/A"}</Text>
                    <Text style={styles.datos}>Estado: {item.estado}</Text>
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
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
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
        alignItems:'center',
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
        marginRight: 40
    },
    checkboxContainer: {
        flexDirection: "row",
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
        color:'black',
        fontWeight: 'bold'
      },pickerStyles:{
        width:'100%',
        color:'white',
      },
});