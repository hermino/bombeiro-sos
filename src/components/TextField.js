//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { PrimaryTextColor, SecondaryTextColor, YesColor } from '../assets/Colors'


const TextField = ({text, value, handler}) => (
    <View style={styles.TextFieldStyle}>
        <Text style={styles.TitleTextInput}>{text}</Text>
        <TextInput style={styles.TextInput} value={value} onChange={event => handler(event.target.value)} />
    </View>
)

// define your styles
const styles = StyleSheet.create({
    TextFieldStyle: {
        marginHorizontal: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    TitleTextInput: {
        flex: 2,
        fontSize: 19,
        fontWeight: "bold",
        color: PrimaryTextColor
    },
    TextInput:{
        flex: 3,
        borderColor: SecondaryTextColor,
        borderWidth: 1
    },
});

//make this component available to the app
export default TextField;
