import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { color } from 'react-native-reanimated';
import '../../assets/Colors'
import { PrimaryTextColor, SecondaryTextColor, WarningColor, YesColor, OptionsOffsetColor } from '../../assets/Colors';
import ProgressCircle from 'react-native-progress-circle'

import Titulo from '../../components/Titulo'
import Subtitulo from '../../components/Subtitulo'
import ProximaPagina from '../../components/ProximaPagina'
import BottomMenu from '../../components/BottomMenu'
import { Table, TableWrapper, Col, Cols, Cell, Row, Rows } from 'react-native-table-component';
import OptionsRow from '../../components/OptionsRow'

export default function RelatorioDeVistoria_09({navigation}) {
    
    const [areaDeAção36m, changeAreaDeAção36m] = useState(false)
    const [raioDeAção4, changeRaioDeAção4] = useState(false)

    return (
        <ScrollView style={styles.Page}>
            <View style={styles.Header}>
            <Titulo title = "Medidas de segurança contra Incêncio e Emergência" />
            <View style={styles.HeaderRowContainer}>
                <ProgressCircle  
                    percent={72}
                    radius={25}
                    borderWidth={4}
                    color= {YesColor}
                    shadowColor= {SecondaryTextColor}
                    bgColor="#fff">
                    <Text>{'9/13'}</Text>
                </ProgressCircle>
                <View style={styles.TitlesContainer}>
                    <Subtitulo text= 'Detectores de Temperatura'/>
                    <ProximaPagina text = "Próx: Chuveiros Automáticos" />
                </View>
            </View>
            </View>
            
            <View style={styles.container}>
                <Table borderStyle={{borderWidth: 0}} >
                    <Row data = {['Não Consta', 'imagem']} flexArr={[2,1]} style={{height: 40}} textStyle={styles.textTitle} />
                    <Row data = {['Medidas', 'SIM', 'NÃO']} flexArr={[4,1,1]} style={{height: 40}} textStyle={styles.textTitle} />

                    <OptionsRow title = 'Área de ação 36m² para altura de 5m' color = {OptionsOffsetColor} />
                    <OptionsRow title = 'Raio de ação 4,2m' />

                </Table>
            </View>

            <BottomMenu navigation = {navigation} rootPage = "Forms" backwards = "RelatorioDeVistoria_08" forwards = "RelatorioDeVistoria_10" />

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    Page:{
        flex: 1,
        backgroundColor: '#fff',
    },
    Header: {
        backgroundColor: OptionsOffsetColor
    },
    TitlesContainer: {
        flexDirection: 'column',
        alignSelf: 'center'
    },
    HeaderRowContainer: {
        width: '96%',
        alignItems:'center',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        paddingBottom: 15,
        alignSelf: 'center',
        borderBottomColor: PrimaryTextColor,
        borderBottomWidth: 1
    },
    container: { flex: 1, padding: 0, paddingTop: 10, backgroundColor: '#fff' },
    CheckButtonView: {
        alignSelf:'center'
    },
    textTitle:{
        fontWeight: 'bold',
        color: PrimaryTextColor,
        textAlign: 'center',
        fontSize: 15
    }

});

