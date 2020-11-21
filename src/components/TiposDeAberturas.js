//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryTextColor, SecondaryTextColor, YesColor } from '../assets/Colors'
import CheckBox from '@react-native-community/checkbox'
import { TextInput } from 'react-native-gesture-handler';

// create a component
const TiposDeAberturas = ({text, op1, op2, op3}) => {

    const CheckBoxField = ({name}) => (
        <View style={styles.CheckBoxFieldStyle} >
            <CheckBox
                    tintColors={{true: PrimaryTextColor}}
                    disabled={false}
                    />
            <Text style={ styles.CheckboxTextOpt }>{name}</Text>
        </View>
    )

    const Outros = () => (
        <View style={styles.OutrosView}>
            <CheckBox tintColors={{true: PrimaryTextColor}}
                    disabled={false} />
            <Text style={ styles.CheckboxTextOpt } >Outros: </Text>
            <TextInput style={styles.TextInput} />
        </View>
    )

    return (
        <View style={styles.CheckBoxFieldIndStyle }>
            <Text style={styles.CheckboxTextInput}>{text}</Text>
            <View style={ styles.CheckboxesStyles }>
                <CheckBoxField name = {op1}/>
                <CheckBoxField name = {op2}/>
            </View>
            <CheckBoxField name = {op3}/>
            <Outros />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    
    CheckBoxFieldIndStyle:{
        marginHorizontal:10,
        marginTop:20,
    },
    CheckBoxFieldStyle: {
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        marginHorizontal: 20
    },
    CheckboxTextInput:{
        fontWeight: "bold",
        fontSize: 19,
        color: PrimaryTextColor
    },
    CheckboxesStyles:{
        flexDirection: 'row',
        justifyContent:'flex-start'
    },
    CheckboxTextOpt: {
        fontSize: 19,
        color: PrimaryTextColor
    },
    OutrosView: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-start'
    },
    TextInput:{
        borderColor: SecondaryTextColor,
        borderWidth: 1,
        width: '75%'
    }
});

//make this component available to the app
export default TiposDeAberturas;
