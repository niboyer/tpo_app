import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, ScrollView, TouchableOpacity, Image } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Boton from '../../components/Boton';

export default function GenerarDenunciaVecino({ navigation }) {

    const [apellido, setApellido] = useState('');
    const [nombre, setNombre] = useState('');
    const [dir1, setDir1] = useState('');
    const [dir2, setDir2] = useState('');
    const [motivo, setMotivo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const [fileNames, setFileNames] = useState(null);
    const [files, setFiles] = useState(null);

    const handleCrearDenuncia= () => {
      navigation.navigate('DeclaracionJurada');
    }

    /*
    const handleCrearDenunciaVecino = async function () {
      let datos = {
        apellido: apellido,
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
          <Text style={styles.text}>Denuncia contra: Vecino</Text>
          <TextInput
              style={styles.input}            
              placeholder="Apellido del denunciado"
              onChangeText={apellido => setApellido(apellido)}
          />
          <TextInput
              style={styles.input}            
              placeholder="Nombre del denunciado"
              onChangeText={nombre => setNombre(nombre)}
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
          <Text style={styles.text}>Motivo de la denuncia:</Text>
          <TextInput
              style={styles.descripcion}            
              placeholder="Motivo por el cual realiza la denuncia"
              onChangeText={motivo => setMotivo(motivo)}
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