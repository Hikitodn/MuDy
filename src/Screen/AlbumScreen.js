import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AlbumList from '../Layouts/AlbumList'
import { FontAwesome5 } from '@expo/vector-icons';

const AlbumScreen = () => {
  return (
    <View style={styles.main}>

      <AlbumList/>

      <View style={styles.add}>
        <TouchableOpacity>
          <FontAwesome5 name="plus-square" size={40} color="black" />
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
  },
  add: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
    position: 'absolute',
    top: 0, right: 20, left: 0, bottom: 20,
  }
})

export default AlbumScreen;