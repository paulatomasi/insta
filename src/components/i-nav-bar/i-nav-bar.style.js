import EStyleSheet from 'react-native-extended-stylesheet'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const statusBarHeight = getStatusBarHeight()
const containerHeight = statusBarHeight + 48

const Styles = EStyleSheet.create({
    container: {
        height: containerHeight,
        backgroundColor: '$colors.$background',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingTop: statusBarHeight,
        paddingLeft: 8,
        paddingRight: 12,
        borderBottomWidth: 0.5,
        borderColor: '$colors.$lightGrey',
    },
    logo: {
        height: 28,
        width: 105,
        marginBottom: 6,
    },
    buttonContainer: {
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
    },
    icon: {
        fontSize: 32,
        color: '$colors.$darkGrey',
    },
})

export default Styles
