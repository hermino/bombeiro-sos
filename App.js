import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import MenuStack from './src/navigations/StackNavigators'
import Sobre from './src/screens/Sobre'
import Configuracao from './src/screens/Configuracao'
import Sair from './src/screens/Sair'

const Drawer = createDrawerNavigator();

function Root() {
  return (
        <MenuStack/>
  );
}

export default function App(){
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Root"
        drawerStyle = {{backgroundColor: '#1E2D3E', width: 270,}}
        drawerContentOptions={{ctiveTintColor: 'white', inactiveTintColor: 'white'}}
        screenOptions={{headerShown:false}}
      >
        <Drawer.Screen name="Página Inicial" component={Root}/>        
        <Drawer.Screen name="Configuracao" component={Configuracao}/>
        <Drawer.Screen name="Sobre" component={Sobre}/>
        <Drawer.Screen name="Sair" component={Sair}/>
  
      
        </Drawer.Navigator>

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
