import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput, CheckBox} from 'react-native';

import Boton from '../../components/Boton';
import { getReclamosByDocumento, getReclamosByDesperfectoAndDocumento } from '../../Controllers/Reclamos.controller';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';

export default function ListaReclamos({ navigation }) {
    
    const [documento, setDocumento] = useState('');
    const [data, setData] = useState([]);
    const [selectedDesperfecto, setSelectedDesperfecto] = useState(0);
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
        console.log(data)
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
            if(selectedDesperfecto == '0'){
                let rdo = await getReclamosByDocumento(documento);
                setData(rdo);
            } else {
                let rdo = await getReclamosByDesperfectoAndDocumento(selectedDesperfecto, documento);
                setData(rdo);
            }
        }
        componentDidMount();
    }

    const handleCheckGeneral = () => {
        setPropio(false);
        setGeneral(true);
        async function componentDidMount(){
            if(selectedDesperfecto == '0'){
                let rdo = await getReclamosByDocumento('');
                setData(rdo);
            } else {
                let rdo = await getReclamosByDesperfectoAndDocumento(selectedDesperfecto, '');
                setData(rdo);
            }
        }
        componentDidMount();
    }

    const handleValueChange = (itemValue) => {
        setSelectedDesperfecto(itemValue);
        
        var value;
        if(itemValue =='0')
            value = ''
        else   
            value = itemValue

        if(isPropio){
            async function componentDidMount(){
                let rdo = await getReclamosByDesperfectoAndDocumento(value, documento);
                setData(rdo);
            }
            componentDidMount();
        } else {
            async function componentDidMount(){
                let rdo = await getReclamosByDesperfectoAndDocumento(value, '');
                setData(rdo);
            }
            componentDidMount();
        }
    }

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Reclamos existentes</Text>

        <View style={styles.datosFiltro}>
            <Text style={styles.subtitulo}>FILTROS</Text>
            <View style={styles.subdatos}>
                <View style={styles.select}>     
                        <Text style={{flex: 0.2, textAlign: 'center', alignSelf:'center', fontSize: 16}}>Tipo:</Text>
                        <Picker
                            style={{
                                flex: 1,
                                color:'black',
                            }}
                            selectedValue={selectedDesperfecto}
                            onValueChange={(itemValue, itemIndex) =>
                            handleValueChange(itemValue)
                            }>
                            <Picker.Item label='Todos' value='0' />
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
        </View>        
        <FlatList
            data={data}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.touchable} onPress={() => {
                        navigation.navigate('ReclamoIndividual', {
                            urlImagenes: item.reclamosExtendidas.length > 0 ? item.reclamosExtendidas[0].urlImagenes : '', 
                            sitioCalle: item.sitio.calle, 
                            sitioNumero: item.sitio.numero, 
                            sitioEntreCalleA: item.sitio.entreCalleA,
                            sitioEntreCalleB: item.sitio.entreCalleB,
                            sitioDescripcion: item.sitio.descripcion,
                            desperfectoDescripcion: item.desperfecto.descripcion, 
                            descripcion: item.descripcion, 
                            estado: item.estado,
                            idReclamo: item.idReclamo
                        });
                }}>
                    <Text style={styles.datos}>Sitio: {item.sitio.descripcion}</Text>
                    <Text style={styles.datos}>Tipo: {item.desperfecto.descripcion}</Text>
                    <Text style={styles.datos}>Reclamo N°: {item.idReclamo}</Text>
                    <Text style={styles.datos}>Reclamo N° Asociado: {item.IdReclamoUnificado ? item.IdReclamoUnificado : "N/A"}</Text>
                    <Text style={styles.datos}>Estado: {item.estado}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.idReclamo.toString()}
        />
        <Boton text='Volver al inicio' onPress={handleVolver}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#E0E0E0',
        padding: 10,
    },
    titulo: {
        fontSize: 26,
        color: '#FFFFFF',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 10,
        padding: 10, 
        backgroundColor: '#002171', 
        borderWidth:1,
        borderColor: 'white',
        borderRadius: 10,
        textAlign: 'center',
    },
    datosFiltro:{
        borderWidth: 1,
        borderColor: 'black',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        borderColor:'black',
        marginBottom:10,
    },
    subtitulo: {
        fontSize: 18,
        marginBottom: 0,
        marginTop: 0,
        padding: 5, 
        color: '#FFFFFF',
        fontStyle: 'italic',
        fontWeight: 'bold',
        backgroundColor: '#5472D3', 
        borderWidth:0,
        borderColor: 'white',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        textAlign: 'left',
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
    subdatos: {
        padding: 10,
    },
    select: {
        flexDirection: "row",
        height: 40,
        padding: 0,
        borderRadius: 5, 
        borderWidth: 2, 
        borderColor: '#bdc3c7', 
        overflow: 'hidden',
        backgroundColor: '#C5CAE9'
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