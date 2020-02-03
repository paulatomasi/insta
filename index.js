import { AppRegistry } from 'react-native'
import App from './App'
import { Theme } from 'theme-consts'

Theme.build()
AppRegistry.registerComponent('insta', () => App)

console.disableYellowBox = true
