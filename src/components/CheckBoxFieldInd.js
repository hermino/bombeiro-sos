//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryTextColor, SecondaryTextColor, YesColor } from '../assets/Colors'
import CheckBox from '@react-native-community/checkbox'

// create a component
const CheckBoxFieldInd = ({text, op1, op2}) => {

    const CheckBoxField = ({name}) => (
        <View style={styles.CheckBoxFieldStyle} >
            <CheckBox
                    tintColors={{true: PrimaryTextColor}}
                    disabled={false}
                    />
            <Text style={ styles.CheckboxTextOpt }>{name}</Text>
        </View>
    )

    return (
        <View style={styles.CheckBoxFieldIndStyle }>
            <Text style={styles.CheckboxTextInput}>{text}</Text>
            <View style={ styles.CheckboxesStyles }>
                <CheckBoxField name = {op1}/>
                <CheckBoxField name = {op2}/>
            </View>
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

});

//make this component available to the app
export default CheckBoxFieldInd;
