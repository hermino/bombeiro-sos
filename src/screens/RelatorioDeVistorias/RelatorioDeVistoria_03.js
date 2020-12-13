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

export default function RelatorioDeVistoria_03({navigation}) {
    
    const [alturaInstalacao, ChangeAlturaInstalacao] = useState(false)
    const [distanciaEntreLuminarias, ChangeDistanciaEntreLuminarias] = useState(false)
    const [edificacaoSuperior, ChangeEdificacaoSuperior] = useState(false)
    const [corredoresInternosMoteis, ChangeCorredoresInternosMoteis] = useState(false)
    const [testeDeFuncionamento, ChangeTesteDeFuncionamento] = useState(false)
    const [edificacaoComLotacaoSuperior, ChangeEdificacaoComLotacaoSuperior] = useState(false)
    const [outrosItensObservados2, ChangeOutrosItensObservados2] = useState(false)

    const info = {
        "alturaInstalacao": alturaInstalacao,
        "distanciaEntreLuminarias": distanciaEntreLuminarias,
        "edificacaoSuperior": edificacaoSuperior,
        "corredoresInternosMoteis": corredoresInternosMoteis,
        "testeDeFuncionamento": testeDeFuncionamento,
        "edificacaoComLotacaoSuperior": edificacaoComLotacaoSuperior,
        "outrosItensObservados2": outrosItensObservados2,
    }
    
    return (
        <ScrollView style={styles.Page}>
            <View style={styles.Header}>
                <Titulo title = "Medidas de segurança contra Incêncio e Emergência" />
                <View style={styles.HeaderRowContainer}>
                    <ProgressCircle  
                        percent={24}
                        radius={25}
                        borderWidth={4}
                        color= {YesColor}
                        shadowColor= {SecondaryTextColor}
                        bgColor="#fff">
                        <Text>{'3/13'}</Text>
                    </ProgressCircle>
                    <View style={styles.TitlesContainer}>
                        <Subtitulo text= 'Iluminação de Emergência'/>
                        <ProximaPagina text = "Próx: Sinalização de Emergência" />
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <Table borderStyle={{borderWidth: 0}} >
                    <Row data = {['Não Consta', 'imagem']} flexArr={[2,1]} style={{height: 40}} textStyle={styles.textTitle} />
                    <Row data = {['Medidas', 'SIM', 'NÃO']} flexArr={[4,1,1]} style={{height: 40}} textStyle={styles.textTitle} />

                    <OptionsRow title = 'Altura de instalação' color = {OptionsOffsetColor} parentOption={ChangeAlturaInstalacao} />
                    <OptionsRow title = 'Distância entre luminárias 15m' parentOption={ChangeDistanciaEntreLuminarias} />
                    <OptionsRow title = 'Edificação superior a 5m ocupação A, D, E e G' color = {OptionsOffsetColor} parentOption={ChangeEdificacaoSuperior} />
                    <OptionsRow title = 'Motéis que não possuem corredores internos (isentos)' parentOption={ChangeCorredoresInternosMoteis} />
                    <OptionsRow title = 'Teste de funcionamento aprovado' color = {OptionsOffsetColor} parentOption={ChangeTesteDeFuncionamento}/>
                    <OptionsRow title = 'Edificação com lotação superior a 50 pessoas ou altura superior a 5m ocupação grupo F' parentOption={ChangeEdificacaoComLotacaoSuperior}/>
                    <OptionsRow title = 'Outros itens observados' color = {OptionsOffsetColor} parentOption={ChangeOutrosItensObservados2} />
                </Table>
            </View>

            <BottomMenu navigation = {navigation} rootPage = "Forms" backwards = "RelatorioDeVistoria_02" forwards = "RelatorioDeVistoria_04" />

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

