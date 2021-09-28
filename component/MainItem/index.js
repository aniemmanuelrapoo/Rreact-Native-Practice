import React from 'react'
import { View, Text, ImageBackground, Alert } from 'react-native'
import MainButton from '../MainButton'
import styles from './styles'

const MainItem = (props) => {
  const { header, subHeader, image, subHeaderDis } = props.images
    return (
           <View style={styles.container1}>
          <ImageBackground
            source={image}
            style={styles.image}
          />
          <View style={styles.titles}>
            <Text style={styles.title}>{
            header}</Text>
            <Text style={styles.subTitle}>{subHeader} <Text style={styles.subHeaderDis}>{subHeaderDis}</Text>
            </Text>
            
          </View>
          <View style={styles.btnCon}>
            <MainButton type="primary" content={"Digital Dreams"} onPress={() => {
            console.warn('Welcome to Digital Dreams')
            }} />
            <MainButton type="secondry" content={"Assignment"} onPress={() => {
              console.warn('Done with Assignment')
            }} />
          </View>
          
        </View>
    )
}

export default MainItem
