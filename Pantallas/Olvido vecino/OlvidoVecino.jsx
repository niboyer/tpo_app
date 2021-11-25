import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Boton from '../../components/Boton';

export default function OlvidoVecino({ navigation }) {

    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');

    const [DniUser, setDniUser] = useState('');
    const [EmailUser, setEmailUser] = useState('');

    useEffect(() => {
      getStorageItems();
    }, []);

    const getStorageItems = async () => {
      const userDocumento = await loadData('documento');
      const userEmail = await loadData('email');
      setDniUser(userDocumento);
      setEmailUser(userEmail);
    }

    const handleContinuar= () => {
      if(dni === DniUser && email === EmailUser){
        navigation.navigate('PregVecino');
      }
      else{
        Alert.alert('Error', 'Datos inválidos', [{text: 'Cerrar'}]);
      }
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Ingrese su número de documento</Text>
        <TextInput
            style={styles.input}            
            placeholder="DNI"
            onChangeText={dni => setDni(dni)}
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
      backgroundColor: '#E0E0E0'
    },
    text:{
        fontSize: 20,
        marginBottom: 50,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    input: {
        width: '50%',
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