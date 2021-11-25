import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, ScrollView, Alert } from 'react-native';

import Boton from '../../components/Boton';

import {accesoVecino} from '../../Controllers/AccesoVecino.controller';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginVecino({ navigation }) {

    const [dni, setDni] = useState('');
    const [clave, setClave] = useState('');
    const [documento, setdocumento] = useState('');
    const [isSelected, setSelection] = useState(false);

    useEffect(() => {
      getStorageItems();
    }, []);

    const getStorageItems = async () => {
      const userData = await loadData('documento');
      setdocumento(userData);
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

    const handleIngresar= () => {
        //navigation.navigate('HomeVecino');
        validarAccesoVecino();            
    }

    const validarAccesoVecino = async function () {
      let datos = {
          dni: documento,
          clave: clave
      }
      let getLogin = await accesoVecino(datos);
      if (getLogin.rdo === 200) {
        await storeData('token', getLogin.data.loginUser.token);
        await storeData('nombre', getLogin.data.loginUser.user.nombre);
        await storeData('apellido', getLogin.data.loginUser.user.apellido);
        await storeData('preguntaSecreta', getLogin.data.loginUser.user.preguntaSecreta);
        await storeData('respuestaSecreta', getLogin.data.loginUser.user.respuestaSecreta);
        await storeData('email', getLogin.data.loginUser.user.email);

        await storeData('tipoUser', 'vecino');
          //console.log(getLogin.data.loginUser.token)
          //console.log(getLogin.data.loginUser.user.nombre)
          navigation.navigate('HomeVecino');
      }

      if (getLogin.rdo === 401) {
        Alert.alert('Error', getLogin.mensaje, [{text: 'Cerrar'}]);
      }

      if (getLogin.rdo === 404) {
        Alert.alert('Error', getLogin.mensaje, [{text: 'Cerrar'}]);
      }

      if (getLogin.rdo === 500) {
        Alert.alert('Error', getLogin.mensaje, [{text: 'Cerrar'}]);
      }
  }

    const handleOlvido= () => {
        navigation.navigate('OlvidoVecino');
     }

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>Login usuario</Text>
          <TextInput
              editable={false}              
              style={styles.input}            
              placeholder="DNI"
              defaultValue= {documento.toString()}
              onChangeText={dni => setDni(dni)}
          />
          <TextInput
              style={styles.input}
              secureTextEntry            
              placeholder="Clave de acceso"
              onChangeText={clave => setClave(clave)}
          />
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Recordarme</Text>
          </View>
          <Boton text='Acceder' onPress={handleIngresar}/>
          <Boton text='¿Olvidó su contraseña?' onPress={handleOlvido}/>
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
        marginBottom: 50,
        color: '#000000',
        fontWeight: 'bold',
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
      color:'black',
      fontWeight: 'bold'
    },
});