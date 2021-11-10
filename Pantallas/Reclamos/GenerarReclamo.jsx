import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, ScrollView, TouchableOpacity, Image } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Boton from '../../components/Boton';

export default function GenerarReclamo({ navigation }) {

    const [dir1, setDir1] = useState('');
    const [dir2, setDir2] = useState('');
    const [tipo, setTipo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const [fileNames, setFileNames] = useState(null);
    const [files, setFiles] = useState(null);

    const wifi = false;

    const handleCrearReclamo= () => {
      if(wifi == true){
        navigation.navigate('DevolucionNro');
      }
      else{
        navigation.navigate('EnviarRed');
      }
    }

    /*
    const handleCrearReclamo = async function () {
      let datos = {
        dir1: dir1,
        dir2: dir2,
        tipo: tipo,
        descripcion: descripcion,
        nombreImagenes: fileNames,
        archivoImagenes: files
      }
      let getRespuesta = await createReclamo(datos);
      if(getRespuesta.rdo === 0){
        navigation.navigate('DevolucionNro');
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
    */

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>Datos de su reclamo:</Text>
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
          <TextInput
              style={styles.input}            
              placeholder="Tipo"
              onChangeText={tipo => setTipo(tipo)}
          />
          <Text style={styles.text}>Datos adicionales de su reclamo</Text>
          <TextInput
              style={styles.descripcion}            
              placeholder="Descripcion"
              onChangeText={descripcion => setDescripcion(descripcion)}
          />
          {/* <TouchableOpacity onPress={openImagePickerAsync}>
            <Text>Seleccionar Imagen</Text>
          </TouchableOpacity>
          <Image key={files} style={{ width: 200, height: 200 }} source={{ uri: files }} />   */}


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