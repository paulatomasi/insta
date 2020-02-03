import React from 'react'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'

import icoMoonConfig from 'assets/fonts/selection.json'

const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'InstaIcons', 'InstaIcons.ttf')

export const IIcon = props => {
    return <Icon {...props} />
}