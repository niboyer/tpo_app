import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox } from 'react-native';

import Boton from '../../components/Boton';

export default function ReestablecerPassInspector({ navigation }) {

    const [contraseña, setContraseña] = useState('');
    const [confirmar, setConfirmar] = useState('');

    const handleContinuar= () => {
       navigation.navigate('LoginInspector');
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Reestablecer contraseña inspector</Text>
        <TextInput
            style={styles.input}            
            placeholder="Contraseña"
            onChangeText={contraseña => setContraseña(contraseña)}
        />
        <TextInput
            style={styles.input}            
            placeholder="Confirmar contraseña"
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