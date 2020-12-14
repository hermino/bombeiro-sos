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

export default function RelatorioDeVistoria_12({navigation}) {
    
    const [observações, changeObservações] = useState('')

    const info = {
        "observações": observações
    }

    return (
        <ScrollView style={styles.Page}>
            <View style={styles.Header}>
            <Titulo title = "Medidas de segurança contra Incêncio e Emergência" />
            <View style={styles.HeaderRowContainer}>
                <ProgressCircle  
                    percent={100}
                    radius={25}
                    borderWidth={4}
                    color= {YesColor}
                    shadowColor= {SecondaryTextColor}
                    bgColor="#fff">
                    <Text>{'13/13'}</Text>
                </ProgressCircle>
                <View style={styles.TitlesContainer}>
                    <Subtitulo text= 'Observações'/>
                    <ProximaPagina text = "" />
                </View>
            </View>
            </View>
            
            <View style={styles.ContentStyle}>
            
                <View style={styles.container}>
                    <TextInput multiline={true} style={styles.textInputStyle} value={observações} onChange = {() => changeObservações(value)} />
                </View>

                <View style={styles.BottomMenuStyle}>
                    <BottomMenu field = {info} navigation = {navigation} rootPage = "Forms" backwards = "RelatorioDeVistoria_12" forwards = "Confirmacao" />
                </View>

            </View>
            
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
    ContentStyle:{
        flex: 1,
        justifyContent: 'space-between'
    },  
    container:{
        flex: 1,
        top: 20,
        alignSelf: 'center',
        width: "90%"
    },
    textInputStyle:{
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 300,
        borderWidth: 0.5,
        textAlignVertical: 'top',
        
    },
    BottomMenuStyle:{
        flex:1,
        justifyContent: 'flex-end'
    }

});