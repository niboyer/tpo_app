import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, Alert } from 'react-native';

import Boton from '../../components/Boton';

export default function ReestablecerPassVecino({ navigation }) {

    const [clave, setClave] = useState('');
    const [confirmar, setConfirmar] = useState('');

    const handleContinuar= () => {
      if(clave === confirmar){
        Alert.alert('Cambio realizado', 'Se modificó su clave exitosamente', [{text: 'Aceptar'}]);
        navigation.navigate('LoginVecino');
      }
      else{
        Alert.alert('Error', 'Las claves no coinciden entre si', [{text: 'Aceptar'}]);
      }
       
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Reestablecer clave usuario</Text>
        <TextInput
            style={styles.input}            
            placeholder="Clave de acceso"
            onChangeText={clave => setClave(clave)}
        />
        <TextInput
            style={styles.input}            
            placeholder="Confirmar clave"
            onChangeText={confirmar => setConfirmar(confirmar)}
        />
        <Boton text='Continuar' onPress={handleContinuar}/>
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
        color: '#000000'
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