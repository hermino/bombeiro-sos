import React, { Component } from 'react'
import ProgressCircle from 'react-native-progress-circle'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import { SecondaryTextColor, YesColor } from '../assets/Colors'


import ProximaPagina from '../components/ProximaPagina'

export default function indexPages ({navigation}){

    const FillCircles = ({onPress, number, title, percent }) => (
        <View style={styles.RowsJustified} >
            <TouchableOpacity onPress={onPress}>
                <View style={styles.FillCirclesContainer}>
                    <ProgressCircle  
                        percent={percent}
                        radius={25}
                        borderWidth={4}
                        color= {YesColor}
                        shadowColor= {SecondaryTextColor}
                        bgColor="#fff">
                        <Text>{number}</Text>
                    </ProgressCircle>
                    <ProximaPagina text= {title} />    
                </View>
            </TouchableOpacity>
        </View>
    )

    return(
        <ScrollView style={styles.Page}>
            <View style={styles.FillCirclesRow}>
                <FillCircles onPress={() => { navigation.navigate( 'Forms' , { screen: 'RelatorioDeVistoria_01' }) }} number= '1' percent = {8} title = "Informações Técnicas" />
                <FillCircles onPress={() => { navigation.navigate( 'Forms' , { screen: 'RelatorioDeVistoria_02' }) }} number= '2' percent = {16} title = "Saídas de Emergência" />
            </View>

            <View style={styles.FillCirclesRow}>
                <FillCircles onPress={() => { navigation.navigate( 'Forms' , { screen: 'RelatorioDeVistoria_03' }) }} number= '3' percent = {24} title = "Iluminação de Emergência" />
                <FillCircles onPress={() => { navigation.navigate( 'Forms' , { screen: 'RelatorioDeVistoria_04' }) }} number= '4' percent = {32} title = "Sinalização de Emergência" />
            </View>

            <View style={styles.FillCirclesRow}>
                
                    <FillCircles onPress={() => { navigation.navigate( 'Forms' , { screen: 'RelatorioDeVistoria_05' }) }} number= '5' percent = {40} title = "Sistema de Hidrantes" />
               
                    <FillCircles onPress={() => { navigation.navigate( 'Forms' , { screen: 'RelatorioDeVistoria_06' }) }} number= '6' percent = {48} title = "Extintores" />
                
            </View>

            <View style={styles.FillCirclesRow}>
                <FillCircles onPress={() => { navigation.navigate( 'Forms' , { screen: 'RelatorioDeVistoria_07' }) }} number= '7' percent = {56} title = "Sistema de alarme e detecção" />
                <FillCircles onPress={() => { navigation.navigate( 'Forms' , { screen: 'RelatorioDeVistoria_08' }) }} number= '8' percent = {64} title = "Detectores Pontuais de Fumaça" />
            </View>

            <View style={styles.FillCirclesRow}>
                <FillCircles onPress={() => { navigation.navigate( 'Forms' , { screen: 'RelatorioDeVistoria_09' }) }} number= '9' percent = {72} title = "Detectores de Temperatura" />
                <FillCircles onPress={() => { navigation.navigate( 'Forms' , { screen: 'RelatorioDeVistoria_10' }) }} number= '10' percent = {80} title = "Chuveiros Automáticas" />
            </View>

            <View style={styles.FillCirclesRow}>
                <FillCircles onPress={() => { navigation.navigate( 'Forms' , { screen: 'RelatorioDeVistoria_11' }) }} number= '11' percent = {88} title = "Brigada de incêndio" />
                <FillCircles onPress={() => { navigation.navigate( 'Forms' , { screen: 'RelatorioDeVistoria_12' }) }} number= '12' percent = {95} title = "Armazenamento e Comercialização de GLP" />
            </View>

            <View style={styles.FillCirclesRow}>
                <FillCircles onPress={() => { navigation.navigate( 'Forms' , { screen: 'RelatorioDeVistoria_13' }) }} number= '13' percent = {100} title = "Observações" />
            </View>

        </ScrollView>
    )

}

const styles = StyleSheet.create({
    Page:{
        backgroundColor: '#fff'
    },
    FillCirclesContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    FillCirclesRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    RowsJustified: {
        flex: 1,
        marginHorizontal: 20
    }
})