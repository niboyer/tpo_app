import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, ScrollView } from 'react-native';

import Boton from '../components/Boton';

export default function LoginVecino({ navigation }) {

    const [dni, setDni] = useState('');
    const [clave, setClave] = useState('');

    const [isSelected, setSelection] = useState(false);


    const handleIngresar= () => {
       navigation.navigate('HomeVecino');
    }
    const handleOlvido= () => {
        navigation.navigate('OlvidoVecino');
     }

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>Login usuario</Text>
          <TextInput
              style={styles.input}            
              placeholder="DNI"
              onChangeText={dni => setDni(dni)}
          />
          <TextInput
              style={styles.input}            
              placeholder="Clave de acceso"
              onChangeText={clave => setClave(clave)}
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
        color: 'black',
        alignSelf: 'center',
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
    scroll:{

    }
});