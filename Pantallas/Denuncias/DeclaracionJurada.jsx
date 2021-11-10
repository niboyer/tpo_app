import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Switch, Button, CheckBox } from 'react-native';

import Boton from '../../components/Boton';

export default function DeclaracionJurada({ navigation }) {
    
    const [isSelected, setSelection] = useState(false);
    
    const handleGenerarDenuncia = () => {
        navigation.navigate('DevolucionNroDenuncia');
     }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Para poder realizar la denuncia, es necesario que lea y acepte los siguientes términos:</Text>
        <Text style={styles.extra}>“Acepto en carácter de declaración jurada, que lo indicado en el objeto de la denuncia y pruebas aportadas en caso de falsedad puede dar lugar a una acción judicial por parte del municipio y/o los denunciados.”</Text>
        <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Acepto los términos anteriormente mencionados</Text>
          </View>
        <Boton text='Generar Denuncia' onPress={handleGenerarDenuncia}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#E0E0E0',
    },
    text:{
        fontSize: 28,
        color: '#000000',
        marginBottom: 65,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    extra: {
        fontSize: 22,
        color: '#000000',
        marginBottom: 30,
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
        color:'black',
        textDecorationLine: 'underline',
      },
});