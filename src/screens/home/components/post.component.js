import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'

import HeaderPost from './header-post.component'

class Post extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <HeaderPost {...this.props.item}></HeaderPost>
                    <Image source={this.props.item.image} style={styles.image}></Image>
                </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: 375,
        resizeMode: "cover"
    }
})

export default Post