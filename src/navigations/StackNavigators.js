import React from 'react';

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
            screenOptions={{headerShown:false, headerTintColor:BombeirosColor}}>
            <Stack.Screen name="Login" component={LoginScreen}  />
            <Stack.Screen name="MainMenu" component={MainMenu} options={{title: 'Menu'}} />
            <Stack.Screen name="Forms" component = {TabForms} options={{title: 'Formulário'}} />
            <Stack.Screen name="indexPages" component = {indexPages} options={{title: 'Index'}} /> 
            <Stack.Screen name="BuscarNome" component = {BuscarNome} options={{title: 'Buscar Vistoria'}} /> 
            <Stack.Screen name="BuscarData" component = {BuscarData} options={{title: 'Buscar Vistoria'}} /> 
            
        </Stack.Navigator>    
    )
}
