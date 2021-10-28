import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

import Boton from '../../components/Boton';
import BotonPublicaciones from '../../components/BotonPublicaciones';

export default function ListaComercios({ navigation }) {
    
    const [test, setTest] = useState([
        {name: 'Carlos Morales', hor: '08:00-20:00', rubro: 'Técnico', tel: '1212-3333', mail: 'cmorales@gmail.com', desc: 'Servicio profesional de electricidad y gasista', key: '1'},
        {name: 'Mariana Ortiz', hor: '06:00-18:00', rubro: 'Niñera', tel: '5648-8456', mail: 'ortizmariana@gmail.com', desc: 'Serivicio de niñera', key: '2'},
        {name: 'Rodrigo Rojas', hor: '00:00-23:59', rubro: 'Plomero', tel: '1368-5423', mail: 'rr@gmail.com', desc: 'Plomero disponible todo el día', key: '3'},
    ]) 

    const pressHandler = (key) => {
        navigation.navigate('ServicioDatos');
    }

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
            data={test}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.touchable} onPress={() => pressHandler(item.key)}>
                    <Text style={styles.datos}>Nombre y Apellido: {item.name}</Text>
                    <Text style={styles.datos}>Horarios: {item.hor}</Text>
                    <Text style={styles.datos}>Rubro: {item.rubro}</Text>
                    <Text style={styles.datos}>Teléfono: {item.tel}</Text>
                    <Text style={styles.datos}>Email: {item.mail}</Text>
                    <Text style={styles.datos}>Descripción: {item.desc}</Text>
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