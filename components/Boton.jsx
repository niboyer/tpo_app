import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function Boton({text, onPress}){
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
        borderRadius: 5,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#095982',
        marginTop: 50,
        marginBottom: 70,
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    }
})