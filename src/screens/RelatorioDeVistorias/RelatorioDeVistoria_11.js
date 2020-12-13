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

export default function RelatorioDeVistoria_11({navigation}) {
    
    const [quantidadeDeAcordoComMemorial, changeQuantidadeDeAcordoComMemorial] = useState(false)
    const [treinamentoRealizadoComProfissional, changeTreinamentoRealizadoComProfissional] = useState(false)
    const [calculoPresenteNoProjeto, changeCalculoPresenteNoProjeto] = useState(false)
    const [apresentarFAT, ChangeApresentarFAT] = useState(false)
    const [brigadaAprovadaNoTeste, changeBrigadaAprovadaNoTeste] = useState(false)
    const [caminhamentoDe30mParaBotoeira, changeCaminhamentoDe30mParaBotoeira] = useState(false)
    const [outrosItensObservados7, ChangeOutrosItensObservados7] = useState(false)

    return (
        <ScrollView style={styles.Page}>
            <View style={styles.Header}>
                <Titulo title = "Medidas de segurança contra Incêncio e Emergência" />
                <View style={styles.HeaderRowContainer}>
                    <ProgressCircle  
                        percent={88}
                        radius={25}
                        borderWidth={4}
                        color= {YesColor}
                        shadowColor= {SecondaryTextColor}
                        bgColor="#fff">
                        <Text>{'11/13'}</Text>
                    </ProgressCircle>
                    <View style={styles.TitlesContainer}>
                        <Subtitulo text= 'Brigada de Incêndio'/>
                        <ProximaPagina text = "Próx: Armazenamento e Comercialização de GLP" />
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <Table borderStyle={{borderWidth: 0}} >
                    <Row data = {['Não Consta', 'imagem']} flexArr={[2,1]} style={{height: 40}} textStyle={styles.textTitle} />
                    <Row data = {['Medidas', 'SIM', 'NÃO']} flexArr={[4,1,1]} style={{height: 40}} textStyle={styles.textTitle} />

                    <OptionsRow title = 'Quantidade de acordo com o memorial' color = {OptionsOffsetColor} />
                    <OptionsRow title = 'Treinamento realizado por profissional/empresa cadastrada' />
                    <OptionsRow title = 'Cálculo presente no projeto' color = {OptionsOffsetColor} />
                    <OptionsRow title = 'Apresentar FAT atualizando quantidade de brigadistas' />
                    <OptionsRow title = 'Brigada aprovada no teste' color = {OptionsOffsetColor} />
                    <OptionsRow title = 'Outros itens observados' />

                </Table>
            </View>

            <BottomMenu navigation = {navigation} rootPage = "Forms" backwards = "RelatorioDeVistoria_10" forwards = "RelatorioDeVistoria_12" />

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
        alignSelf: 'center',
        width: "50%"
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