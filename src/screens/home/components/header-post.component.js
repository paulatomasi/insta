import React, { Component } from 'react'
import {View, Image, Text, StyleSheet, Dimensions } from 'react-native'

class HeaderPost extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.imageAuthor} style={styles.imageAuthor}></Image>
                <View style={styles.containerText}>
                    <Text style={styles.nameAuthor}>
                        {this.props.author}
                    </Text>
                    <Text style={styles.imageLocation}>
                        {this.props.location}
                    </Text>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: 55,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"

    },
    imageAuthor:{
        width: 35,
        height: 35,
        borderRadius: 17.5,
        padding: 2,
        marginLeft: 10
    },
    containerText: {
        width: 300,
        color: '#262626',
        fontFamily: 'SFProText-Regular',
        
    },
    nameAuthor: {
        height: 15,
        marginLeft: 10,
        fontSize: 13,
        fontWeight: "bold"
    },
    imageLocation: {
        height: 13,
        fontSize: 11,
        marginLeft: 10
    }


})

export default HeaderPost