import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, ScrollView, TouchableOpacity, Image } from 'react-native';

import Boton from '../../components/Boton';

export default function DatosDenunciado({ item, route, navigation }) {

    const {dir1, dir2, motivo, descripcion} = route.params;

    const handleVolver= () => {
        navigation.goBack()
      }

      return (
        <View style={styles.container}>
          <ScrollView style={styles.ScrollView}>
            <Text style={styles.titulo}>Denuncia contra: X</Text>
            <Text style={styles.text}>Lugar de la denuncia:</Text>
            <TextInput
                style={styles.input}            
                value={dir1}
                editable={false}
            />
            <TextInput
                style={styles.input}      
                value={dir2}
                editable={false}
            />
            <Text style={styles.text}>Motivo de la denuncia:</Text>
            <TextInput
                style={styles.input}      
                value={tipo}
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