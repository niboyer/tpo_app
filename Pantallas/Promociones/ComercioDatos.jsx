import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, ScrollView, Image } from 'react-native';

import Boton from '../../components/Boton';

export default function DatosComercio({item, route, navigation }) {

  console.log(item)

    const {nombre, descripcion, direccion, telefono, mail, urlImagenes} = route.params;

    const imagenes = urlImagenes.split('|');
    
    const handleVolver= () => {
      navigation.goBack()
    }

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.titulo}>Promoción Comercio</Text>
          <Text style={styles.text}>Nombre:</Text>
          <TextInput
              style={styles.input}            
              value={nombre}
              editable={false}
          />
          <Text style={styles.text}>Descripcion:</Text>
          <TextInput
              style={styles.input}      
              value={descripcion}
              editable={false}
              multiline={true}
          />
          <Text style={styles.text}>Dirección:</Text>
          <TextInput
              style={styles.input}      
              value={direccion}
              editable={false}
          />
          <Text style={styles.text}>Teléfono:</Text>
          <TextInput
              style={styles.input}        
              value={telefono}
              editable={false}
          />
          <Text style={styles.text}>Email:</Text>
          <TextInput
              style={styles.input}   
              value={mail}
              editable={false}
          />
          {imagenes.map(url =>{
            if(url!=='')
            {return(
                
                    <Image key={url} style={{ width: 100, height: 100 }} source={{ uri: url }} />
                
            );}
          })}
          <Boton text='Volver al inicio' onPress={handleVolver}/>
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
    scrollView : {
      width: '100%',
      padding: 20,
    },
    text:{
        fontSize: 18,
        marginBottom: 10,
        color: '#000000',
        margin:5,
    },
    input: {
        width: 'auto',
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        marginBottom: 5,
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