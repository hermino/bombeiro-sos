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

export default function RelatorioDeVistoria_02({navigation}) {
    
    const [larguraPorta, ChangeLarguraPorta] = useState(false)
    const [larguraEscada, ChangeLarguraEscada] = useState(false)
    const [pisoAntiderrapante, ChangePisoAntiderrapante] = useState(false)
    const [guardaCorpoAltura, ChangeGuardaCorpoAltura] = useState(false)
    const [detrancadas, ChangeDestrancadas] = useState(false)
    const [corrimaoAmbosOsLados, ChangeCorrimaoAmbosOsLados] = useState(false)
    const [corrimaoMezanino, ChangeCorrimaoMezanino] = useState(false)
    const [materialEscada, ChangeMaterialEscada] = useState(false)
    const [barrasAntipanico, ChangeBarrasAntipanico] = useState(false)
    const [outrosItensObservados1, ChangeOutrosItensObservados1] = useState(false)

    return (
        <ScrollView style={styles.Page}>
            <View style={styles.Header}>
                <Titulo title = "Medidas de segurança contra Incêncio e Emergência" />
                <View style={styles.HeaderRowContainer}>
                    <ProgressCircle  
                        percent={16}
                        radius={25}
                        borderWidth={4}
                        color= {YesColor}
                        shadowColor= {SecondaryTextColor}
                        bgColor="#fff">
                        <Text>{'2/13'}</Text>
                    </ProgressCircle>
                    <View style={styles.TitlesContainer}>
                        <Subtitulo text= 'Saída de Emergência'/>
                        <ProximaPagina text = "Próx: Iluminação de Emergência" />
                    </View>
                </View>
            </View>

            <View style={styles.container}>
                <Table borderStyle={{borderWidth: 0}} >
                    <Row data = {['Não Consta', 'imagem']} flexArr={[2,1]} style={{height: 40, borderWidth:0}} textStyle={styles.textTitle} />
                    <Row data = {['Medidas', 'SIM', 'NÃO']} flexArr={[4,1,1]} style={{height: 40}} textStyle={styles.textTitle} />

                    <OptionsRow title = 'Largura das portas (saídas)' color = {OptionsOffsetColor} parentOption = {ChangeLarguraPorta}  />
                    <OptionsRow title = 'Largura das escadas' parentOption = {ChangeLarguraEscada}/>
                    <OptionsRow title = 'Piso antiderrapante' color = {OptionsOffsetColor} parentOption = {ChangePisoAntiderrapante}/>
                    <OptionsRow title = 'Guarda corpo altura e longarinas 15 cm de espaçamento' parentOption = {ChangeGuardaCorpoAltura}/>

                    <OptionsRow title = 'Estão desobstruídas destrancadas' color = {OptionsOffsetColor} parentOption = {ChangeDestrancadas}/>
                    <OptionsRow title = 'Corrimão em ambos os lados' parentOption = {ChangeCorrimaoAmbosOsLados}/>
                    <OptionsRow title = 'Corrimão 01 lado mezanino com até 20 pessoas' color = {OptionsOffsetColor} parentOption = {ChangeCorrimaoMezanino}/>
                    <OptionsRow title = 'Material escada incombustível' parentOption = {ChangeMaterialEscada}/>

                    <OptionsRow title = 'Barras antipânico em todas as saídas' color = {OptionsOffsetColor} parentOption = {ChangeBarrasAntipanico} />
                    <OptionsRow title = 'Outros itens observados' parentOption = {ChangeOutrosItensObservados1}/>

                </Table>
            </View>

            <BottomMenu navigation = {navigation} rootPage = "Forms" backwards = "RelatorioDeVistoria_01" forwards = "RelatorioDeVistoria_03" />

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
        fontSize: 18
    }

});

