import { Text, View, ScrollView, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { AudioContext } from '../context/AudioProvider'
import {RecyclerListView, LayoutProvider} from 'recyclerlistview';
import SongsListItem from '../Layouts/SongsListItem';
import Screen from '../Misc/Screen';
import { Audio } from 'expo-av';
import { play, pause, resume, playNext } from '../Misc/audioController';

export class SongsListScreen extends Component {
  static contextType = AudioContext

  constructor(props) {
    super(props);
    this.state = {
      playbackObj: null,
      soundObj: null,
      currentAudio: {},
    }
    this.currentItem = {};
  }

  layoutProvider = new LayoutProvider(
    i => 'audio',
    (type, dim) => {
    switch(type) {
      case 'audio':
        dim.width = Dimensions.get('window').width;
        dim.height = 70;
        break;
      default:
        dim.width = 0;
        dim.height = 0;
    }
  })

  handleAudioPress = async audio => {
    const {playbackObj, soundObj, currentAudio, updateState, audioFiles} = this.context;
    //play audio for the first time
    if(soundObj == null) {
      const playbackObj = new Audio.Sound()
      const status = await play(playbackObj, audio.uri)
      const index = audioFiles.indexOf(audio)
      return updateState(this.context, {
        currentAudio: audio, 
        playbackObj: playbackObj,
        soundObj: status,
        isPlaying: true,
        currentAudioIndex: index,
      });
    }

    //pause
    if(soundObj.isPlaying && soundObj.isLoaded && currentAudio.id === audio.id){
      const status = await pause(playbackObj)
      return updateState(this.context, {
        soundObj: status,
        isPlaying: false,
      });
    }

    //resume
    if(!soundObj.isPlaying && soundObj.isLoaded && currentAudio.id === audio.id){
      const status = await resume(playbackObj)
      return updateState(this.context, {
        soundObj: status,
        isPlaying: true,
      });
    }
    
    //select another audio
    if(soundObj.isLoaded && currentAudio.id !== audio.id){
      const status = await playNext(playbackObj, audio.uri);
      const index = audioFiles.indexOf(audio)
      return updateState(this.context, {
        currentAudio: audio, 
        soundObj: status,
        isPlaying: true,
        currentAudioIndex: index,
      });
    }
  }

  // componentDidMount() {
  //   this.context.loadPreviousAudio();
  // }

  rowRenderer = (type, item, index, extendedState) => {
    return (
      <SongsListItem
        title={item.filename}
        isPlaying={extendedState.isPlaying}
        activeListItem={this.context.currentAudioIndex === index}
        duration={item.duration}
        onAudioPress={() => this.handleAudioPress(item)}
      />
    );
  };

  render() {
    return (
      <AudioContext.Consumer>
        {({ dataProvider, isPlaying }) => {
          if (!dataProvider._data.length) return null;
          return (
            <Screen>
              <RecyclerListView
                dataProvider={dataProvider}
                layoutProvider={this.layoutProvider}
                rowRenderer={this.rowRenderer}
                extendedState={{isPlaying}}
              />
            </Screen>
          );
        }}
      </AudioContext.Consumer>
    );
  }
}

export default SongsListScreen