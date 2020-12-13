//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import axios from 'axios'

// create a component
const BottomMenu = ({field, navigation, rootPage, backwards, forwards}) => {
    
    const ImageButton = ({onPress, source}) => (
        <TouchableOpacity 
            onPress={onPress}>
            <Image
                style = {styles.ImageButton} 
                source={source} />
        </TouchableOpacity>
    )

    const sendData = async () => {
        //checar se existe, faz umas especie de fetch
        await axios.post('https://app-cmbrr.herokuapp.com/', field)
    }

    return (
            <View style={styles.BottomMenu}>
                <ImageButton 
                    style = {styles.ImageButton}
                    source = {require('../assets/ArrowBackwards.png')}
                    onPress={() => {  navigation.navigate( rootPage , { screen: backwards } )}} />

                <ImageButton 
                    style = {styles.ImageButton}
                    source = {require('../assets/Question.png')}
                    onPress={() => {navigation.push('indexPages')}} />
                
                <ImageButton 
                    
                    source = {require('../assets/ArrowForward.png')}
                    onPress={() => { navigation.navigate( rootPage , { screen: forwards } )}} />
            </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    BottomMenu:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-evenly'
    },
    ImageButton:{
        marginVertical: 40,
        width: 50,
        height: 50
    }
});

//make this component available to the app
export default BottomMenu;
