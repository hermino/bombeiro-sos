import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Col, Cols, Cell, Row, Rows } from 'react-native-table-component';

import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox'; 
import { NoColor, OptionsOffsetColor, PrimaryTextColor, SecondaryTextColor, YesColor } from '../assets/Colors';

import OptionsRow from './OptionsRow'

export default function TablesTest({}){

    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 0}} >
            <Row data = {['Não Consta', 'imagem']} flexArr={[2,1]} style={{height: 40}} textStyle={styles.textTitle} />
            <Row data = {['Medidas', 'SIM', 'NÃO']} flexArr={[4,1,1]} style={{height: 40}} textStyle={styles.textTitle} />

            <OptionsRow title = 'Largura das portas (saídas)' color = {OptionsOffsetColor} />
            <OptionsRow title = 'Largura das escadas' />
            <OptionsRow title = 'Piso antiderrapante' color = {OptionsOffsetColor} />
            <OptionsRow title = 'Guarda corpo altura e longarinas 15 cm de espaçamento' />
            
        </Table>
      </View>
    )

}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 50, backgroundColor: '#fff' },
  CheckButtonView: {
    alignSelf:'center'
  },
  textTitle:{
    fontWeight: 'bold',
    color: PrimaryTextColor,
    textAlign: 'center',
    fontSize: 18
  }
});