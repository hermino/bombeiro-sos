//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryTextColor, SecondaryTextColor, YesColor } from '../assets/Colors'

// create a component
const Subtitulo = ({text}) => {
    return (
        <Text style={styles.Subtitulo}>{text}</Text>
    );
};

// define your styles
const styles = StyleSheet.create({
    Subtitulo: {
        fontSize: 20,
        color: PrimaryTextColor
    }
});

//make this component available to the app
export default Subtitulo;
