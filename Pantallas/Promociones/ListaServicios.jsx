import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

import Boton from '../../components/Boton';
import BotonPublicaciones from '../../components/BotonPublicaciones';

export default function ListaComercios({ navigation }) {
    
    let url = 'http://192.168.42.1:8080/api/promociones/getPromocionesByTipo'
    const [data, setData] = useState([]);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "tipo": "Servicio"
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    useEffect(() => {
        fetch(url,requestOptions)
         .then((response) => response.json())
         .then((json) => setData(json._promociones))
         .catch((error) => alert(error));
    });
    
    

    const handleComercios = (key) => {
        navigation.navigate('ListaComercios');
    }

    const handleSalir = () => {
        navigation.navigate('HomeVecino');
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Consulta de promociones</Text>
        <BotonPublicaciones text='Ver comercios' onPress={handleComercios}/>
        <FlatList
            data={data}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.touchable} onPress={() => {navigation.navigate('ServicioDatos', {nombre: item.nombre, horario: item.horarios, rubro: item.rubros, telefono: item.telefono, mail: item.email, descripcion: item.descripcion});}}>
                    <Text style={styles.datos}>{item.name}</Text>
                    <Text style={styles.datos}>Nombre y Apellido: {item.nombre}</Text>
                    <Text style={styles.datos}>Horarios: {item.horarios}</Text>
                    <Text style={styles.datos}>Rubro: {item.rubros}</Text>
                    <Text style={styles.datos}>Teléfono: {item.telefono}</Text>
                    <Text style={styles.datos}>Email: {item.email}</Text>
                    <Text style={styles.datos}>Descripción: {item.descripcion}</Text>
                </TouchableOpacity>
            )}
        />
        <Boton text='Volver al inicio' onPress={handleSalir}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#E0E0E0',
    },
    text:{
        fontSize: 18,
        color: '#000000',
        marginTop: 20,
        marginLeft: 10,
        marginBottom: 20,
    },
    datos:{
        fontSize: 14,
        color: '#000000',
        backgroundColor: '#C5CAE9',
        marginLeft: 10,
    },
    touchable:{
        borderColor: '#000000',
        marginBottom: 4,
    },
});