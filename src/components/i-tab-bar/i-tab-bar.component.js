import React, { PureComponent } from 'react'
import { TouchableWithoutFeedback, View, Text } from 'react-native'

import { NavigationService } from 'services'

import Styles from './i-tab-bar.style'

export class ITabBar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            OnStatusBarFrameChange: false,
        }

        this.changeTab = this.changeTab.bind(this)
        this.renderTabBarButton = this.renderTabBarButton.bind(this)
    }

    changeTab(idx, route, instance) {
        const { navigation } = this.props

        if (navigation.state.index !== idx) {
            NavigationService.goTo(instance, route.routeName)
        } else {
            NavigationService.popToTop(instance)
        }
    }

    renderTabBarButton(route, idx) {
        const {
            activeTintColor,
            inactiveTintColor,
            navigation,
            renderIcon,
            getLabelText,
        } = this.props

        const color =
            navigation.state.index === idx ? activeTintColor : inactiveTintColor
        const label = getLabelText({ route })

        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    this.changeTab(idx, route, this)
                }}
                key={route.routeName}
            >
                <View style={Styles.tabButtonContainer}>
                    {renderIcon({ route, tintColor: color })}
                    <Text style={{ color, fontSize: 10 }} numberOfLines={1}>
                        {label}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {
        const { navigation } = this.props
        const tabBarButtons = navigation.state.routes.map(this.renderTabBarButton)

        // Sorry About That, but i can`t find other solution for that
        // In-Call Status Bar, is don`t recognized from react-native
        // Native Bridge send event from React-Native listened on TabBar to adjust bottom bar.
        let OnStatusBarFrameChangeStyle = this.state.OnStatusBarFrameChange
            ? { bottom: 20 }
            : { bottom: 0 }

        return (
            <View style={[Styles.tabBarContainer, OnStatusBarFrameChangeStyle]}>
                {tabBarButtons}
            </View>
        )
    }
}
