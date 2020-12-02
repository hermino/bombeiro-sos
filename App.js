import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import MenuStack from './src/navigations/StackNavigators'

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
        drawerStyle = {{backgroundColor: '#1E2D3E', width: 240,
        
        
      }}
        drawerContentOptions={{ctiveTintColor: 'white', inactiveTintColor: 'white',  
      }}
      screenOptions={{headerShown:false}}
      >
        <Drawer.Screen name="Página Inicial" component={Root}
        // options={{ 
        //   title: 'Bombeiros de Roraima',                  
        //   headerStyle:{backgroundColor: '#DD492A', }, 
        //   headerTintColor: '#FFFFFF',
          
        //   headerRight: () => (
        //     <Image
        //     style={{ width: 50, height: 50, right: 15}}
        //     source={require('./src/assets/brasao.png')}
        //     />            
        //   ), 
          
        // }}          
        />
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
