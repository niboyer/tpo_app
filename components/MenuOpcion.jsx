import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function MenuOpcion({text, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View> 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#C5CAE9',
        borderColor: 'black',
        width: '100%'
    },
    buttonText:{
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    }
})