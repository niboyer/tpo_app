import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, ScrollView, Alert } from 'react-native';

import Boton from '../../components/Boton';

import {verificarUsuarioActivo} from '../../Controllers/AccesoVecino.controller';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VerificarDNI({ navigation }) {

    const [documento, setdocumento] = useState('');

    const handleIngresar = () => {
        validarDNIVecino();       
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

    const validarDNIVecino = async function () {
      let datos = {
        documento: documento,
      }
      let getLogin = await verificarUsuarioActivo(datos);

      if (getLogin.rdo == 200) {
        await storeData('documento', getLogin.data.documento);
        navigation.navigate('LoginVecino');
      }
      
      if (getLogin.rdo == 201) {
        await storeData('documento', getLogin.data.documento);
        Alert.alert('INFO', 'Para habilitar su cuenta, se le pedirá que genere una clave de acceso y una pregunta de seguridad', [{text: 'Cerrar'}]);
        navigation.navigate('CrearClave');
      }

      if(getLogin.rdo == 403){
        Alert.alert('ERROR', getLogin.mensaje, [{text: 'Cerrar'}]);
      }

      if(getLogin.rdo == 404){
        Alert.alert('ERROR', getLogin.mensaje, [{text: 'Cerrar'}]);
      }
  }

    const handleVolver= () => {
        navigation.navigate('ElegirLogin');
     }

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>Ingrese su Documento</Text>
          <TextInput
              style={styles.input}            
              placeholder="DOCUMENTO"
              onChangeText={documento => setdocumento(documento)}
          />
          <Boton text='Acceder' onPress={handleIngresar}/>
          <Boton text='Volver atrás' onPress={handleVolver}/>
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
        marginTop: 40,
        marginBottom: 50,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
    },
    input: {
        width: '100%',
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
});