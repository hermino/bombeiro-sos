import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import '../../assets/Colors'
import { OptionsOffsetColor, PrimaryTextColor, SecondaryTextColor, WarningColor, YesColor } from '../../assets/Colors';
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

    const [numeroProcesso, changeNumeroProcesso] = useState('')
    const [areaEdificada, changeAreaEdificada] = useState('')
    const [areaInformada, changeAreaInformada] = useState('')
    const [ART_RRT, changeART_RRT] = useState('')
    const [DARE, changeDARE] = useState('')
    const [edificaçãoTerrea, changeEdificaçãoTerrea] = useState('')
    const [edificaçãoIsolada, changeEdificaçãoIsolada] = useState('')
    const [paredeUnica, changeParedeUnica] = useState('')
    const [numeroDePavimentos, changeNumeroDePavimentos] = useState('')
    const [numeroDeSalasOcupadas, changeNumeroDeSalasOcupadas] = useState('')
    const [numeroDeSalasDesocupadas, changeNumeroDeSalasDesocupadas] = useState('')
    const [aberturaInterpredial, changeAberturaInterpredial] = useState('')
    const [tiposDeAberturas, changeTiposDeAberturas] = useState('')
    const [outrosTiposDeAberturas, changeOutrosTiposDeAberturas] = useState('')
    const [ARMdeProdutosPerigosos, changeARMdeProdutosPerigosos] = useState('')
    const [ARMdeProdutosPerigososTipos, changeARMdeProdutosPerigososTipos] = useState('')
    const [projetoTecnico, changeProjetoTecnico] = useState('')
    const [projetoTecnicoCAP_N, changeProjetoTecnicoCAP_N] = useState('')
    const [sistemaAtende, changeSistemaAtende] = useState('')
    const [projeto, changeProjeto] = useState('')

    const info = {
        "numeroProcesso": numeroProcesso,
        "areaEdificada": areaEdificada,
        "areaInformada": areaInformada, 
        "ART_RRT": ART_RRT,
        "DARE": DARE,
        "edificaçãoTerrea": edificaçãoTerrea,
        "edificaçãoIsolada": edificaçãoIsolada,
        "paredeUnica": paredeUnica,
        "numeroDePavimentos": numeroDePavimentos,
        "numeroDeSalasOcupadas": numeroDeSalasOcupadas,
        "numeroDeSalasDesocupadas": numeroDeSalasDesocupadas,
        "aberturaInterpredial": aberturaInterpredial,
        "tiposDeAberturas": tiposDeAberturas,
        "outrosTiposDeAberturas": outrosTiposDeAberturas,
        "ARMdeProdutosPerigosos": ARMdeProdutosPerigosos,
        "ARMdeProdutosPerigososTipos": ARMdeProdutosPerigososTipos,
        "projetoTecnico": projetoTecnico,
        "projetoTecnicoCAP_N": projetoTecnicoCAP_N,
        "sistemaAtende": sistemaAtende,
        "projeto": projeto,
        
        "larguraPorta" : null,
        "larguraEscada": null,
        "pisoAntiderrapante": null,
        "guardaCorpoAltura": null,
        "detrancadas" : null,
        "corrimaoAmbosOsLados": null,
        "corrimaoMezanino": null,
        "materialEscada": null,
        "barrasAntipanico": null,
        "outrosItensObservados1": null,
        "alturaInstalacao": null,
        "distanciaEntreLuminarias": null,
        "edificacaoSuperior": null,
        "corredoresInternosMoteis": null,
        "testeDeFuncionamento": null,
        "edificacaoComLotacaoSuperior": null,
        "outrosItensObservados2": null,

        "alturaInstalacaoSinalização": null,
        "tamanhoSinalização": null,
        "coresCorrespondentes": null,
        "formaGeometrica": null,
        "distanciaMaximaVisualização": null,
        "outrosItensObservados3": null,

        "hidranteA5mDaSaida": null,
        "abrigosDesobstruidos": null,
        "coberturaEmTodaArea": null,
        "funcionamentoBombaAutomatico": null,
        "botoeirasEmTodosAbrigos": null,
        "pressurizaçãoPorBomba": null,
        "ligaçãoIndependente": null,
        "delisgamentoBombaManual": null,
        "abrigosComTodosEquipamentos": null,
        "tubulaçãoAparenteDeFerro": null,
        "RTIIndependente": null,
        "saidaDeConsumoDeAguaPredial": null,
        "pressurizaçãoPorGravidade": null,
        "outrosItensObservados4": null,

        "quantidadeAtende" : null,
        "instalação" : null,
        "sinalização" : null,
        "desobstruídos" : null,
        "pressaoNormal" : null,
        "seloImetroRecarga" : null,
        "seloImetroNovo" : null,
        "outrosItensObservados5" : null,

        "centralDeAlarmeEmLocal":null,
        "caminhamentoDe30mParaBotoeira":null,
        "audivelEmTodaEdificação":null,
        "outrosItensObservados6":null,

        "areaDeAção81m" : null,
        "raioDeAção6" : null,

        "areaDeAção36m" : null,
        "raioDeAção4" : null,

        "acionamentoDeBombaAutomatico": null,
        "caminhamentoDe30mParaBotoeira": null,
        "saidaTesteDoSistema": null,
        "outrosItensObservados7": null,

        "quantidadeDeAcordoComMemorial": null,
        "treinamentoRealizadoComProfissional": null,
        "calculoPresenteNoProjeto": null,
        "apresentarFAT": null,
        "brigadaAprovadaNoTeste": null,
        "caminhamentoDe30mParaBotoeira": null,
        "outrosItensObservados8": null,

        "retirarDoInteriorDaEdificação":null,
        "utilizaCentralDaGLP":null,
        "distanciasDeSegurançaAtendem":null,
        "outrosItensObservados9":null,

        "observações": null
    }
    
    return (
        <ScrollView style={styles.Page}>
            <View style={styles.Header}>
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
            </View>

            <TextField text = "Processo nº:" value = {numeroProcesso} handler = {(newValue) => {changeNumeroProcesso(newValue) }}/>
            <TextField text = "Área Edificada:" value = {areaEdificada} handler = {(newValue) => {changeAreaEdificada(newValue) }} />
            <TextField text = "Área Informada:" value = {areaInformada} handler = {(newValue) => {changeAreaInformada(newValue) }} />

            <CheckBoxFieldInd text="ART/RRT:" op1="Execução" op2="Manutenção" value = {ART_RRT} handler = {(newValue) => {changeART_RRT(newValue)}} />
            <CheckBoxFieldInd text="DARE (Conforme Área):" op1="Sim" op2="Não" value = {DARE} handler = {(newValue) => {changeDARE(newValue)}} />
            <CheckBoxFieldInd text="Edificação Térrea:" op1="Sim" op2="Não" value = {edificaçãoTerrea} handler = {(newValue) => {changeEdificaçãoTerrea(newValue)}} />
            <CheckBoxFieldInd text="Edificação Isolada:" op1="Sim" op2="Não" value = {edificaçãoIsolada} handler = {(newValue) => {changeEdificaçãoIsolada(newValue)}}/>
            <CheckBoxFieldInd text="Parede Única:" op1="Sim" op2="Não" value = {paredeUnica} handler = {(newValue) => {changeParedeUnica(newValue)}}/>

            <TextField text = "Nº de Pavimentos" value = {numeroDePavimentos} handler = {(newValue) => {changeNumeroDePavimentos(newValue) }}  />

            <NumeroDeSalas 
                text="Nº de Salas:" 
                op1 = "Ocupadas:" 
                op2= "Desocupadas:" 
                obs = "Identificar no verso todos os P. ou R. da edificação"
                value1 = {numeroDeSalasOcupadas}
                handler1 = {(newValue) => {changeNumeroDeSalasOcupadas(newValue)} }
                value2 = {numeroDeSalasDesocupadas}
                handler2 = {(newValue) => {changeNumeroDeSalasDesocupadas(newValue)} } />

            <CheckBoxFieldInd text="Abertura Interpredial" op1="Sim" op2="Não" value = {aberturaInterpredial} handler = {(newValue) => {changeAberturaInterpredial(newValue)}}  />

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

            <BottomMenu field={info} navigation = {navigation} rootPage = "Forms" backwards = "RelatorioDeVistoria_13" forwards = "RelatorioDeVistoria_02" />
            

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
    }

});

