import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import '../../assets/Colors'
import { PrimaryTextColor, SecondaryTextColor, WarningColor, YesColor, OptionsOffsetColor } from '../../assets/Colors';
import ProgressCircle from 'react-native-progress-circle'

import Titulo from '../../components/Titulo'
import Subtitulo from '../../components/Subtitulo'
import ProximaPagina from '../../components/ProximaPagina'
import BottomMenu from '../../components/BottomMenu'
import { Table, TableWrapper, Col, Cols, Cell, Row, Rows } from 'react-native-table-component';
import OptionsRow from '../../components/OptionsRow'

export default function RelatorioDeVistoria_10({navigation}) {
    
    const [acionamentoDeBombaAutomatico, changeAcionamentoDeBombaAutomatico] = useState(false)
    const [caminhamentoDe30mParaBotoeira, changeCaminhamentoDe30mParaBotoeira] = useState(false)
    const [saidaTesteDoSistema, changeSaidaTesteDoSistema] = useState(false)
    const [outrosItensObservados6, ChangeOutrosItensObservados6] = useState(false)

    const info = {
        "acionamentoDeBombaAutomatico": acionamentoDeBombaAutomatico,
        "caminhamentoDe30mParaBotoeira": caminhamentoDe30mParaBotoeira,
        "saidaTesteDoSistema": saidaTesteDoSistema,
        "outrosItensObservados7": outrosItensObservados7,
    }

    return (
        <ScrollView style={styles.Page}>
            <View style={styles.Header}>
            <Titulo title = "Medidas de segurança contra Incêncio e Emergência" />
            <View style={styles.HeaderRowContainer}>
                <ProgressCircle  
                    percent={80}
                    radius={25}
                    borderWidth={4}
                    color= {YesColor}
                    shadowColor= {SecondaryTextColor}
                    bgColor="#fff">
                    <Text>{'10/13'}</Text>
                </ProgressCircle>
                <View style={styles.TitlesContainer}>
                    <Subtitulo text= 'Chuveiros Automáticos'/>
                    <ProximaPagina text = "Próx: Brigada de Incêndio" />
                </View>
            </View>
            </View>

            <View style={styles.container}>
                <Table borderStyle={{borderWidth: 0}} >
                    <Row data = {['Não Consta', 'imagem']} flexArr={[2,1]} style={{height: 40}} textStyle={styles.textTitle} />
                    <Row data = {['Medidas', 'SIM', 'NÃO']} flexArr={[4,1,1]} style={{height: 40}} textStyle={styles.textTitle} />

                    <OptionsRow title = 'Acionamento da bomba automático' color = {OptionsOffsetColor} />
                    <OptionsRow title = 'Desligamento manual na casa de bombas' />
                    <OptionsRow title = 'Saída teste do sistema' color = {OptionsOffsetColor} />
                    <OptionsRow title = 'Outros itens observados' />

                </Table>
            </View>

            <BottomMenu field={info} navigation = {navigation} rootPage = "Forms" backwards = "RelatorioDeVistoria_09" forwards = "RelatorioDeVistoria_11" />

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