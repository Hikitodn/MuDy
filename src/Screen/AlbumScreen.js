import { StyleSheet, View } from 'react-native'
import React from 'react'
import AlbumList from '../Layouts/AlbumList'

const AlbumScreen = () => {

  return (
    <View style={styles.main}>

      <AlbumList/>

    </View>
    
  )
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
  },
})

export default AlbumScreen;