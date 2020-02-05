import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { INavBar, IImage } from 'components'

import Styles from './home.style'

export class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <INavBar />
                <View style={Styles.headerContainer}>
                    <IImage
                        style={Styles.userImage}
                        source={{ uri: 'https://observatoriog.bol.uol.com.br/wordpress/wp-content/uploads/2019/11/rihanna.jpg' }}
                        resizeMode={IImage.RESIZE_MODE.COVER}
                    />
                    <View>
                        <Text style={Styles.username}>badgalriri</Text>
                        <Text style={Styles.local}>New York</Text>
                    </View>
                </View>
            </View>
        )
    }
}
