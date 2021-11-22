import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, Switch, Button, Alert } from 'react-native';

import Boton from '../../components/Boton';
import { crearAcceso } from '../../Controllers/AccesoVecino.controller';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CrearClave({ navigation }) {

    const [clave, setClave] = useState('');
    const [claveConfirm, setClaveConfirm] = useState('');
    const [pregunta, setPregunta] = useState('');
    const [respuesta, setRespuesta] = useState('');


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

     const solicitarHabilitarVecino = async function () {

      const documento = await loadData('documento');
      let datos = {
          documento: documento,
          password: clave,
          preguntaSecreta: pregunta,
          respuestaSecreta: respuesta,
      }

      let getLogin = await crearAcceso(datos);

      if (getLogin.rdo === 200) {
          Alert.alert('Cuenta creada', 'Se creó su cuenta exitosamente', [{text: 'Continuar'}]);
          navigation.navigate('LoginVecino');
      }

      if (getLogin.rdo === 404) {
        Alert.alert('Error', getLogin.mensaje, [{text: 'Cerrar'}]);
      }

      if (getLogin.rdo === 500) {
        Alert.alert('Error', getLogin.mensaje, [{text: 'Cerrar'}]);
      }
  } 

    const handleEnviar = () => {
      solicitarHabilitarVecino();
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Creación de usuario: </Text>
        <TextInput
            style={styles.input}            
            placeholder="Clave de acceso"
            onChangeText={clave => setClave(clave)}
        />
        <TextInput
            style={styles.input}            
            placeholder="Confirmar clave"
            onChangeText={claveConfirm => setClaveConfirm(claveConfirm)}
        />
        <Text style={styles.text1}>Pregunta de seguridad</Text>
        <TextInput
            style={styles.input}            
            placeholder="Preguntas"
            onChangeText={pregunta => setPregunta(pregunta)}
        />
        <TextInput
            style={styles.input}            
            placeholder="Respuesta"
            onChangeText={respuesta => setRespuesta(respuesta)}
        />
        <Boton text='Crear cuenta' onPress={handleEnviar}/>
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
        marginBottom: 50,
        fontWeight: 'bold',
        color: '#000000',
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
        color: 'black'
    },
    boton:{
      margin: 20,
      color: '#095982'
    },
    text1:{
      fontSize: 20,
      marginTop:20,
      marginBottom: 30,
      fontWeight: 'bold',
      color: '#000000',
      fontStyle: 'italic',
  },
});