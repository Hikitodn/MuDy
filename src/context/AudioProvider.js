import { Text, View } from 'react-native'
import React, { Component } from 'react'
import * as MediaLibrary from 'expo-media-library';

export class AudioProvider extends Component {
    constructor(props){
        super(props)
    }

    getPermission = async () => {
        // Object {
        //     "canAskAgain": true,
        //     "expires": "never",
        //     "granted": false,
        //     "status": "undetermined",
        //   }
        const permission = await MediaLibrary.getPermissionsAsync()
        console.log(permission) 
    }

    componentDidMount(){
        getPermission()
    }

  render() {
    return (
      <View>
        <Text>AudioProvider</Text>
      </View>
    )
  }
}

export default AudioProvider