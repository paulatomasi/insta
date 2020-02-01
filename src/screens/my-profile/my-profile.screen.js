import React from 'react'
import { View, Text } from 'react-native'

export class MyProfileScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>My profile screen</Text>
            </View>
        )
    }
}
