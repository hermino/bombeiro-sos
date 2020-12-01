import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import MenuStack from './src/navigations/StackNavigators'

const Drawer = createDrawerNavigator();

export default function App(){
  const Root =()=> (
  
    <MenuStack/>
)
  
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Root"
        drawerStyle = {{backgroundColor: '#1E2D3E', width: 240}}
        drawerContentOptions={{ activeTintColor: 'white', inactiveTintColor: 'white', 
       }}
      >
        <Drawer.Screen name="Root" component={Root}
        options={{   
          title: 'Bombeiros de Roraima',                  
          headerStyle:{backgroundColor: '#DD492A', }, 
          headerTintColor: '#FFFFFF',
          
          headerRight: () => (
            <Image
            style={{ width: 50, height: 50, right: 15}}
            source={require('./src/assets/brasao.png')}
            />            
          ), 
          
        }}          
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
