import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';

import {Picker} from '@react-native-picker/picker';

import * as ImagePicker from 'expo-image-picker';
import Boton from '../../components/Boton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDenuncia } from '../../Controllers/Denuncias.controller';
import { useNetInfo } from '@react-native-community/netinfo';

export default function GenerarDenunciaComercio({ navigation }) {

    const netInfo = useNetInfo();

    const [selectedSitio, setSelectedSitio] = useState();
    const [sitios, setSitios] = useState([]);

    const [documento, setDocumento] = useState('');
    const [descripcionDenunciado, setDescripcionDenunciado] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const [fileNames, setFileNames] = useState(null);
    const [files, setFiles] = useState(null);

    const [isChecked, setChecked] = useState(false);

    useEffect(() => {
      getStorageItems();
    }, []);

    const getStorageItems = async () => {
      const documento = await loadData('documento');
      setDocumento(documento);

      const sitios = await listarSitios();
      setSitios(sitios)
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

    const handleCrearDenuncia= () => {

      if(selectedSitio=="0") {
        Alert.alert('Aviso', "Debe Completar Sitio", [{text: 'Aceptar'}]);
      }
      else {
        if(netInfo.isWifiEnabled || netInfo.isConnected){
          if(isChecked) {
            crearDenuncia();
          }
          else {
            Alert.alert('Error', 'Debe aceptar los terminos', [{text: 'Aceptar'}]);
          }
        }
        else{
            Alert.alert('Error', 'Necesita una conexion a internet para generar una denuncia', [{text: 'Aceptar'}]);
        }
      }
    }

    const crearDenuncia = async function () {
      let datos = {
        documento: documento,        
        idSitio: selectedSitio,
        descripcion: descripcion,
        aceptaResponsabilidad: 1,
        descripcionDenunciado: descripcionDenunciado,
        nombreImagenes: fileNames,
        archivoImagenes: files,        
      }

      let getRespuesta = await createDenuncia(datos);
      if(getRespuesta.rdo === 200){
        navigation.navigate('DevolucionNroDenuncia',{
          idDenuncias: getRespuesta.data.createdDenuncia.idDenuncias,
        });
      } else {
        Alert.alert('Error', getRespuesta.mensaje, [{text: 'Aceptar'}]);
      }
    }

    /*
    const handleCrearDenunciaComercio = async function () {
      let datos = {
        nombre: nombre,
        dir1: dir1,
        dir2: dir2,
        motivo: motivo,
        descripcion: descripcion,
        nombreImagenes: fileNames,
        archivoImagenes: files
      }
      let getRespuesta = await createDenunciaByTipo(datos);
      if(getRespuesta.rdo === 0){
        navigation.navigate('DeclaracionJurada');
      }
    }
*/
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

          <Text style={styles.text2}>Denuncia a realizar</Text>
          <Text style={styles.text}>Descripcion del denunciado:</Text>
          <TextInput
              style={styles.descripcion}            
              placeholder="Descripcion del denunciado"
              onChangeText={descripcionDenunciado => setDescripcionDenunciado(descripcionDenunciado)}
          />
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

          <Text style={styles.text}>Descripcion de su denuncia</Text>
          <TextInput
              style={styles.descripcion}            
              placeholder="Descripcion de su denuncia"
              onChangeText={descripcion => setDescripcion(descripcion)}
          />
          
        
           <TouchableOpacity onPress={openImagePickerAsync}>
            <Text>Seleccionar Imagen</Text>
          </TouchableOpacity>
          <Image key={files} style={{ width: 200, height: 200 }} source={{ uri: files }} />   

          <Text style={styles.text}>Acepto, en carácter de declaración jurada, que lo indicado en el objeto de la denuncia y pruebas aportadas en caso de falsedad puede dar lugar a una acción judicial por parte del municipio y/o los denunciados</Text>
          <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />

          <Boton text='Continuar' onPress={handleCrearDenuncia}/>
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