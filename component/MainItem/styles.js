import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container1: {
        width: '100%',
        height: Dimensions.get('window').height
      },
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
      },
      title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'blue'
      },
      subTitle: {
        fontSize: 16,
        color: '#f2f2f2'
      },
      subHeaderDis: {
        color: 'yellow',
        textDecorationLine: 'underline'
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },
      btnCon: {
        position: 'absolute',
        bottom: 50,
        width: '100%'
      }
})

export default styles;