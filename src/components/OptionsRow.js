import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Col, Cols, Cell, Row, Rows } from 'react-native-table-component';

import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox'; 
import { NoColor, OptionsOffsetColor, PrimaryTextColor, SecondaryTextColor, YesColor } from '../assets/Colors';

const OptionsRow = ({title, color}) => {

  const [YesCheckedValue, setYesToggleCheckBox] = useState(false)
  const [NoCheckedValue, setNoToggleCheckBox] = useState(false)

  const YesButton = () => (
    <View style={styles.CheckButtonView}>
        <CircleCheckBox
          checked={YesCheckedValue}
          onToggle={(newValue) => {
            setYesToggleCheckBox(newValue)
            setNoToggleCheckBox(!newValue)
          }}
          labelPosition={LABEL_POSITION.RIGHT}
          outerColor = {SecondaryTextColor}
          innerColor = {YesColor}
        />
    </View>
  )

  const NoButton = () => (
    <View style={styles.CheckButtonView}>
        <CircleCheckBox
          checked={NoCheckedValue}
          onToggle={(newValue) => {
            setYesToggleCheckBox(!newValue)
            setNoToggleCheckBox(newValue)} }
          labelPosition={LABEL_POSITION.RIGHT}
          outerColor = {SecondaryTextColor}
          innerColor = {NoColor}
        />
    </View>
  )

    return (     
        <Row 
            data = { [ title, YesButton() , NoButton()] } 
            flexArr={[4,1,1]} 
            style={{height: 60, backgroundColor: color}} 
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