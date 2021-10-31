import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

import Boton from '../../components/Boton';
import BotonPublicaciones from '../../components/BotonPublicaciones';

export default function ListaComercios({ navigation }) {
    
    const [test, setTest] = useState([
        {name: 'Pizza Hut', desc: 'Las mejores pizzas', dir: 'Av. Cabildo 2145', tel: '4185-7984', mail: 'pizhut@gmail.com', key: '1'},
        {name: 'El club de la milanesa', desc: 'Riquisimas milangas', dir: 'Av. Cabildo 4444', tel: '1234-1235', mail: 'clubmil@gmail.com', key: '2'},
        {name: 'Kfc', desc: 'Pollo', dir: 'Av. Cabildo 4456', tel: '9875-4685', mail: 'kfc@gmail.com', key: '3'},
    ]) 

    const handleServicios = (key) => {
        navigation.navigate('ListaServicios');
    }

    const handleSalir = () => {
        navigation.navigate('HomeVecino');
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Consulta de promociones</Text>
        <BotonPublicaciones text='Ver servicios' onPress={handleServicios}/>
        <FlatList
            data={test}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.touchable} onPress={() => {navigation.navigate('ComercioDatos', {nombre: item.name, descripcion: item.desc, direccion: item.dir, telefono: item.tel, mail: item.mail});}}>
                    <Text style={styles.datos}>{item.name}</Text>
                    <Text style={styles.datos}>{item.desc}</Text>
                    <Text style={styles.datos}>{item.dir}</Text>
                    <Text style={styles.datos}>{item.tel}</Text>
                    <Text style={styles.datos}>{item.mail}</Text>
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