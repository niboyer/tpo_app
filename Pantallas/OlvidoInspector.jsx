import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox } from 'react-native';

import Boton from '../components/Boton';

export default function OlvidoInspector({ navigation }) {

    const [legajo, setLegajo] = useState('');
    const [email, setEmail] = useState('');

    const handleContinuar= () => {
       navigation.navigate('PregInspector');
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Ingrese su legajo de inspector</Text>
        <TextInput
            style={styles.input}            
            placeholder="Legajo"
            onChangeText={legajo => setLegajo(legajo)}
        />
        <Text style={styles.text}>Ingrese su correo electrónico</Text>
        <TextInput
            style={styles.input}            
            placeholder="E-mail"
            onChangeText={email => setEmail(email)}
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