import { Keyboard, StatusBar, ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Location from 'expo-location';

import useFonts from './hooks/useFonts';
import ClockMoment from './src/Layouts/ClockMoment';
import ASMRbutton from './src/Layouts/ASMRbutton';
import TodoList from './src/Layouts/TodoList';

const API_KEY ='7d1900eed970ef3d7a68aaad4a1d7c30';
const img = require('./assets/Images/background.png');

const Home = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        fetchDataFromApi("16.0678", "108.2208")
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, [])

  const fetchDataFromApi = (latitude, longitude) => {
    if(latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`).then(res => res.json()).then(data => {

      // console.log(data)
      setData(data)
      })
    }
    
  }

  //useFonts 
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  } else {

  return (
    <View style={styles.container}>
      <StatusBar hidden/>

      {/* Background*/} 

      <ImageBackground style={styles.BG} source={img} resizeMode="cover">
          
        {/* Clock, Todo List Visible/Hidden */}

        <ClockMoment weatherData={data.weather} />
        
        {/* List Add Button, List View  */}
        
        <TodoList />
          
        {/* ASMR */}
          
        <ASMRbutton />

        {/* Music Player */}

      </ImageBackground>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  BG:{
    width: '100%',
    height: '100%',
  },
});

export default Home;