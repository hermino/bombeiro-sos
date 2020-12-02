import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Col, Cols, Cell, Row, Rows } from 'react-native-table-component';

import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox'; 
import { NoColor, OptionsOffsetColor, PrimaryTextColor, SecondaryTextColor, YesColor } from '../assets/Colors';

const OptionNome = ({title1,  title2, onPress}) => {

  const [YesCheckedValue, setYesToggleCheckBox] = useState(false)
  const [NoCheckedValue, setNoToggleCheckBox] = useState(false)

  const ButtonNome = () => (
    <View style={styles.CheckButtonView}>
        <CircleCheckBox
          onPress={onPress}
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

  const ButtonData = () => (
    <View style={styles.CheckButtonView}>
        <CircleCheckBox
          checked={NoCheckedValue}
          onToggle={(newValue) => {
            setYesToggleCheckBox(!newValue)
            setNoToggleCheckBox(newValue)} }
          labelPosition={LABEL_POSITION.RIGHT}
          outerColor = {SecondaryTextColor}
          innerColor = {YesColor}
        />
    </View>
  )



    return (     
        <Row 
            data = { [ButtonNome(), title1, ButtonData(), title2] } 
            flexArr = {[0,-2,-2,0]} 
            style = {{height: 60}}
            textStyle = {styles.text}
        > 
        </Row>
    )

}
 
const styles = StyleSheet.create({
  CheckButtonView: {
    alignSelf:'center',
    left: 16,
  },
  text:{
      fontWeight: "bold",
      color: "#1F2D3D",
      textAlign: 'center',
      fontSize: 18,
      right: 30,
  }
});

export default OptionNome;