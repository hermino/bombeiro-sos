import React, {Component, useState } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import Constants from 'expo-constants'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function LoginScreen({navigation}) {
    
    TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

    const LoginButton = ({onPress, title}) => (
        <TouchableOpacity onPress={onPress} style={styles.LoginButtonContainer}>
            <Text style={styles.LoginButtonText}>{title}</Text>
        </TouchableOpacity>
    )

    const ForgotPasswordButton = ({onPress, title}) => (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.ForgotPasswordText} >{title}</Text>
        </TouchableOpacity>
    )
    
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <ScrollView style={styles.Page}>
            <View style={styles.LoginFields}> 
                
                <Image 
                    style={styles.topImage}
                    source={require('../assets/bombeiros_img.png')}
                />
                
                <TextInput 
                    textAlignVertical="top"
                    keyboardType="email-address" 
                    autoCapitalize="none" 
                    placeholder="Login" 
                    style={styles.LoginInputStyle}/>
                
                <TextInput 
                    textAlignVertical="top"
                    secureTextEntry={true}
                    textContentType={'password'}
                    keyboardType="email-address" 
                    autoCapitalize="none" 
                    placeholder="Senha" 
                    style={styles.LoginInputStyle}/>

                <View style={styles.CheckBoxContainer}>
                    <CheckBox
                        tintColors={{true: '#E50000'}}
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={ styles.CheckBoxLabel }>Lembrar Registros de Login</Text>
                </View>

                <LoginButton title="Entrar" />
                <LoginButton 
                    title="Acessar sem login"
                    onPress={() => navigation.push('MainMenu')}
                    />
                <ForgotPasswordButton title="Esqueceu a senha?" />
                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Page:{
        backgroundColor: '#fff'
    },  
    topImage:{
        width:'100%',
        height: 100,
        left:0,
        top: 0,
        marginBottom: 100
    },
    LoginFields:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    LoginInputStyle:{
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        textAlign: 'center',
        padding: 7,
        margin: 10,
        
    },
    LoginButtonContainer:{
        width:'70%',
        backgroundColor: "#E50000",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 5
    },
    LoginButtonText:{
        fontSize: 13,
        color: "#fff",
        alignSelf: "center"
    },
    ForgotPasswordText:{
        marginTop: 10,
        fontSize: 13,
        color: '#51A0D5',
        alignSelf: "center"
    },
    CheckBoxContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom: 20
    }
})
