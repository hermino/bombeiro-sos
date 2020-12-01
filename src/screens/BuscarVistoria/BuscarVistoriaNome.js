import React, {Component, useState } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'

export default function BuscarVistoriaNome({navigation}) {
    
    TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

    const PesquisarButton = ({onPress, title}) => (
        <TouchableOpacity onPress={onPress} style={styles.PesquisarButtonContainer}>
            <Text style={styles.PesquisarButtonText}>{title}</Text>
        </TouchableOpacity>
    )

    return (
        <ScrollView style={styles.Page}>
            <View style={styles.PesquisarFields}>
              <Text style={styles.Titulo}>Pesquisar Por:</Text>
              
                <TextInput 
                    textAlignVertical="top"
                    placeholder="Nome do arquivo" 
                    style={styles.PesquisarInputStyle}/>
                             
                <PesquisarButton title="Pesquisar" />
                
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
        top: 0,
    },
    Titulo: {
      marginTop: 20,
      right: 50,
      fontSize: 25,
      color:  "#1F2D3D",
      fontWeight: "bold"
  },
  Subtitulo: {
    right: 90,
    fontSize: 15,
    fontWeight: "bold",
    top: 15,
    color: '#1F2D3D',
},
    PesquisarInputStyle:{
        width: '60%',
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        padding: 9,
        top: 15
    },
    PesquisarButtonContainer:{
        width:'40%',
        backgroundColor: "#E50000",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 20,
        top: 20,
    },
    PesquisarButtonText:{
        fontSize: 13,
        color: "#fff",
        alignSelf: "center"
    },
    

})
