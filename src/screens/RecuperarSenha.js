import React, {Component, useState } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'

export default function BuscarVistoria({navigation}) {


    TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

    const PesquisarButton = ({onPress, title}) => (
        <TouchableOpacity onPress={onPress} style={styles.PesquisarButtonContainer}>
            <Text style={styles.PesquisarButtonText}>{title}</Text>
        </TouchableOpacity>
    )

    return (
        <ScrollView style={styles.Page}>
            <View style={styles.PesquisarFields}>
              <Text style={styles.Subtitulo}>Digite seu Email</Text>
                <TextInput 
                    textAlignVertical="top"
                    placeholder="Email" 
                    style={styles.PesquisarInputStyle}/>
                
                <Text style={styles.Subtitulo}>       Confirme seu Email</Text>                
                <TextInput 
                    textAlignVertical="top"
                    placeholder="Email" 
                    style={styles.PesquisarInputStyle}/>
               
                <PesquisarButton title="Confimar"/>  
            </View>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    Page:{
        backgroundColor: '#fff'
    },
    PesquisarFields:{
        flex: 1,
        alignItems: 'center',
        top: 80,
    },

  Subtitulo: {
    right: 100,
    fontSize: 15,
    fontWeight: "bold",
    top: 30,
    color: '#1F2D3D',
    top: 30
},
    PesquisarInputStyle:{
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        padding: 8,
        top: 25
    },
    PesquisarButtonContainer:{
        width:'70%',
        backgroundColor: "#E50000",
        borderRadius: 13,
        paddingVertical: 13,
        paddingHorizontal: 12,
        margin: 80,
    },

    PesquisarButtonText:{
        fontSize: 13,
        color: "#fff",
        alignSelf: "center"
    },
    

})
