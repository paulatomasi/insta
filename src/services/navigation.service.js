import { StackActions, NavigationActions } from 'react-navigation'

export class NavigationService {
    static goBack(instance, screensToGoBack) {
        instance.props.navigation.pop(screensToGoBack)
    }

    static goTo(instance, screen, params = []) {
        instance.props.navigation.navigate(screen, params)
    }

    static push(instance, screen, params = []) {
        instance.props.navigation.push(screen, params)
    }

    static resetStack(instance, routeName, params = []) {
        const navigateAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName, params })],
        })

        instance.props.navigation.dispatch(navigateAction)
    }

    static popToTop(instance) {
        instance.props.navigation.dispatch(StackActions.popToTop())
    }
}
