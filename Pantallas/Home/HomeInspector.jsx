import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ReclamoBar from '../../components/ReclamoBar';
import DenunciasBar from '../../components/DenunciasBar';
import PromocionBar from '../../components/PromocionBar';
import MenuOpcion from '../../components/MenuOpcion';
import BotonSalir from '../../components/BotonSalir';

export default function MainScreen({ navigation }) {
    
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    useEffect(() => {
        getStorageItems();
      }, []);
  
      const getStorageItems = async () => {
        const nombre = await loadData('nombre');
        setNombre(nombre);

        const apellido = await loadData('apellido');
        setApellido(apellido);
      }
  
      const storeData = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value);
        } catch (e) {
          console.log(e.message)
        }
      }
  
      const loadData = async (key) => {
        const recuperado = await AsyncStorage.getItem(key);
        return recuperado;
      }

      const clearAll = async () => {
        try {
          await AsyncStorage.clear()
        } catch(error) {
          console.log(error);
        }
      }
    
    const handleGenerarReclamo = () => {
        navigation.navigate('GenerarReclamo');
    }
    const handleConsultarReclamos = () => {
        navigation.navigate('ListaReclamos');
    }
    const handleGenerarDenuncia = () => {
        navigation.navigate('GenerarDenunciaComercio');
    }
    const handleConsultarDenuncias = () => {
        navigation.navigate('ListaDenuncias');
    }
    
    const handleConsultarPromociones = () => {
        navigation.navigate('ListaComercios');
    }
    const handleSalir = () => {
      navigation.navigate('ListaComercios');
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenido Inspector {nombre} {apellido}</Text>
        <ReclamoBar/>
        {/*<MenuOpcion text='Generar Reclamo' onPress={handleGenerarReclamo}/>*/}
        <MenuOpcion text='Consultar Reclamo' onPress={handleConsultarReclamos}/>
        <DenunciasBar/>
        {/*<MenuOpcion text='Generar Denuncia' onPress={handleGenerarDenuncia}/>*/}
        <MenuOpcion text='Consultar Denuncia' onPress={handleConsultarDenuncias}/>
        <PromocionBar/>
        <MenuOpcion text='Consulta de promociones' onPress={handleConsultarPromociones}/>
        <BotonSalir text='Salir' onPress={handleSalir}/>
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

});