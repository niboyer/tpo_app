import React, {useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function DenunciasUsuarioBar({ navigation }) {
    
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Denuncias del usuario</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#0D47A1',
        height: 40,
        width: '100%',
    },
    text:{
        fontSize: 16,
        color: '#FFFFFF',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10,
    },
    
});