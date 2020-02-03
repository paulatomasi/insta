import React from 'react'
import { View, TouchableOpacity } from 'react-native'

export const ITouchable = props => {
    const { style, children, onPress, activeOpacity, disabled } = props

    if (disabled) {
        return <View style={style}>{children}</View>
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={activeOpacity || 0.8}
            {...props}
        >
            {children}
        </TouchableOpacity>
    )
}

