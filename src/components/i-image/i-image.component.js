import React, { PureComponent } from 'react'
import FastImage from 'react-native-fast-image'

export class IImage extends PureComponent {
    static RESIZE_MODE = {
        COVER: FastImage.resizeMode.cover,
        CONTAIN: FastImage.resizeMode.contain,
        STRETCH: FastImage.resizeMode.stretch,
        CENTER: FastImage.resizeMode.center,
    }

    render() {
        return (
            <FastImage
                style={this.props.style}
                source={this.props.source}
                resizeMode={this.props.resizeMode}
            />
        )
    }
}
