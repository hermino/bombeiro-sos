//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { PrimaryTextColor, SecondaryTextColor, WarningColor } from '../assets/Colors'

// create a component
const NumeroDeSalas = ({text, op1, op2, obs, value1, handler1, value2, handler2 }) => {
    
    
    return (
        <View style={styles.NumeroDeSalasViewStyle }>
            <Text style = {styles.NumeroDeSalasTextStyle}>{text}</Text>
            <View style = {styles.NumeroDeSalasStyle}>
                <View style={styles.NumeroDeSalasOptStyle}>
                    <Text style={styles.NumeroDeSalasOptTextStyle}>{op1}</Text>
                    <TextInput style={styles.TextInput} value={value1} onChange={event => handler1(event.target.value)}  />
                </View>
                <View style={styles.NumeroDeSalasOptStyle}>
                    <Text style={styles.NumeroDeSalasOptTextStyle}>{op2}</Text>
                    <TextInput style={styles.TextInput} value={value2} onChange={event => handler2(event.target.value)}  />
                </View>
            </View>
            <Text style={ styles.obsStyle }>{obs}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    NumeroDeSalasTextInput: {
        borderColor: SecondaryTextColor,
        borderWidth: 1
    },
    NumeroDeSalasOptStyle:{
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: 'flex-start'
    },
    NumeroDeSalasStyle: {
        flexDirection: 'row'
    },
    NumeroDeSalasOptTextStyle: {
        fontSize: 19,
        color: PrimaryTextColor
    },
    NumeroDeSalasTextStyle: {
        fontWeight: "bold",
        fontSize: 19,
        color: PrimaryTextColor
    },
    obsStyle: {
        color: WarningColor,
        fontSize: 15,
        alignSelf: 'center'
    },
    NumeroDeSalasViewStyle: {
        marginTop: 20,
        marginHorizontal: 10
    },
    TextInput:{
        flex: 3,
        borderColor: SecondaryTextColor,
        borderWidth: 1
    },
});

//make this component available to the app
export default NumeroDeSalas;
