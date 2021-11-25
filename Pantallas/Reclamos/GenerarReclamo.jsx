import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, CheckBox, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';

import {Picker} from '@react-native-picker/picker';

import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Boton from '../../components/Boton';
import {createReclamo} from '../../Controllers/Reclamos.controller';
import { useNetInfo } from '@react-native-community/netinfo';

export default function GenerarReclamo({ navigation }) {

    const [selectedSitio, setSelectedSitio] = useState();
    const [selectedDesperfecto, setSelectedDesperfecto] = useState();
    const [sitios, setSitios] = useState([]);
    const [desperfectos, setDesperfectos] = useState([]);

    const netInfo = useNetInfo();

    const [documento, setDocumento] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const [fileNames, setFileNames] = useState(null);
    const [files, setFiles] = useState(null);
    
    useEffect(() => {
      getStorageItems();
    }, []);

    const getStorageItems = async () => {
      const documento = await loadData('documento');
      setDocumento(documento);

      const sitios = await listarSitios();
      setSitios(sitios)

      const desperfectos = await listarDesperfectos();
      setDesperfectos(desperfectos)
    }

    const listarSitios = async () => 
    {
      let url = 'http://192.168.42.1:8080/api/sitios';
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
          return data.listarSitios;
      }
      catch (error) {
          console.log("Error", error.message);
      };
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
   
    const handleCrearReclamo = async function () {

      if(selectedSitio=="0" && selectedDesperfecto=="0") {
        Alert.alert('Aviso', "Debe Completar Sitio y Desperfecto", [{text: 'Aceptar'}]);
      } else if (selectedDesperfecto=="0"){
        Alert.alert('Aviso', "Debe Completar Desperfecto", [{text: 'Aceptar'}]);
      } else if (selectedSitio=="0") {
        Alert.alert('Aviso', "Debe Completar Sitio", [{text: 'Aceptar'}]);
      } else {
        let datos = {
          idSitio: selectedSitio,
          idDesperfecto: selectedDesperfecto,
          descripcion: descripcion,
          nombreImagenes: fileNames,
          archivoImagenes: files,
          documento: documento
        }

        let getRespuesta = await createReclamo(datos);
        if(getRespuesta.rdo === 200){
          if(netInfo.isWifiEnabled){
            navigation.navigate('DevolucionNro',{
              idReclamos: getRespuesta.data.createdReclamo.idReclamo,
            });
          }
          else if(netInfo.isConnected){
            navigation.navigate('EnviarRed',{
              idReclamos: getRespuesta.data.createdReclamo.idReclamo,
            });
          }
          else{
            Alert.alert('Error', 'No se encontró conexión a internet para continuar', [{text: 'Aceptar'}]);
          }
        } else {
          Alert.alert('Error', getRespuesta.mensaje, [{text: 'Aceptar'}]);
        }
      }
    }

    let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }
  
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      console.log(pickerResult.uri);
      console.log(files)
      if (!pickerResult.cancelled) {
        setFiles(pickerResult.uri);

        var n = pickerResult.uri.lastIndexOf('/');
        var result = pickerResult.uri.substring(n + 1);

        setFileNames(result)
      }
    }
    

    return (
      <View style={styles.container}>        
        <ScrollView style={styles.scrollView}>

          <Text style={styles.text2}>Datos de su reclamo</Text>
          <Text style={styles.text}>Eliga un sitio:</Text>
          <View style={{
              flexDirection: "row",
              height: 40,
              padding: 0,
              borderRadius: 10, 
              borderWidth: 2, 
              borderColor: '#bdc3c7', 
              overflow: 'hidden',
              backgroundColor: 'grey'
            }}
          >            
            <Picker
              style={styles.pickerStyles}
              selectedValue={selectedSitio}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedSitio(itemValue)                
              }>
              <Picker.Item label='Seleccione una opcion...' value='0' />
              {sitios.map(function(v, index){
                return (<Picker.Item label={v.descripcion + ' - ' + v.calle + ' ' + v.numero} value={v.idSitio} key={v.idSitio}/>)
              })}
            </Picker>
          </View>
          
          <Text style={styles.text}>Eliga un desperfecto:</Text>
          <View style={{
              flexDirection: "row",
              height: 40,
              padding: 0,
              borderRadius: 10, 
              borderWidth: 2, 
              borderColor: '#bdc3c7', 
              overflow: 'hidden',
              backgroundColor: 'grey'
            }}
          >     
          <Picker
            style={styles.pickerStyles}
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

          <Text style={styles.text}>Datos adicionales de su reclamo</Text>
          <TextInput
              style={styles.descripcion}            
              placeholder="Descripcion"
              onChangeText={descripcion => setDescripcion(descripcion)}
          />


           <TouchableOpacity onPress={openImagePickerAsync}>
            <Text>Seleccionar Imagen</Text>
          </TouchableOpacity>
          <Image key={files} style={{ width: 200, height: 200 }} source={{ uri: files }} />


          <Boton text='Enviar reclamo' onPress={handleCrearReclamo}/>
        </ScrollView>    
      </View>
      
    );
}

const styles = StyleSheet.create({
    container:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#E0E0E0'
    },
    scrollView : {
      width: '100%',
      padding: 20,
    },
    titleText: {
      padding: 8,
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    headingText: {
      padding: 8,
    },
    text:{
        fontSize: 20,
        color: '#000000',
        textAlign: 'center',
        margin:10
    },
    text2:{
      fontSize: 25,
      margin: 10,
      color: '#000000',
      textAlign: 'center',
  },
    input: {
        width: '80%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginBottom: 50,
        backgroundColor:'#FFFFFF',
        textAlign: 'center',
        color: 'black',
        alignSelf: 'center',
    },
    descripcion:{
      width: '80%',
      height: 90,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      marginBottom: 50,
      backgroundColor:'#FFFFFF',
      textAlign: 'center',
      color: 'black',
      alignSelf: 'center',
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
      color:'white',
    },
    titulo: {
        fontSize: 26,
        marginBottom: 50,
        color: '#FFFFFF',
        textDecorationLine: 'underline',
    },
    pickerStyles:{
      width:'100%',
      color:'white',
    },
});