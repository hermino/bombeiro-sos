//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryTextColor, SecondaryTextColor, YesColor } from '../assets/Colors'

// create a component
const Titulo = ({title}) => {
    return (
        <Text style={styles.Titulo}>{title}</Text>
    );
};

// define your styles
const styles = StyleSheet.create({
    Titulo: {
        marginTop: 20,
        alignSelf:'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 25,
        color: PrimaryTextColor,
        fontWeight: "bold",
        
    }
});

//make this component available to the app
export default Titulo;
