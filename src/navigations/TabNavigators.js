import React, { lazy, useState } from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import RelatorioDeVistoria_01 from '../screens/RelatorioDeVistorias/RelatorioDeVistoria_01'
import RelatorioDeVistoria_02 from '../screens/RelatorioDeVistorias/RelatorioDeVistoria_02'
import RelatorioDeVistoria_03 from '../screens/RelatorioDeVistorias/RelatorioDeVistoria_03'
import RelatorioDeVistoria_04 from '../screens/RelatorioDeVistorias/RelatorioDeVistoria_04'
import RelatorioDeVistoria_05 from '../screens/RelatorioDeVistorias/RelatorioDeVistoria_05'
import RelatorioDeVistoria_06 from '../screens/RelatorioDeVistorias/RelatorioDeVistoria_06'
import RelatorioDeVistoria_07 from '../screens/RelatorioDeVistorias/RelatorioDeVistoria_07'
import RelatorioDeVistoria_08 from '../screens/RelatorioDeVistorias/RelatorioDeVistoria_08'
import RelatorioDeVistoria_09 from '../screens/RelatorioDeVistorias/RelatorioDeVistoria_09'
import RelatorioDeVistoria_10 from '../screens/RelatorioDeVistorias/RelatorioDeVistoria_10'
import RelatorioDeVistoria_11 from '../screens/RelatorioDeVistorias/RelatorioDeVistoria_11'
import RelatorioDeVistoria_12 from '../screens/RelatorioDeVistorias/RelatorioDeVistoria_12'
import RelatorioDeVistoria_13 from '../screens/RelatorioDeVistorias/RelatorioDeVistoria_13'
import Confirmacao from '../screens/RelatorioDeVistorias/Confirmacao'
import { View } from 'react-native';
import { BombeirosColor, PrimaryTextColor } from '../assets/Colors';


const Tab = createMaterialTopTabNavigator();

export default function TabForms  (){
    
    return (
                <Tab.Navigator lazy={true} lazyPreloadDistance={2} 
                    tabBarOptions ={{
                        tabBarVisible: false,
                        style:{
                            tabBarVisible:false,
                            height:0,
                        },
                        tabStyle: {
                            width: 50
                        },
                        scrollEnabled: true,
                        indicatorStyle:{
                            backgroundColor: BombeirosColor
                        },
                        labelStyle:{ fontSize: 10, fontWeight:'bold' }, 
                        showLabel: true}} >
                    <Tab.Screen name="RelatorioDeVistoria_01" component={RelatorioDeVistoria_01} options={{tabBarLabel:'1', title: 'Relatório de Vistoria', tabBarVisible: false}} />
                    <Tab.Screen name="RelatorioDeVistoria_02" component={RelatorioDeVistoria_02} options={{tabBarLabel:'2', title: 'Relatório de Vistoria', tabBarVisible: false}} />
                    <Tab.Screen name="RelatorioDeVistoria_03" component={RelatorioDeVistoria_03} options={{tabBarLabel:'3', title: 'Relatório de Vistoria', tabBarVisible: false}} />
                    <Tab.Screen name="RelatorioDeVistoria_04" component={RelatorioDeVistoria_04} options={{tabBarLabel:'4', title: 'Relatório de Vistoria', tabBarVisible: false}} />
                    <Tab.Screen name="RelatorioDeVistoria_05" component={RelatorioDeVistoria_05} options={{tabBarLabel:'5', title: 'Relatório de Vistoria', tabBarVisible: false}} />
                    <Tab.Screen name="RelatorioDeVistoria_06" component={RelatorioDeVistoria_06} options={{tabBarLabel:'6', title: 'Relatório de Vistoria', tabBarVisible: false}} />
                    <Tab.Screen name="RelatorioDeVistoria_07" component={RelatorioDeVistoria_07} options={{tabBarLabel:'7', title: 'Relatório de Vistoria', tabBarVisible: false}} />
                    <Tab.Screen name="RelatorioDeVistoria_08" component={RelatorioDeVistoria_08} options={{tabBarLabel:'8', title: 'Relatório de Vistoria', tabBarVisible: false}} />
                    <Tab.Screen name="RelatorioDeVistoria_09" component={RelatorioDeVistoria_09} options={{tabBarLabel:'9', title: 'Relatório de Vistoria', tabBarVisible: false}} />
                    <Tab.Screen name="RelatorioDeVistoria_10" component={RelatorioDeVistoria_10} options={{tabBarLabel:'10', title: 'Relatório de Vistoria', tabBarVisible: false}} />
                    <Tab.Screen name="RelatorioDeVistoria_11" component={RelatorioDeVistoria_11} options={{tabBarLabel:'11', title: 'Relatório de Vistoria', tabBarVisible: false}} />
                    <Tab.Screen name="RelatorioDeVistoria_12" component={RelatorioDeVistoria_12} options={{tabBarLabel:'12', title: 'Relatório de Vistoria', tabBarVisible: false}} />
                    <Tab.Screen name="RelatorioDeVistoria_13" component={RelatorioDeVistoria_13} options={{tabBarLabel:'13', title: 'Relatório de Vistoria', tabBarVisible: false}} />
                    <Tab.Screen name="Confirmacao" component={Confirmacao} options = {{tabBarLabel:'Fim', title: 'Confirmacao'}} />
                </Tab.Navigator>
    )
}
