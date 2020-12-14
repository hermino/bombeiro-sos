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

export default function RelatorioDeVistoria_06({navigation}) {

    const [quantidadeAtende, changeQuantidadeAtende] = useState(false)
    const [instalação, changeInstalação] = useState(false)
    const [sinalização, changeSinalização] = useState(false)
    const [desobstruídos, changeDesobstruídos] = useState(false)
    const [pressaoNormal, changePressaoNormal] = useState(false)
    const [seloImetroRecarga, changeSeloImetroRecarga] = useState(false)
    const [seloImetroNovo, changeSeloImetroNovo] = useState(false)
    const [outrosItensObservados5, ChangeOutrosItensObservados5] = useState(false)

    const info = {
        "quantidadeAtende" : quantidadeAtende,
        "instalação" : instalação,
        "sinalização" : sinalização,
        "desobstruídos" : desobstruídos,
        "pressaoNormal" : pressaoNormal,
        "seloImetroRecarga" : seloImetroRecarga,
        "seloImetroNovo" : seloImetroNovo,
        "outrosItensObservados5" : outrosItensObservados5,
    }

    return (
        <ScrollView style={styles.Page}>
            <View style={styles.Header}>
            <Titulo title = "Medidas de segurança contra Incêncio e Emergência" />
            <View style={styles.HeaderRowContainer}>
                <ProgressCircle  
                    percent={48}
                    radius={25}
                    borderWidth={4}
                    color= {YesColor}
                    shadowColor= {SecondaryTextColor}
                    bgColor="#fff">
                    <Text>{'6/13'}</Text>
                </ProgressCircle>
                <View style={styles.TitlesContainer}>
                    <Subtitulo text= 'Extintores'/>
                    <ProximaPagina text = "Próx: Sistema de Alarme e Detecção" />
                </View>
            </View>
            </View>
            
            <View style={styles.container}>
                <Table borderStyle={{borderWidth: 0}} >
                    <Row data = {['Não Consta', 'imagem']} flexArr={[2,1]} style={{height: 40}} textStyle={styles.textTitle} />
                    <Row data = {['Medidas', 'SIM', 'NÃO']} flexArr={[4,1,1]} style={{height: 40}} textStyle={styles.textTitle} />

                    <OptionsRow title = 'Qualidade atende' color = {OptionsOffsetColor} />
                    <OptionsRow title = 'Instalação' />
                    <OptionsRow title = 'Sinalização' color = {OptionsOffsetColor} />
                    <OptionsRow title = 'Desobstruídos' />
                    <OptionsRow title = 'Pressão normal' color = {OptionsOffsetColor} />
                    <OptionsRow title = 'Selo Inmetro recarga' />
                    <OptionsRow title = 'Selo Inmetro novos' color = {OptionsOffsetColor} />
                    <OptionsRow title = 'Outros itens observados' />

                </Table>
            </View>

            <BottomMenu field={info} navigation = {navigation} rootPage = "Forms" backwards = "RelatorioDeVistoria_05" forwards = "RelatorioDeVistoria_07" />

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

