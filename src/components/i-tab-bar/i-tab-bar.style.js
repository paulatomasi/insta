import EStyleSheet from 'react-native-extended-stylesheet'

const Styles = EStyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '$colors.$background',
        height: 50,
        borderTopWidth: 0.5,
        borderColor: '$colors.$lightGrey',
    },
    tabButtonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '24%',
    },
})

export default Styles
