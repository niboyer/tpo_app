import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Boton from '../../components/Boton';

export default function PregVecino({ navigation }) {

    const [respuesta, setRespuesta] = useState('');

    const [pregUser, setPregUser] = useState('');
    const [respUser, setRespUser] = useState('');

    useEffect(() => {
      getStorageItems();
    }, []);

    const getStorageItems = async () => {
      const UserPregunta = await loadData('preguntaSecreta');
      const UserResp = await loadData('respuestaSecreta');
      setPregUser(UserPregunta);
      setRespUser(respUser);
    }

    const handleContinuar= () => {
      if(respuesta===respUser){
        navigation.navigate('ReestablecerPassVecino');
      }
      else{
        Alert.alert('Error', 'La respuesta no es correcta', [{text: 'Cerrar'}]);
      }
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Para verificar su identidad, responda la siguiente pregunta:</Text>
        <Text style={styles.pregunta}>{pregUser}</Text>
        <TextInput
            style={styles.input}            
            placeholder="Respuesta"
            onChangeText={respuesta => setRespuesta(respuesta)}
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
        fontSize: 24,
        marginBottom: 50,
        fontWeight: 'bold',
        color: '#000000',
        textDecorationLine: 'underline',
    },
    pregunta:{
        fontSize: 20,
        marginBottom: 50,
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