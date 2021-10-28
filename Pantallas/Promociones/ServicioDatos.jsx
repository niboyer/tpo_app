import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, ScrollView } from 'react-native';

import Boton from '../../components/Boton';

export default function DatosServicio({ navigation }) {

    const handleVolver= () => {
       navigation.navigate('HomeInvitado');
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.titulo}>Servicio Profesional</Text>
          <Text style={styles.text}>Nombre y Apellido:</Text>
          <TextInput
              style={styles.input}            
              placeholder="Nombre"
              value="Nombre y Apellido"
              editable={false}
          />
          <Text style={styles.text}>Horarios:</Text>
          <TextInput
              style={styles.input}            
              placeholder="Horarios"
              value="Horarios"
              editable={false}
          />
          <Text style={styles.text}>Rubro:</Text>
          <TextInput
              style={styles.input}            
              placeholder="Rubro"
              value="Rubro"
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
          <Text style={styles.text}>Descripción:</Text>
          <TextInput
              style={styles.input}            
              placeholder="Descripcion"
              value="Descripcion"
              editable={false}
          />
          <Text style={styles.text}>Imágenes:</Text>
          <Boton text='Volver al inicio' onPress={handleIngresar}/>
        </ScrollView>
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
        fontSize: 18,
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
    titulo: {
        fontSize: 24,
        marginBottom: 50,
        color: '#000000',
        textDecorationLine: 'underline',
    }
});