import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ASMRstyle from '../Styles/ASMRstyle'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const ASMRbutton = () => {

  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../../assets/Songs/failsound.wav')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); 
  }

  
  const [isPressed1, setPressed1] = useState(false)
  const [isPressed2, setPressed2] = useState(false)
  const [isPressed3, setPressed3] = useState(false)

  const toggle2 = () => {
    setPressed1(false)
    setPressed2(true)
    setPressed3(false)
  }

  const toggle3 = () => {
    setPressed1(false)
    setPressed2(false)
    setPressed3(true)
  }


  return (
    <View style={ASMRstyle.containerButtonASMR}>
      {/* <View>
      
      </View> */}
      <View>
        <TouchableOpacity onPress={playSound} style={{padding: 10, borderRadius:5, margin:5, backgroundColor: isPressed1 ? "green" : "red"}}>
            <View>
              <FontAwesome5 name="wind" size={30} color="black" />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggle2} style={{padding: 10, borderRadius:5, margin:5, backgroundColor: isPressed2 ? "green" : "red"}}>
          <View>
            <Ionicons name="rainy" size={30} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggle3} style={{padding: 10, borderRadius:5, margin:5, backgroundColor: isPressed3 ? "green" : "red"}}>
          <View>
            <FontAwesome5 name="snowflake" size={30} color="black" />
          </View>
        </TouchableOpacity>
      </View>      
    </View>
  )
}

export default ASMRbutton;