import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput, CheckBox} from 'react-native';

import Boton from '../../components/Boton';
import { getReclamosByDocumento, getReclamosByTipo } from '../../Controllers/Reclamos.controller';

export default function ListaReclamos({ navigation }) {
    
    const [data, setData] = useState([]);
    const [tipo, setTipo] = useState('');
    const [isPropio, setPropio] = useState(false);
    const [isGeneral, setGeneral] = useState(false);

   useEffect(()=>{
        async function componentDidMount(){
            let rdo = await getReclamosByDocumento('123456789');
            setData(rdo);
            console.log(rdo)
        }
        componentDidMount();
    }, []);

    const handleVolver = () => {
        navigation.goBack()
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Reclamos existentes en el municipio</Text>
        <View style={styles.busquedas}>
            <Text style={styles.text}>Tipo:</Text>
            <TextInput
                    style={styles.input}
                    placeholder="Tipo de reclamo"
                    onChangeText={tipo => setTipo(tipo)}
            />
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isPropio}
                    onValueChange={setPropio}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Propio</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isGeneral}
                    onValueChange={setGeneral}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>General</Text>
            </View>
        </View>
        <FlatList
            data={data}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.touchable} onPress={() => {navigation.navigate('ReclamoIndividual', {urlImagenes: item.urlImagenes ? item.urlImagenes : '', direccion1: item.direccion1, direccion2: item.direccion2, tipo: item.tipo, descripcion: item.descripcion, estado: item.estado});}}>
                    <Text style={styles.datos}>{item.direccion1}</Text>
                    <Text style={styles.datos}>{item.direccion2}</Text>
                    <Text style={styles.datos}>{item.tipo}</Text>
                    <Text style={styles.datos}>{item.descripcion}</Text>
                    <Text style={styles.datos}>{item.estado}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.idPublicacion}
        />
        <Boton text='Volver al inicio' onPress={handleVolver}/>
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
    busquedas:{
        flexDirection:'row',
        alignItems:'center'
    },
    input: {
        width: '10%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'#FFFFFF',
        textAlign: 'center',
        color: 'black',
        alignSelf: 'center',
        marginRight: 40
    },
    checkboxContainer: {
        flexDirection: "row",
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
        color:'black',
        fontWeight: 'bold'
      },
});