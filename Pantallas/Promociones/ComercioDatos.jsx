import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox } from 'react-native';

import Boton from '../../components/Boton';

export default function DatosComercio({ navigation }) {


    const handleVolver= () => {
       navigation.navigate('HomeInvitado');
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Promoción Comercio</Text>
        <Text style={styles.text}>Nombre:</Text>
        <TextInput
            style={styles.input}            
            placeholder="Nombre"
            value="Nombre"
            editable={false}
        />
        <Text style={styles.text}>Descripcion:</Text>
        <TextInput
            style={styles.input}            
            placeholder="Descripcion"
            value="Descripcion"
            editable={false}
        />
        <Text style={styles.text}>Dirección:</Text>
        <TextInput
            style={styles.input}            
            placeholder="Dirección"
            value="Dirección"
            editable={false}
        />
        <Text style={styles.text}>Teléfono:</Text>
        <TextInput
            style={styles.input}            
            placeholder="Teléfono"
            value="Teléfono"
            editable={false}
        />
        <Text style={styles.text}>Email:</Text>
        <TextInput
            style={styles.input}            
            placeholder="Email"
            value="Email"
            editable={false}
        />
        <Boton text='Volver al inicio' onPress={handleIngresar}/>
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
    titulo: {
        fontSize: 26,
        marginBottom: 50,
        color: '#FFFFFF',
        textDecorationLine: 'underline',
    }
});