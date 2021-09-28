import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import styles from './styles'
import images from './images'
import MainItem from '../MainItem'

const ImageList = () => {
    return (
        <View style={styles.container}>
            <FlatList 
              data={images}
              renderItem={ ({item}) => <MainItem images={item} /> }
              showsVerticalScrollIndicator={false}
              snapToAlignment={'start'}
              decelerationRate={'fast'}
              snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default ImageList
