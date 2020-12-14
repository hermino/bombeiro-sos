//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryTextColor, SecondaryTextColor, YesColor } from '../assets/Colors'
import CheckBox from '@react-native-community/checkbox'

// create a component
const CheckBoxFieldInd = ({text, op1, op2, value, handler}) => {

    const [op1CheckboxStatus, changeOp1CheckboxStatus] = useState(false)
    const [op2CheckboxStatus, changeOp2CheckboxStatus] = useState(false)

    return (
        <View style={styles.CheckBoxFieldIndStyle }>
            <Text style={styles.CheckboxTextInput}>{text}</Text>
            <View style={ styles.CheckboxesStyles }>
                <View style={styles.CheckBoxFieldStyle} >
                    <CheckBox
                            tintColors={{true: PrimaryTextColor}}
                            disabled={false}
                            value={op1CheckboxStatus}
                            onValueChange={(newValue) => {changeOp1CheckboxStatus(newValue), changeOp2CheckboxStatus(!newValue), handler(newValue) } }
                           
                            />
                    <Text style={ styles.CheckboxTextOpt }>{op1}</Text>
                </View>
                <View style={styles.CheckBoxFieldStyle} >
                    <CheckBox
                            tintColors={{true: PrimaryTextColor}}
                            disabled={false}
                            value={op2CheckboxStatus}
                            onValueChange={(newValue) => {changeOp2CheckboxStatus(newValue), changeOp1CheckboxStatus(!newValue), handler(!newValue) } }
                            
                            />
                    <Text style={ styles.CheckboxTextOpt }>{op2}</Text>
                </View>
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
