import React from 'react';
import { Image } from 'react-native';
import{NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '/Home';
import Sobre from '/Sobre';

const Drawer = createDrawerNavigator();


export default function  MainMenu(){
  return(
    <NavigationContainer>

      <Drawer.Navigator
      drawerStyle = {{backgroundColor: '#1E2D3E', width: 240}}
      drawerContentOptions={{ ctiveTintColor: 'white', inactiveTintColor: 'white', 
    }}
      > 

        <Drawer.Screen 
        name = "Página Inicial" component = {Home}
        options={{
                    
          headerStyle:{backgroundColor: '#DD492A', }, 
          headerTintColor: '#FFFFFF',
          
          headerRight: () => (
            <Image
            style={{ width: 50, height: 50, right: 15}}
            source={require('./assets/brasao.png')}
            />            
          ), 
          
        }}          
        
        />        
        <Drawer.Screen name = "Sobre" component = {Sobre}
         options={{
                    
          headerStyle:{backgroundColor: '#DD492A', }, 
          headerTintColor: '#FFFFFF',
          
          headerRight: () => (
            <Image
            style={{ width: 50, height: 50, right: 15}}
            source={require('./assets/brasao.png')}
            />            
          ), 
          
        }}    

        />     
      </Drawer.Navigator>
    </NavigationContainer>
  );
}