import { Text, View } from 'react-native'
import React from 'react'
import MediaStyle from '../Styles/MediaStyle'
import { MaterialIcons } from '@expo/vector-icons';

const MediaPlayer = () => {
  return (
    <View style={MediaStyle.containerMedia}>
      <View style={MediaStyle.innerMedia} >
        <MaterialIcons name="skip-previous" size={35} color="black" />
        <MaterialIcons name="play-arrow" size={35} color="black" />
        <MaterialIcons name="skip-next" size={35} color="black" />
      </View>
    </View>
  )
}

export default MediaPlayer
