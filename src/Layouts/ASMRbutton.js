import { View, TouchableOpacity } from 'react-native'
import * as React from 'react'
import { FontAwesome5, Ionicons, MaterialCommunityIcons  } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import VerticalSlider from 'rn-vertical-slider';

import ASMRstyle from '../Styles/ASMRstyle'

const ASMRbutton = () => {
  const wind = React.useRef(new Audio.Sound());
  const rain = React.useRef(new Audio.Sound());
  const fireplace = React.useRef(new Audio.Sound());
  const [Status1, SetStatus1] = React.useState(false);
  const [Status2, SetStatus2] = React.useState(false);
  const [Status3, SetStatus3] = React.useState(false);

  const WindASMR = async () => {
    try{
      const result = await wind.current.loadAsync(require('../../assets/ASMR/wind.wav'), {downloadFirst: true}, true);
      if (result.isLoaded === false) {
        console.log('Error in Loading Audio');
      }
    } catch (error) {
    }
    const result = await wind.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          wind.current.setIsLoopingAsync(true)
          wind.current.playAsync();
          SetStatus1(true);
        }
        if (result.isPlaying === true) {
          wind.current.pauseAsync();
          SetStatus1(false);
        }
      }
  }

  const RainASMR = async () => {
    try{
      const result = await rain.current.loadAsync(require('../../assets/ASMR/rain.wav'), {downloadFirst: true}, true);
      if (result.isLoaded === false) {
        console.log('Error in Loading Audio');
      }
    } catch (error) {
    }
    const result = await rain.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          rain.current.setIsLoopingAsync(true)
          rain.current.playAsync();
          SetStatus2(true);
        }
        if (result.isPlaying === true) {
          rain.current.pauseAsync();
          SetStatus2(false);
        }
      }
  }

  const FireASMR = async () => {
    try{
      const result = await fireplace.current.loadAsync(require('../../assets/ASMR/fireplace.wav'), {downloadFirst: true}, true);
      if (result.isLoaded === false) {
        console.log('Error in Loading Audio');
      }
    } catch (error) {
    }
    const result = await fireplace.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          fireplace.current.setIsLoopingAsync(true)
          fireplace.current.playAsync();
          SetStatus3(true);
        }
        if (result.isPlaying === true) {
          fireplace.current.pauseAsync();
          SetStatus3(false);
        }
      }
  }

  React.useEffect(() => {
    return () => {wind.current.unloadAsync(), rain.current.unloadAsync(), fireplace.current.unloadAsync()}
  }, []);

  return (
    <View style={ASMRstyle.containerButtonASMR}>
      <View>
        {/* <VerticalSlider
          borderRadius={50}
          value={volNumber}
          disabled={false}
          min={0}
          max={1}
          step={0.01}
          width={25}
          height={175}
          onChange={(value) => {
            setVolNumber(value);
          }}
          onComplete={(value) => {
            setVolNumber(value);
          }}
        /> */}
      </View>
      <View>
        <TouchableOpacity onPress={WindASMR} style={{padding: 10, borderRadius:5, margin:5, backgroundColor: Status1 ? "green" : "red"}}>
            <View>
              <FontAwesome5 name="wind" size={30} color="black" />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={RainASMR} style={{padding: 10, borderRadius:5, margin:5, backgroundColor: Status2 ? "green" : "red"}}>
          <View>
            <Ionicons name="rainy" size={30} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={FireASMR} style={{padding: 10, borderRadius:5, margin:5, backgroundColor: Status3 ? "green" : "red"}}>
          <View>
            <MaterialCommunityIcons name="fireplace" size={30} color="black" />
          </View>
        </TouchableOpacity>
      </View>      
    </View>
  )
}

export default ASMRbutton;