import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

import LoginScreen from '../screens/LoginScreen'
import MainMenu from '../screens/MainMenu'
import indexPages from '../screens/indexPages'

import BuscarNome from '../screens/BuscarVistoria/BuscarVistoriaNome'
import BuscarData from '../screens/BuscarVistoria/BuscarVistoriaData'

import TabForms from './TabNavigators'
import { BombeirosColor } from '../assets/Colors';

export default function MenuStack () {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerTintColor:'#FFFFFF',
            headerStyle: {backgroundColor: '#DD492A'},
            
            headerRight: () => <Image  
            style={{ width: 50, height: 50, right: 15, marginBottom: 5}} 
            source={require('../assets/brasao.png')} />
            }}

            >            
            <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown:false}} />
            <Stack.Screen name="MainMenu" component={MainMenu} options={{title: 'Menu'}} />
            <Stack.Screen name="Forms" component = {TabForms} options={{title: 'Formulário'}} />
            <Stack.Screen name="indexPages" component = {indexPages} options={{title: 'Index'}} /> 
            <Stack.Screen name="BuscarNome" component = {BuscarNome} options={{title: 'Buscar Vistoria'}} /> 
            <Stack.Screen name="BuscarData" component = {BuscarData} options={{title: 'Buscar Vistoria'}} /> 
            
        </Stack.Navigator>    
    )
}
