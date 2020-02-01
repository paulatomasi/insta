import EStyleSheet from 'react-native-extended-stylesheet'

const colors = {
    $white: '#FFFFFF',
    $background: '#FAFAFA',
    $lightGrey: '#D9D9D9',
    $mediumGrey: '#999999',
    $darkGrey: '#262626',
    $blue: '#3797EF',
}

const statusBar = {
    light: 'light-content',
    dark: 'dark-content',
}

export class Theme {
    static COLORS = colors
    static STATUS_BAR = statusBar

    static build() {
        EStyleSheet.build({ $colors: colors })
    }
}
