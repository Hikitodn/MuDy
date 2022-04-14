import { StyleSheet, View } from 'react-native'
import React from 'react'
import AddNewAlbum from '../Layouts/AddNewAlbum'

const AddNewAlbumScreen = () => {

  return (
    <View style={styles.main}>
      
      <AddNewAlbum />

    </View>
  )
}

export default AddNewAlbumScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    }
})