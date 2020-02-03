import React from 'react'
import  { Provider } from 'react-redux' 
import { AppRegistry } from 'react-native'
import App from './App'
import { Theme } from 'theme-consts'
import storeConfig from './src/store/storeConfig'

Theme.build()


const store = storeConfig()
const Redux = () => {
    return (
        <Provider store={store}>
            <App></App>
        </Provider>
    )
}

AppRegistry.registerComponent('insta', () => Redux)
console.disableYellowBox = true
