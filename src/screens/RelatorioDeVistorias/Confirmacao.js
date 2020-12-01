import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { ButtonRed, PrimaryTextColor, SecondaryTextColor, WarningColor, MaisDetalhesColor } from '../../assets/Colors';
import CheckBox from '@react-native-community/checkbox'

export default function Confirmacao(){
    
    TouchableOpacity.defaultProps = { activeOpacity: 0.6 };

    const PreVis = ({onPress, title}) => (
        <View style={styles.PreVisView}>
            <TouchableOpacity onPress={onPress} style={styles.PreVisButtonContainer}>
                <Text style={styles.PreVisButtonText}>{title}</Text>
            </TouchableOpacity>
        </View>
        
    )

    const SaveButton = ({onPress, title}) => (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.SaveButtonContainer}>
                <Text style={styles.SaveButtonText}>{title}</Text>
            </TouchableOpacity>
        </View>
        
    )

    const SendButton = ({onPress, title}) => (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.SendButtonContainer}>
                <Text style={styles.SendButtonText}>{title}</Text>
            </TouchableOpacity>
        </View>
        
    )

    const Intructions = ({text}) => (
        <View style={styles.InstructionsView}>
            <Text style={styles.IntructionsStyle} >{text}</Text>
        </View>
        
    )

    const Obs = ({text}) => (
        <Text style={styles.ObsStyle}>{text}</Text>
    )

    const CheckBoxField = ({text}) => (
        <View style={styles.CheckBoxFieldStyle}>
            <CheckBox
                tintColors={{true: ButtonRed}}
                disabled={false}/>
            <Text style={styles.CheckBoxFieldTextStyle}>{text}</Text>
            <Obs text = '*'/>
        </View>
    )

    const MaisDetalhesButton = () => Alert.alert(
        "Declaração de veracidade das informações prestadas",
        "Declaro, para fins de direito, sob as penas da lei e em atendimento à portaria nº 108, de 12 de Julho de 2019, \
        que as informações prestadas neste documento são verdadeiras, autênticas e condizentes com a realidade do estabelecimento \
        vistoriado. Nada mais declarar, e ciente das responsabilidades pelas declarações prestadas, firmo a presente declaração.",
        [
    
            { text: "ACEITAR", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
    )
    
    const MaisDetalhes = ({text}) => (
        <TouchableOpacity style={styles.MaisDetalhesStyle} onPress={MaisDetalhesButton}>
            <Text style={styles.MaisDetalhesTextStyle}>{text}</Text>
        </TouchableOpacity>
    )

    const InputTextField = ({title, placeholder}) => (
        <View style={styles.InputTextFieldView}>
            <View style={styles.TitleInputTextStyle}>
                <Text>{title}</Text>
                <Obs text="*"/>
            </View>
            <TextInput 
                placeholder = {"Insira o " + placeholder}  
                style={styles.TitleInputStyle}/>
        </View>
    )

    const SalvarEnviarButtons = ({}) => (
        <View style={styles.SalvarEnviarButtonsStyle}>
            <SendButton title="Enviar"/>
            <SaveButton title="Salvar"/>
        </View>
    )

    return(
        <View style={styles.ConfirmacaoScreen}>
            <PreVis title = "Visualização prévia" />
            <Intructions text = 'Marcar os campos ao concordar com as declarações apresentadas na vista prévia'/>
            <Obs text = '*Campos de preenchimento são necessários'/>
            
            <CheckBoxField text = 'Declaração de veracidade das informações prestadas' />
            <MaisDetalhes text = 'Mais detalhes'/>
            <InputTextField title='Local ' placeholder = 'local' />
            <InputTextField title='Data ' placeholder = 'data' />
            <SalvarEnviarButtons />
        </View>
    )
   
}

const styles = StyleSheet.create({
    ConfirmacaoScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },  
    PreVisView:{
        marginBottom: 20
    },
    InstructionsView:{
        marginBottom: 20
    },  
    PreVisButtonContainer:{
        backgroundColor: ButtonRed,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 25,
        margin: 5
    },
    SaveButtonContainer:{
        backgroundColor: '#ffa703',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        margin: 5
    },
    SendButtonContainer:{
        backgroundColor: ButtonRed,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        margin: 5
    },
    PreVisButtonText:{
        fontSize: 16,
        color: "#fff",
        alignSelf: "center",
        fontWeight: 'bold'
    },
    SaveButtonText:{
        fontSize: 16,
        color: "#fff",
        alignSelf: "center",
    },
    SendButtonText:{
        fontSize: 16,
        color: "#fff",
        alignSelf: "center",
    },
    IntructionsStyle:{
        textAlign: 'center',
        fontSize: 15,
        marginHorizontal: 20,
        fontWeight: 'bold',
        color: PrimaryTextColor
    },
    ObsStyle:{
        color: WarningColor
    },
    CheckBoxFieldStyle:{
        flexDirection: 'row',
        marginHorizontal: 50
    },
    CheckBoxFieldTextStyle:{
        color: PrimaryTextColor
    },
    MaisDetalhesStyle:{
    
    },
    MaisDetalhesTextStyle:{
        fontSize: 14,
        color: MaisDetalhesColor,
        textDecorationLine:'underline'
    },
    TitleInputTextStyle:{
        flexDirection: 'row'
    },
    TitleInputStyle:{
        borderBottomWidth: 0.5,
    },
    InputTextFieldView:{
        width: '90%',
        marginVertical: 20
    },
    SalvarEnviarButtonsStyle:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent:'space-around'
    }
})