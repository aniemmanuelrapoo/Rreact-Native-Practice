import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const MainButton = ({ type, content, onPress }) => {
    const backgroundColor = type === 'primary' ? 'black' : 'white'
    const textColor = type === 'primary' ? 'white' : 'black'
    return (
        <View style={styles.container}>
            <Pressable style={[styles.btn, {backgroundColor: backgroundColor}]} onPress={() => {
                onPress()
            }}>
                <Text style={[styles.btnText, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default MainButton
