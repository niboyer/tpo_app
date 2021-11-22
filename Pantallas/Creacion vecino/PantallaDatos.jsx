import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

import Boton from '../../components/Boton';

export default function PantallaDatos({ navigation }) {  

    const handleInicio = () => {
       navigation.navigate('MainScreen');
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text1}>Sus datos fueron enviados para revision</Text>
        <Text style={styles.text2}>Si están correctos, en el transcurso de los siguientes días recibirá una notificación para crear su clave de acceso. </Text>
        <Text style={styles.text2}>Una vez reciba esa notificación, ingrese a la aplicación y vaya a loguearse como vecino. </Text>
        <Boton text='Volver al inicio' onPress={handleInicio}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#263238',
    },
    text1:{
        fontSize: 25,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 35,
    },
    text2:{
      fontSize: 25,
      color: '#FFFFFF',
      textAlign: 'center',
      marginBottom: 15,
  },
});