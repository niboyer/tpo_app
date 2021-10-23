import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox} from 'react-native';

import Boton from '../components/Boton';

export default function LoginInspector({ navigation }) {

    const [legajo, setLegajo] = useState('');
    const [contraseña, setContraseña] = useState('');

    const [isSelected, setSelection] = useState(false);

    const handleIngresar= () => {
       navigation.navigate('HomeInspector');
    }
    const handleOlvido= () => {
        navigation.navigate('OlvidoInspector');
     }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Login inspector</Text>
        <TextInput
            style={styles.input}            
            placeholder="Legajo inspector"
            onChangeText={legajo => setLegajo(legajo)}
        />
        <TextInput
            style={styles.input}            
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
        fontSize: 34,
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