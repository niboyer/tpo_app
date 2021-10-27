import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, ScrollView } from 'react-native';

import Boton from '../../components/Boton';

export default function PublicacionComercio({ navigation }) {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [horario, setHorario] = useState('');



    const handleCrearPublicacion= () => {
       navigation.navigate('HomeVecino');
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>Datos de su publicación:</Text>
          <TextInput
              style={styles.input}            
              placeholder="Nombre"
              onChangeText={nombre => setNombre(nombre)}
          />
          <Text style={styles.text}>Descripcion de su comercio (máximo 1000 caracteres)</Text>
          <TextInput
              style={styles.input}            
              placeholder="Descripcion"
              onChangeText={descripcion => setDescripcion(descripcion)}
          />
          <Text style={styles.text}>Adjuntar imágenes (máximo 5)</Text>
          <TextInput
              style={styles.input}            
              placeholder="Dirección"
              onChangeText={direccion => setDireccion(direccion)}
          />
          <TextInput
              style={styles.input}            
              placeholder="Horario"
              onChangeText={horario => setHorario(horario)}
          />
          <TextInput
              style={styles.input}            
              placeholder="Teléfono"
              onChangeText={telefono => setTelefono(telefono)}
          />
          <TextInput
              style={styles.input}            
              placeholder="Email"
              onChangeText={email => setEmail(email)}
          />
          <Boton text='Crear publicación' onPress={handleCrearPublicacion}/>
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
        fontSize: 20,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center',
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
    titulo: {
        fontSize: 26,
        marginBottom: 50,
        color: '#FFFFFF',
        textDecorationLine: 'underline',
    }
});