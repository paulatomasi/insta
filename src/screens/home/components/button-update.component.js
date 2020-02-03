import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ButtonUpdate extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderFooter()}
            </View>
        )
    }

    renderFooter() {
        // if (!this.state.loading) return null;
    
        return (
          <View
            style={{
              paddingVertical: 20,
              borderTopWidth: 1,
              borderColor: "#CED0CE"
            }}
          >
            <ActivityIndicator animating size="large" />
          </View>
        );
      };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 80,
        alignContent: "center",
        zIndex:3
    },
    button: {

    }
})