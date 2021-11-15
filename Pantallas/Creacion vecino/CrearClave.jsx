import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Switch, Button, Alert } from 'react-native';

import Boton from '../../components/Boton';
//import { solicitarAcceso } from '../../Controllers/AccesoVecino.controller';

export default function CrearClave({ navigation }) {

    const [clave, setClave] = useState('');
    const [claveConfirm, setClaveConfirm] = useState('');
    const [pregunta, setPregunta] = useState('');
    const [respuesta, setRespuesta] = useState('');

    /* const solicitarHabilitarVecino = async function () {
      let datos = {
          clave: clave,
          pregunta: pregunta,
          respuesta: respuesta,
      }
      let getLogin = await solicitarAcceso(datos);
      if (getLogin.rdo === 200) {
          //setUsuarioValido(true);

          //guardar en storage los datos del usuario
          //console.log(getLogin.data.loginUser.token)
          //console.log(getLogin.data.loginUser.user.nombre)
          Alert.alert('Cuenta creada', 'Se creó su cuenta exitosamente', [{text: 'Continuar'}]);
          navigation.navigate('LoginVecino');
      }
      if (getLogin.rdo === 401) {
        //console.log(getLogin.mensaje)
        Alert.alert('Error', getLogin.mensaje, [{text: 'Cerrar'}]);
      }
  } */

    const handleEnviar = () => {
       //solicitarHabilitarVecino();
       Alert.alert('Cuenta creada exitosamente', [{text: 'Cerrar'}]);
       navigation.navigate('LoginVecino');
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Creación de usuario:</Text>
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