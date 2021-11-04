import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, CheckBox, Alert} from 'react-native';

import Boton from '../components/Boton';

import {accesoInspector} from '../Controllers/AccesoInspector.controller';

export default function LoginInspector({ navigation }) {

    const [legajo, setLegajo] = useState('');
    const [contraseña, setContraseña] = useState('');

    const [isSelected, setSelection] = useState(false);

    const handleIngresar= () => {
      validarAccesoInspector();
      //navigation.navigate('HomeVecino');         
    }

    const validarAccesoInspector = async function () {
      let datos = {
          legajo: legajo,
          contraseña: contraseña
      }
      let getLogin = await accesoInspector(datos);
      if (getLogin.rdo === 200) {
          //setUsuarioValido(true);

          //guardar en storage los datos del usuario
          console.log(getLogin.data.loginUser.token)
          console.log(getLogin.data.loginUser.personal.nombre)
          navigation.navigate('HomeInspector');
      }
      if (getLogin.rdo === 401) {
        Alert.alert('Error', getLogin.mensaje, [{text: 'Cerrar'}]);
      }
    }

    const handleOlvido= () => {
        navigation.navigate('OlvidoInspector');
     }

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>Login inspector</Text>
          <TextInput
              style={styles.input}            
              placeholder="Legajo inspector"
              onChangeText={legajo => setLegajo(legajo)}
          />
          <TextInput
              style={styles.input} 
              secureTextEntry           
              placeholder="Contraseña"
              onChangeText={contraseña => setContraseña(contraseña)}
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
      backgroundColor: '#263238'
    },  
    text:{
        fontSize: 20,
        marginBottom: 50,
        color: '#FFFFFF',
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
        color: 'black'
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