import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Header = () => {
    return (
        <View style={styles.container}>
           <Image style={styles.logo} source={require('../../assets/images/download.png')} />
           <Image style={styles.menuh} source={require('../../assets/images/588a64f5d06f6719692a2d13.png')} />
        </View>
    )
}

export default Header