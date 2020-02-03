import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { INavBar } from 'components'

export class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <INavBar />
                <Text>Home screen</Text>
            </View>
        )
    }
}
