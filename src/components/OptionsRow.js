import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Col, Cols, Cell, Row, Rows } from 'react-native-table-component';

import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox'; 
import { NoColor, OptionsOffsetColor, PrimaryTextColor, SecondaryTextColor, YesColor } from '../assets/Colors';

import { RadioButton } from 'react-native-paper'

const OptionsRow = ({title, color, parentOption}) => {


  const [checked, setChecked] = React.useState('')

    return (     
        <Row 
            data = {[ 
                title, 
                <View style={styles.CheckButtonView}>
                  <RadioButton value="yes" status={checked === 'yes' ? 'checked' : 'unchecked'} onPress={() => { setChecked('yes'), parentOption(true) } } color={YesColor}  />
                </View> ,
                <View style={styles.CheckButtonView}>
                  <RadioButton value="no" status={checked === 'no' ? 'checked' : 'unchecked'} onPress={() => { setChecked('no'), parentOption(false) } } color={NoColor} />
                </View> 
              ]} 
            flexArr={[4,1,1]} 
            style={{height: 60, backgroundColor: color, borderWidth: 0}} 
            textStyle ={styles.text}/>
    )

}
 
const styles = StyleSheet.create({
  CheckButtonView: {
    alignSelf:'center'
  },
  text:{
      color: PrimaryTextColor,
      textAlign: 'center',
      marginHorizontal: 10,
      fontSize: 15
  }
});

export default OptionsRow;