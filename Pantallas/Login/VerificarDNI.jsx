import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, ScrollView, Alert } from 'react-native';

import Boton from '../../components/Boton';

import {accesoVecino} from '../../Controllers/AccesoVecino.controller';

export default function VerificarDNI({ navigation }) {

    const [dni, setDni] = useState('');

    const handleIngresar= () => {
        //validarDNIVecino();       
        //navigation.navigate('LoginVecino');
        navigation.navigate('CrearClave');
    }

    const validarDNIVecino = async function () {
      let datos = {
          dni: dni,
      }
      let getLogin = await verificarDNI(datos);
      if (getLogin.rdo == true) {
          navigation.navigate('LoginVecino');
      }
      if (getLogin.rdo == false) {
        Alert.alert('Error', 'Para habilitar su cuenta, se le pedirá que genere una clave de acceso y una pregunta de seguridad', [{text: 'Cerrar'}]);
        navigation.navigate('CrearClave');
      }
  }

    const handleVolver= () => {
        navigation.navigate('ElegirLogin');
     }

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>Ingrese su DNI</Text>
          <TextInput
              style={styles.input}            
              placeholder="DNI"
              onChangeText={dni => setDni(dni)}
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