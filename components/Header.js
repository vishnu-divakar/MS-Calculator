import React, { Component } from 'react'
import Expo from 'expo'
import { StyleSheet, Text, View } from 'react-native';
import { Feather  } from '@expo/vector-icons';

class Header extends Component{
    render(){
        return(
            <View style={styles.headerStyle}>
                <View style={styles.textContainerStyle}>
                    <Text style={styles.headerTitleStyle}>
                        Saturation Calculator
                    </Text>
                </View>
                <View style={styles.iconStyle}>
                    <Feather  name="share" size={28} color="white" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerStyle:{
        marginTop: Expo.Constants.statusBarHeight,
        padding: '5%',
        backgroundColor: '#0690bf',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-between',
        flexWrap: 'wrap'
    },
    headerTitleStyle:{
        fontSize: 20,
        color: 'white'
    },
    iconStyle:{
        display: 'flex'
    },
    textContainerStyle:{
        flex: 1
    }
})

export default Header