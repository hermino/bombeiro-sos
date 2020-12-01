//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryTextColor, SecondaryTextColor, YesColor } from '../assets/Colors'

// create a component
const ProximaPagina = ({text}) => {
    return (
        <Text style={styles.ProximaPagina}>{text}</Text>
    );
};

// define your styles
const styles = StyleSheet.create({
    ProximaPagina: {
        fontSize: 15,
        color: SecondaryTextColor,
        textAlign: 'center'
    }
});

export default ProximaPagina