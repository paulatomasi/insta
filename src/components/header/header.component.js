import React, { Component } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, Text, View, Platform, Image } from 'react-native'

import logo from '@assets/insta-logo.png'


class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FontAwesome name={'camera'} size={25} color="#000" />
                <Image source={logo} style={styles.logo}></Image>
                <FontAwesome name={'location-arrow'} size={25} color="#000" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#BBB',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    }
})

export default Header