import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Switch, Button } from 'react-native';

import Boton from '../components/Boton';
import { solicitarAcceso } from '../Controllers/AccesoVecino.controller';

export default function DatosCrear({ navigation }) {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');

    const solicitarAccesoVecino = async function () {
      let datos = {
          documento: dni,
          nombre: nombre,
          apellido: apellido,
          email:email,
      }
      let getLogin = await solicitarAcceso(datos);
      if (getLogin.rdo === 200) {
          //setUsuarioValido(true);

          //guardar en storage los datos del usuario
          //console.log(getLogin.data.loginUser.token)
          //console.log(getLogin.data.loginUser.user.nombre)
          navigation.navigate('PantallaDatos');
      }
      if (getLogin.rdo === 401) {
        //console.log(getLogin.mensaje)
        Alert.alert('Error', getLogin.mensaje, [{text: 'Cerrar'}]);
      }
  }

    const handleEnviar = () => {
      solicitarAccesoVecino();
       //navigation.navigate('PantallaDatos');
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Ingrese sus datos para solicitar la generación de su cuenta:</Text>
        <TextInput
            style={styles.input}            
            placeholder="Nombre"
            onChangeText={nombre => setNombre(nombre)}
        />
        <TextInput
            style={styles.input}            
            placeholder="Apellido"
            onChangeText={apellido => setApellido(apellido)}
        />
        <TextInput
            style={styles.input}            
            placeholder="DNI"
            onChangeText={dni => setDni(dni)}
        />
        <TextInput
            style={styles.input}            
            placeholder="Email"
            onChangeText={email => setEmail(email)}
        />
        <Boton text='Enviar solicitud' onPress={handleEnviar}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#263238'
    },
    text:{
        fontSize: 20,
        marginBottom: 50,
        color: '#FFFFFF'
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
});