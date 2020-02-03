import EStyleSheet from 'react-native-extended-stylesheet'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const statusBarHeight = getStatusBarHeight()
const containerHeight = statusBarHeight + 48

const Styles = EStyleSheet.create({
    container: {
        height: containerHeight,
        backgroundColor: '$colors.$background',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: statusBarHeight,
        paddingLeft: 8,
        paddingRight: 12,
    },
    logo: {
        height: 28,
        width: 105,
    },
    buttonContainer: {
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Styles
