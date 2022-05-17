import { Dimensions } from 'react-native'
import React, { Component } from 'react'
import { AudioContext } from '../context/AudioProvider'
import {RecyclerListView, LayoutProvider} from 'recyclerlistview';
import SongsListItem from '../Layouts/SongsListItem';
import Screen from '../Misc/Screen';
import { selectAudio } from '../Misc/audioController';

export class SongsListScreen extends Component {
  static contextType = AudioContext

  constructor(props) {
    super(props);
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
    await selectAudio(audio, this.context)
  }

  componentDidMount() {
    this.context.loadPreviousAudio();
  }

  navigateToPlaylist = item => {
    this.context.updateState(this.context, {
      addToPlayList: item,
    });
    this.props.navigation.navigate('Albums');
  };

  rowRenderer = (type, item, index, extendedState) => {
    return (
      <SongsListItem
        title={item.filename}
        isPlaying={extendedState.isPlaying}
        activeListItem={this.context.currentAudioIndex === index}
        duration={item.duration}
        onAudioPress={() => this.handleAudioPress(item)}
        onAddPlayList={() => this.navigateToPlaylist(item)}
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