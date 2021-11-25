import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, ScrollView, TouchableOpacity, Image } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Boton from '../../components/Boton';
import { createPublicacionByTipo } from '../../Controllers/Publicaciones.controller';

export default function PublicacionComercio({ navigation }) {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [horario, setHorario] = useState('');

    const [fileNames, setFileNames] = useState(null);
    const [files, setFiles] = useState(null);

    

    const handleCrearPublicacion= () => {
      crearPublicacionComercio();
      //navigation.navigate('HomeVecino');
    }

    const crearPublicacionComercio = async function () {
      let datos = {
        nombre: nombre,
        descripcion: descripcion,
        direccion: direccion,
        telefono: telefono,
        email: email,
        horarios: horario,
        tipoPublicacion: 'Comercio',
        nombreImagenes: fileNames,
        archivoImagenes: files
      }
      let getRespuesta = await createPublicacionByTipo(datos);
      if(getRespuesta.rdo === 0){
        navigation.navigate('HomeVecino');
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
        <ScrollView>
          <Text style={styles.text}>Datos de su publicación:</Text>
          <TextInput
              style={styles.input}        
              placeholder="Nombre"
              onChangeText={nombre => setNombre(nombre)}
          />
          <Text style={styles.text}>Descripcion de su comercio (máximo 1000 caracteres)</Text>
          <TextInput
              style={styles.input}            
              placeholder="Descripcion"
              onChangeText={descripcion => setDescripcion(descripcion)}
          />
          <TextInput
              style={styles.input}            
              placeholder="Dirección"
              onChangeText={direccion => setDireccion(direccion)}
          />
          <TextInput
              style={styles.input}
              keyboardType = 'numeric'           
              placeholder="Horario"
              onChangeText={horario => setHorario(horario)}
          />
          <TextInput
              style={styles.input}  
              keyboardType = 'numeric'          
              placeholder="Teléfono"
              onChangeText={telefono => setTelefono(telefono)}
          />
          <TextInput
              style={styles.input}
              keyboardType = 'email-address'
              placeholder="Email"
              onChangeText={email => setEmail(email)}
          />
          <TouchableOpacity onPress={openImagePickerAsync}>
            <Text>Seleccionar Imagen</Text>
          </TouchableOpacity>

          <Image key={files} style={{ width: 200, height: 200 }} source={{ uri: files }} />
         

          
          <Boton text='Crear publicación' onPress={handleCrearPublicacion}/>
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