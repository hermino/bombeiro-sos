import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { color } from 'react-native-reanimated';
import '../../assets/Colors'
import Constants from 'expo-constants'
import { PrimaryTextColor, SecondaryTextColor, WarningColor, YesColor } from '../../assets/Colors';
import ProgressCircle from 'react-native-progress-circle'

import Titulo from '../../components/Titulo'
import Subtitulo from '../../components/Subtitulo'
import ProximaPagina from '../../components/ProximaPagina'
import TextField from '../../components/TextField'
import CheckBoxFieldInd from '../../components/CheckBoxFieldInd'
import NumeroDeSalas from '../../components/NumeroDeSalas'
import TiposDeAberturas from '../../components/TiposDeAberturas'
import ProdutosPerigosos from '../../components/ProdutosPerigosos'
import ProjetoTecnico from '../../components/ProjetoTecnico'
import Projeto from '../../components/Projeto'
import BottomMenu from '../../components/BottomMenu'

export default function RelatorioDeVistoria_01({navigation}) {


    return (
        <ScrollView style={styles.Header}>
            <Titulo title = "Informações Técnicas" />
            <View style={styles.HeaderRowContainer}>
                <ProgressCircle  
                    percent={8}
                    radius={25}
                    borderWidth={4}
                    color= {YesColor}
                    shadowColor= {SecondaryTextColor}
                    bgColor="#fff">
                    <Text>{'1/13'}</Text>
                </ProgressCircle>
                <View style={styles.TitlesContainer}>
                    <Subtitulo text= ''/>
                    <ProximaPagina text = "Próx: Saída de Emergência" />
                </View>
            </View>

            <TextField text = "Processo nº:"/>
            <TextField text = "Área Edificada:" />
            <TextField text = "Área Informada:" />

            <CheckBoxFieldInd text="ART/RRT:" op1="Execução" op2="Manutenção"/>
            <CheckBoxFieldInd text="DARE (Conforme Área):" op1="Sim" op2="Não"/>
            <CheckBoxFieldInd text="Edificação Térrea:" op1="Sim" op2="Não"/>
            <CheckBoxFieldInd text="Edificação Isolada:" op1="Sim" op2="Não"/>
            <CheckBoxFieldInd text="Parede Única:" op1="Sim" op2="Não"/>

            <TextField text = "Nº de Pavimentos" />

            <NumeroDeSalas 
                text="Nº de Salas:" 
                op1 = "Ocupadas:" 
                op2= "Desocupadas:" 
                obs = "Identificar no verso todos os P. ou R. da edificação" />

            <CheckBoxFieldInd text="Abertura Interpredial" op1="Sim" op2="Não" />

            <TiposDeAberturas 
                text = "Tipos de Abertura"
                op1 = "Portas"
                op2 = "Janelas"
                op3 = "Telhados" />

            <ProdutosPerigosos
                text = "ARM de Produtos Perigoso"
                op1 = "Sim"
                op2 = "Não"
                />
            
            <ProjetoTecnico
                text = "Projeto Técnico"
                op1 = "Sim"
                op2 = "Não"
            />
            
            <CheckBoxFieldInd text="Sistema Atende:" op1="Sim" op2="Não"/>

            <Projeto 
                text = "Projeto"
                op1 = "Apresentar"
                op2 = "Substituir"
                op3 = "Atualizar"
            />

            <BottomMenu navigation = {navigation} rootPage = "Forms" backwards = "RelatorioDeVistoria_13" forwards = "RelatorioDeVistoria_02" />
            

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    Header: {
        flex: 1,
        marginBottom: 0
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
    }

});

