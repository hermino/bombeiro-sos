import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function Sobre({navigation}){
  return(
    <View style = {styles.container}>

      <TouchableOpacity onPress={ () => navigation.navigate('Forms', {screen: 'RelatorioDeVistoria_01'})} style={styles.buttonGPlusStyle}>
        <Image style ={styles.image} style ={{width: '77%', resizeMode: 'contain'}}
        source = {require('../assets/iconeNovo.png')}
        
        ></Image>
        <Text style ={{fontSize: 17, right: 10}}>Nova Vistoria </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('BuscarData')}  style={styles.buttonGPlusStyle}>        
        <Image style ={styles.image} style ={{width: '70%', resizeMode: 'contain'}}
        source = {require('../assets/iconeBuscar.png')}
        ></Image>
        <Text style ={{fontSize: 17, right: 10}}>Buscar Vistoria </Text>      
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({

  container:{
      flex: 1,
      flexDirection: "row",
      justifyContent: 'space-around',
      paddingTop: 30,
      left: 5,
      backgroundColor: '#fff'
  
  },
  buttonGPlusStyle: {

      paddingVertical: 10,
      paddingHorizontal: 10,
      resizeMode: 'contain', 
  },
  image:{        
      resizeMode: 'contain',      
  },
  
})
