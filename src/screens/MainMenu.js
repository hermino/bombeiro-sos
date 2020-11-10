import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function MainMenu(){
    return(
        <View style={styles.MainView}>
            <Text>Menu</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    MainView:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    }
})