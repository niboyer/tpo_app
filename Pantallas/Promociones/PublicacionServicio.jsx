import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, ScrollView, TouchableOpacity, Image } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Boton from '../../components/Boton';
import { createPublicacionByTipo } from '../../Controllers/Publicaciones.controller';

export default function PublicacionServicio({ navigation }) {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [rubro, setRubro] = useState('');
    const [horario, setHorario] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');

    const [fileNames, setFileNames] = useState(null);
    const [files, setFiles] = useState(null);

    const handleCrearPublicacion= () => {
        crearPublicacionServicio();
    }

    const crearPublicacionServicio = async function () {
      let datos = {
        nombre: nombre,
        descripcion: descripcion,
        rubros: rubro,
        horarios: horario,
        telefono: telefono,
        email: email,
        tipoPublicacion: 'Servicio',
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
          <Text style={styles.text}>Datos de su servicio:</Text>
          <TextInput
              style={styles.input}            
              placeholder="Nombre"
              onChangeText={nombre => setNombre(nombre)}
          />
          <TextInput
              style={styles.input}            
              placeholder="Horarios"
              onChangeText={horario => setHorario(horario)}
          />
          <TextInput
              style={styles.input}            
              placeholder="Rubro"
              onChangeText={rubro => setRubro(rubro)}
          />
          <TextInput
              style={styles.input}            
              placeholder="Teléfono"
              onChangeText={telefono => setTelefono(telefono)}
          />
          <TextInput
              style={styles.input}            
              placeholder="Email"
              onChangeText={email => setEmail(email)}
          />
          <Text style={styles.text}>Descripcion de su servicio (máximo 1000 caracteres)</Text>
          <TextInput
              style={styles.input}            
              placeholder="Descripcion"
              onChangeText={descripcion => setDescripcion(descripcion)}
          />
          <TouchableOpacity onPress={openImagePickerAsync}>
            <Text>Seleccionar Imagen</Text>
          </TouchableOpacity>

          <Image key={files} style={{ width: 200, height: 200 }} source={{ uri: files }} />

          <Boton text='Crear servicio profesional' onPress={handleCrearPublicacion}/>
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