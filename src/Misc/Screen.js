import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

const Screen = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default Screen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight,
    }
})