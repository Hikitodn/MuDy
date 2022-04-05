import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ASMRstyle from '../Styles/ASMRstyle'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

const ASMRbutton = () => {
  return (
    <View style={ASMRstyle.containerButtonASMR}>
          <TouchableOpacity style={ASMRstyle.buttonAnimation}>
            <View style={ASMRstyle.buttonASMR}>
                <FontAwesome5 name="wind" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={ASMRstyle.buttonAnimation}>
            <View style={ASMRstyle.buttonASMR}>
                <Ionicons name="rainy" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={ASMRstyle.buttonAnimation}>
            <View style={ASMRstyle.buttonASMR}>
                <FontAwesome5 name="snowflake" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
  )
}

export default ASMRbutton;