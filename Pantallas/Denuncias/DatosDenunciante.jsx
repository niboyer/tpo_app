import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, ScrollView, TouchableOpacity, Image } from 'react-native';

import Boton from '../../components/Boton';

export default function DatosDenunciante({ item, route, navigation }) {

    const {descripcion, descripcionDenunciado, idSitio, estado} = route.params;

    const handleVolver= () => {
        navigation.goBack()
      }

      return (
        <View style={styles.container}>

          <ScrollView>
            
            <Text style={styles.titulo}>Denuncia contra: X</Text>
            <Text style={styles.text}>Motivo de la denuncia:</Text>
            <TextInput
                style={styles.descripcion}      
                value={descripcionDenunciado}
                editable={false}
                multiline={true}
            />
            <Text style={styles.text}>Datos adicionales de la denuncia:</Text>
            <TextInput
                style={styles.descripcion}        
                value={descripcion}
                editable={false}
                multiline={true}
            />
            <Text style={styles.text}>Sitio de la denuncia:</Text>
            <TextInput
                style={styles.input}        
                value={idSitio}
                editable={false}
                multiline={true}
            />
            <Text style={styles.text}>Estado de la denuncia:</Text>
            <TextInput
                style={styles.input}        
                value={estado}
                editable={false}
            />
            <Boton text='Volver a lista de denuncias' onPress={handleVolver}/>
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
    descripcion:{
      width: '80%',
      height: 90,
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