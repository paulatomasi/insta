import EStyleSheet from 'react-native-extended-stylesheet'

const Styles = EStyleSheet.create({
    headerContainer: {
        height: 54,
        backgroundColor: '$colors.$white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        height: 32,
        width: 32,
        borderRadius: 16,
        marginHorizontal: 10,
    },
    username: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '$colors.$darkGrey',
    },
    local: {
        fontSize: 11,
        color: '$colors.$darkGrey',
    },
})

export default Styles