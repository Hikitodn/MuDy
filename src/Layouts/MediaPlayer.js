import { Dimensions, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import MediaStyle from '../Styles/MediaStyle'
import PlayerButton from '../Misc/PlayerButton';
import { AudioContext } from '../context/AudioProvider';
import { convertTime, storeAudioForNextOpening } from '../Misc/Storage';
import Slider from '@react-native-community/slider';
import { 
  changeAudio,
  pause,
  selectAudio,
} from '../Misc/audioController';

const { width } = Dimensions.get('window')

const MediaPlayer = () => {

  const [currentPosition, setCurrentPosition] = useState(0);
  const context = useContext(AudioContext);
  const { playbackPosition, playbackDuration, currentAudio } = context;

  const calculateSeebBar = () => {
    if (playbackPosition !== null && playbackDuration !== null) {
      return playbackPosition / playbackDuration;
    }

    if (currentAudio.lastPosition) {
      return currentAudio.lastPosition / (currentAudio.duration * 1000);
    }

    return 0;
  };

  const handlePlayPause = async () => {
    await selectAudio(context.currentAudio, context);
  };

  const handleNext = async () => {
    await changeAudio(context, 'next');
  };

  const handlePrevious = async () => {
    await changeAudio(context, 'previous');
  };

  const renderCurrentTime = () => {
    if (!context.soundObj && currentAudio.lastPosition) {
      return convertTime(currentAudio.lastPosition / 1000);
    }
    return convertTime(context.playbackPosition / 1000);
  };

  if (!context.currentAudio) return null;

  return (
    <View style={MediaStyle.containerMedia}>
      <View>
        <Text style={MediaStyle.title}>{currentAudio.id == undefined ? "Pick your Album to listen" : context.currentAudio.filename}</Text>
        <View style={MediaStyle.timer}>
          <Text>
            {currentAudio.id == undefined ? "00:00" : renderCurrentTime()}/
          </Text>
          <Text>{currentAudio.id == undefined ? "00:00" : convertTime(context.currentAudio.duration)}</Text>
        </View>        
        <Slider 
          style={{width: width, height: 20,}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor='#636363'
          maximumTrackTintColor='#5252ad'
          value={calculateSeebBar()}
          onValueChange={value => {
            setCurrentPosition(
              convertTime(value * context.currentAudio.duration)
            );
          }}
          onSlidingStart={async () => {
            if (!context.isPlaying) return;

            try {
              await pause(context.playbackObj);
            } catch (error) {
              console.log('error inside onSlidingStart callback', error);
            }
          }}
          onSlidingComplete={async value => {
            await moveAudio(context, value);
            setCurrentPosition(0);
          }}
        />
      </View>
      <View style={MediaStyle.innerMedia} >
        <PlayerButton onPress={handlePrevious} iconType='PREV'/>
        <PlayerButton onPress={handlePlayPause} iconType={ context.isPlaying ? 'PLAY' : 'PAUSE' } />
        <PlayerButton onPress={handleNext} iconType='NEXT' />
      </View>
    </View>
  )
}

export default MediaPlayer
