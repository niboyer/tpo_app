import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox } from 'react-native';

import Boton from '../components/Boton';

export default function ReestablecerPassVecino({ navigation }) {

    const [clave, setClave] = useState('');
    const [confirmar, setConfirmar] = useState('');

    const handleContinuar= () => {
       navigation.navigate('LoginVecino');
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Reestablecer contraseña usuario</Text>
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
      backgroundColor: '#263238'
    },
    text:{
        fontSize: 20,
        marginBottom: 50,
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