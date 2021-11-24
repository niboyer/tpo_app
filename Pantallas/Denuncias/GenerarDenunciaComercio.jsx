import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';

import * as ImagePicker from 'expo-image-picker';
import Boton from '../../components/Boton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDenuncia } from '../../Controllers/Denuncias.controller';
import { useNetInfo } from '@react-native-community/netinfo';

export default function GenerarDenunciaComercio({ navigation }) {

    const netInfo = useNetInfo();

    const [documento, setDocumento] = useState('');
    const [descripcionDenunciado, setDescripcionDenunciado] = useState('');
    const [dir1, setDir1] = useState('');
    const [dir2, setDir2] = useState('');
    const [motivo, setMotivo] = useState('');
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

    const crearDenuncia = async function () {
      let datos = {
        documento: documento,        
        idSitio: 3,
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
        <ScrollView>
          <Text style={styles.text}>Denuncia contra: Comercio</Text>
          <Text style={styles.text}>Descripcion del comercio:</Text>
          <TextInput
              style={styles.descripcion}            
              placeholder="Descripcion del comercio"
              onChangeText={descripcionDenunciado => setDescripcionDenunciado(descripcionDenunciado)}
          />
          <TextInput
              style={styles.input}            
              placeholder="Dirección 1"
              onChangeText={dir1 => setDir1(dir1)}
          />
          <TextInput
              style={styles.input}            
              placeholder="Dirección 2"
              onChangeText={dir2 => setDir2(dir2)}
          />
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
    text:{
        fontSize: 20,
        marginBottom: 10,
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
    checkbox: {
      margin: 8,
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
    }
});