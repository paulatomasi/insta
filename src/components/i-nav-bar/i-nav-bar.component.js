import React, { Component } from 'react'
import { StatusBar, View, Text } from 'react-native'

import { IImage, ITouchable, IIcon } from 'components'
import logoImage from 'assets/images/logo.png'

import Styles from './i-nav-bar.style'

export class INavBar extends Component {
    constructor(props) {
        super(props)

        StatusBar.setTranslucent(true)
        StatusBar.setBackgroundColor('transparent')
    }

    static setLightContent() {
        StatusBar.setBarStyle('light-content')
    }

    static setDarkContent() {
        StatusBar.setBarStyle('dark-content')
    }

    render() {
        return (
            <View style={Styles.container}>
                <ITouchable style={Styles.buttonContainer}>
                    <IIcon name={'camera_icon'} style={Styles.icon} />
                </ITouchable>
                <IImage
                    source={logoImage}
                    resizeMode={IImage.RESIZE_MODE.CONTAIN}
                    style={Styles.logo}
                />
                <ITouchable style={Styles.buttonContainer}>
                    <IIcon name={'direct_icon'} style={Styles.icon} />
                </ITouchable>
            </View>
        )
    }
}
