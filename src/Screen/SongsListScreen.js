import { Text, View, ScrollView, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { AudioContext } from '../context/AudioProvider'
import {RecyclerListView, LayoutProvider} from 'recyclerlistview';
import SongsListItem from '../Layouts/SongsListItem';
import Screen from '../Misc/Screen';
import { Audio } from 'expo-av';

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

  // handleAudioPress = async audio => {
  //   await selectAudio(audio, this.context);
  // }

  // componentDidMount() {
  //   this.context.loadPreviousAudio();
  // }

  rowRenderer = (type, item, index) => {
    return (
      <SongsListItem
        title={item.filename}
        duration={item.duration}
        onAudioPress={() => this.handleAudioPress(item)}
      />
    );
  };

  render() {
    return (
      <AudioContext.Consumer>
        {({ dataProvider }) => {
          if (!dataProvider._data.length) return null;
          return (
            <Screen>
              <RecyclerListView
                dataProvider={dataProvider}
                layoutProvider={this.layoutProvider}
                rowRenderer={this.rowRenderer}
              />
            </Screen>
          );
        }}
      </AudioContext.Consumer>
    );
  }
}

export default SongsListScreen