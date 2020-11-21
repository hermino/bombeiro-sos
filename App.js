import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from './src/screens/LoginScreen'
import MainMenu from './src/screens/MainMenu'

import RelatorioDeVistoria_01 from './src/screens/RelatorioDeVistorias/RelatorioDeVistoria_01'
import RelatorioDeVistoria_02 from './src/screens/RelatorioDeVistorias/RelatorioDeVistoria_02'
import RelatorioDeVistoria_03 from './src/screens/RelatorioDeVistorias/RelatorioDeVistoria_03'

import RelatorioDeVistoria_04 from './src/screens/RelatorioDeVistorias/RelatorioDeVistoria_04'
import RelatorioDeVistoria_05 from './src/screens/RelatorioDeVistorias/RelatorioDeVistoria_05'
import RelatorioDeVistoria_06 from './src/screens/RelatorioDeVistorias/RelatorioDeVistoria_06'

import RelatorioDeVistoria_07 from './src/screens/RelatorioDeVistorias/RelatorioDeVistoria_07'
import RelatorioDeVistoria_08 from './src/screens/RelatorioDeVistorias/RelatorioDeVistoria_08'
import RelatorioDeVistoria_09 from './src/screens/RelatorioDeVistorias/RelatorioDeVistoria_09'

import RelatorioDeVistoria_10 from './src/screens/RelatorioDeVistorias/RelatorioDeVistoria_10'
import RelatorioDeVistoria_11 from './src/screens/RelatorioDeVistorias/RelatorioDeVistoria_11'
import RelatorioDeVistoria_12 from './src/screens/RelatorioDeVistorias/RelatorioDeVistoria_12'
import RelatorioDeVistoria_13 from './src/screens/RelatorioDeVistorias/RelatorioDeVistoria_13'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainMenu" component={MainMenu} options={{title: 'Menu'}} />
        <Stack.Screen name="RelatorioDeVistoria_01" component={RelatorioDeVistoria_01} options={{title: 'Relatório de Vistoria'}} />
        <Stack.Screen name="RelatorioDeVistoria_02" component={RelatorioDeVistoria_02} options={{title: 'Relatório de Vistoria'}} />
        <Stack.Screen name="RelatorioDeVistoria_03" component={RelatorioDeVistoria_03} options={{title: 'Relatório de Vistoria'}} />
        <Stack.Screen name="RelatorioDeVistoria_04" component={RelatorioDeVistoria_04} options={{title: 'Relatório de Vistoria'}} />
        <Stack.Screen name="RelatorioDeVistoria_05" component={RelatorioDeVistoria_05} options={{title: 'Relatório de Vistoria'}} />
        <Stack.Screen name="RelatorioDeVistoria_06" component={RelatorioDeVistoria_06} options={{title: 'Relatório de Vistoria'}} />
        <Stack.Screen name="RelatorioDeVistoria_07" component={RelatorioDeVistoria_07} options={{title: 'Relatório de Vistoria'}} />
        <Stack.Screen name="RelatorioDeVistoria_08" component={RelatorioDeVistoria_08} options={{title: 'Relatório de Vistoria'}} />
        <Stack.Screen name="RelatorioDeVistoria_09" component={RelatorioDeVistoria_09} options={{title: 'Relatório de Vistoria'}} />
        <Stack.Screen name="RelatorioDeVistoria_10" component={RelatorioDeVistoria_10} options={{title: 'Relatório de Vistoria'}} />
        <Stack.Screen name="RelatorioDeVistoria_11" component={RelatorioDeVistoria_11} options={{title: 'Relatório de Vistoria'}} />
        <Stack.Screen name="RelatorioDeVistoria_12" component={RelatorioDeVistoria_12} options={{title: 'Relatório de Vistoria'}} />
        <Stack.Screen name="RelatorioDeVistoria_13" component={RelatorioDeVistoria_13} options={{title: 'Relatório de Vistoria'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
