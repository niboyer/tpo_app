import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, ScrollView } from 'react-native';

import Boton from '../../components/Boton';

export default function PublicacionServicio({ navigation }) {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [rubro, setRubro] = useState('');
    const [horario, setHorario] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');



    const handleCrearPublicacion= () => {
       navigation.navigate('HomeVecino');
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>Datos de su servicio:</Text>
          <TextInput
              style={styles.input}            
              placeholder="Nombre"
              onChangeText={nombre => setNombre(nombre)}
          />
          <TextInput
              style={styles.input}            
              placeholder="Horarios"
              onChangeText={horario => setHorario(horario)}
          />
          <TextInput
              style={styles.input}            
              placeholder="Rubro"
              onChangeText={rubro => setRubro(rubro)}
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
          <Text style={styles.text}>Descripcion de su servicio (máximo 1000 caracteres)</Text>
          <TextInput
              style={styles.input}            
              placeholder="Descripcion"
              onChangeText={descripcion => setDescripcion(descripcion)}
          />
          <Boton text='Crear servicio profesional' onPress={handleCrearPublicacion}/>
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