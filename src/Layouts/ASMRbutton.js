import { View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { play, pause } from '../Misc/audioController';
import VerticalSlider from 'rn-vertical-slider';

import ASMRstyle from '../Styles/ASMRstyle'

const ASMRbutton = () => {
  const [isPressed1, setStatus1] = useState(false);
  const [isPressed2, setStatus2] = useState(false);
  const [isPressed3, setStatus3] = useState(false);
  
  const [volNumber, setVolNumber] = useState();
  const [sound, setSound] = useState();

  return (
    <View style={ASMRstyle.containerButtonASMR}>
      <View>
        <VerticalSlider
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
        />
      </View>
      <View>
        <TouchableOpacity style={{padding: 10, borderRadius:5, margin:5, backgroundColor: isPressed1 ? "green" : "red"}}>
            <View>
              <FontAwesome5 name="wind" size={30} color="black" />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10, borderRadius:5, margin:5, backgroundColor: isPressed2 ? "green" : "red"}}>
          <View>
            <Ionicons name="rainy" size={30} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10, borderRadius:5, margin:5, backgroundColor: isPressed3 ? "green" : "red"}}>
          <View>
            <FontAwesome5 name="snowflake" size={30} color="black" />
          </View>
        </TouchableOpacity>
      </View>      
    </View>
  )
}

export default ASMRbutton;