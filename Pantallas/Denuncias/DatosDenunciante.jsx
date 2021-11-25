import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, CheckBox, ScrollView, TouchableOpacity, Image } from 'react-native';

import Boton from '../../components/Boton';
import { getMovimientosDenunciaByIdDenuncia } from '../../Controllers/Denuncias.controller';

export default function DatosDenunciante({ item, route, navigation }) {

    const {
      urlImagenes,
      sitioCalle,
      sitioNumero,
      sitioEntreCalleA,
      sitioEntreCalleB,
      sitioDescripcion,
      descripcion, 
      descripcionDenunciado,
      estado,
      idDenuncias
    } = route.params;

    const imagenes = urlImagenes.split('|');

    const [data, setData] = useState([]);

    useEffect(() => {
      async function componentDidMount(){
        let rdo = await getMovimientosDenunciaByIdDenuncia(idDenuncias);
        setData(rdo);
      }
      //getStorageItems();
      componentDidMount();
    }, []);
    
    const handleVolver= () => {
        navigation.goBack()
      }

      return (
        <View style={styles.container}>
          <ScrollView style={styles.ScrollView}>
            <Text style={styles.titulo}>Denuncia N°: {idDenuncias}</Text>
            
            {/*<Text style={styles.titulo}>Denuncia contra: </Text>*/}
            
            <View style={styles.datos}>
              <Text style={styles.subtitulo}>Datos del sitio:</Text>
              <View style={styles.subdatos}>
                <Text style={styles.text}>Descripcion: {sitioDescripcion}</Text>
                <Text style={styles.text}>Dirección: {sitioCalle + ' ' + sitioNumero}</Text>
                <Text style={styles.text}>Entre: {sitioEntreCalleA + ' y ' + sitioEntreCalleB}</Text>                
              </View>
            </View>
            
            <View style={styles.datos}>
              <Text style={styles.subtitulo}>Datos del denunciado:</Text>
              <View style={styles.subdatos}>
                <Text style={styles.text}>Nombre: {descripcionDenunciado}</Text>
              </View>
            </View>

            <View style={styles.datos}>
              <Text style={styles.subtitulo}>Motivo de la denuncia:</Text>
              <View style={styles.subdatos}>
                <Text style={styles.text}>Descripcion: {descripcion}</Text>
              </View>
            </View>

            <View style={styles.datos}>
              <Text style={styles.subtitulo}>Estado de la denuncia:</Text>
              <View style={styles.subdatos}>
                <Text style={styles.text}>Estado: {estado}</Text>
              </View>
            </View>

            <View style={styles.datos}>
              <Text style={styles.subtitulo}>Imagenes</Text>
              <View style={styles.subdatos}>
                {imagenes.map(url => {
                  if(url!=='') {
                    return(                    
                        <Image key={url} style={{ width: 100, height: 100 }} source={{ uri: url }} />
                    );
                  }
                })}                
              </View>
            </View>

            <View style={styles.datos}>
              <Text style={styles.subtitulo}>Movimientos de la denuncia: </Text>
              
              {data.map(item => {
                return( 
                  <><View style={styles.subdatos}>
                    <Text style={styles.text}>Responsable: {item.responsable}</Text>
                    <Text style={styles.text}>Causa: {item.causa}</Text>
                    <Text style={styles.text}>Fecha: {item.fecha}</Text>  
                    <View style={styles.separator}></View>        
                    </View> 
                  </>                               
                );                  
              })}   
               
            </View>


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
    separator: {
      height: 1,
      backgroundColor: 'gray'
    },
    datos:{
      borderWidth: 1,
      borderColor: 'black',
      borderTopRightRadius:10,
      borderTopLeftRadius:10,
      borderColor:'black',
      marginBottom:10,
    },
    subdatos: {
      padding: 10,
    },
    subtitulo: {
      fontSize: 18,
      marginBottom: 0,
      marginTop: 0,
      padding: 5, 
      color: '#FFFFFF',
      fontStyle: 'italic',
      fontWeight: 'bold',
      backgroundColor: '#5472D3', 
      borderWidth:0,
      borderColor: 'white',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      textAlign: 'left',
    },
    text:{
        fontSize: 17,
        padding: 2,
        color: '#000000',
        textAlign: 'left',
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
        color: '#FFFFFF',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 10,
        padding: 10, 
        backgroundColor: '#002171', 
        borderWidth:1,
        borderColor: 'white',
        borderRadius: 10,
        textAlign: 'center',
    },
    ScrollView:{
      width: '100%',
      padding: 10,
    },
});