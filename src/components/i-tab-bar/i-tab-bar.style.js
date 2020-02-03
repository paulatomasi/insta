import EStyleSheet from 'react-native-extended-stylesheet'

const Styles = EStyleSheet.create({
    tabButtonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '24%',
    },
    tabBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '$colors.$background',
        height: 50,
    },
})

export default Styles
