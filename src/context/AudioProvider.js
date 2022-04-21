import { Alert } from 'react-native'
import React, { Component, createContext } from 'react'
import * as MediaLibrary from 'expo-media-library';

export const AudioContext = createContext()
export class AudioProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
          audioFiles: [],
          permissionError: false,
        }
    }

    permissionAlert = () => {
        Alert.alert("Permission Required", "This app need to read audio files!", [{
          text: 'Ok!',
          onPress: () => this.getPermission()
        },{
          text: "No, don't wanna",
          onPress: () => this.permissionAlert()
        }])
    }

    getAudioFiles = async () => {
      let media = await MediaLibrary.getAssetsAsync({
        mediaType: 'audio',
      });
      media = await MediaLibrary.getAssetsAsync({
        mediaType: 'audio',
        first: media.totalCount,
      })
      this.setState({...this.state, audioFiles: media.assets})
    }

    getPermission = async () => {
        // Object {
        //     "canAskAgain": true,
        //     "expires": "never",
        //     "granted": false,
        //     "status": "undetermined",
        //   }
        const permission = await MediaLibrary.getPermissionsAsync()
        if(permission.granted) {
          // get the audio files
          this.getAudioFiles()
        } 
          if(!permission.canAskAgain && !permission.granted){
            this.setState({...this.state, permissionError: true});
          }
          if(!permission.granted && permission.canAskAgain) {
            const {status, canAskAgain} = await MediaLibrary.requestPermissionsAsync();
          if(status === 'denied' && canAskAgain) {
            // alert must granted
            this.permissionAlert()
          }

          if(status === 'granted') {
            // get the audio files
            this.getAudioFiles()
          }

          if(status === 'denied' && !canAskAgain) {
            // display error
            this.setState({...this.state, permissionError: true})
          }
        }
    }

    componentDidMount(){
        this.getPermission()
    }

  render() {
    if(this.state.permissionError) 
      return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign: 'center', color: 'red'}}>It look like you haven't accepted the permission.</Text>
        </View>
      )
    return (
      <AudioContext.Provider value={{audioFiles: this.state.audioFiles}}>
        {this.props.children}
      </AudioContext.Provider>
    )
  }
}

export default AudioProvider