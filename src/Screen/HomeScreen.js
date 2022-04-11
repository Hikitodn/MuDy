import { ImageBackground, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Location from 'expo-location';

import useFonts from '../../hooks/useFonts';
import ClockMoment from '../Layouts/ClockMoment';
import ASMRbutton from '../Layouts/ASMRbutton';
import TodoList from '../Layouts/TodoList';
import MediaPlayer from '../Layouts/MediaPlayer';

const API_KEY ='7d1900eed970ef3d7a68aaad4a1d7c30';
const img = require('../../assets/Images/background.png');

const HomeScreen = () => {

  //Call API to get weather icon
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
        
      {/* Background*/} 

      <ImageBackground style={styles.BG} source={img} resizeMode="cover">
          
        {/* Clock, Todo List Visible/Hidden */}

        <ClockMoment weatherData={data.weather} />
        
        
        <View style={styles.midContainer}>

          {/* List Add Button, List View  */}

          <TodoList />
            
          {/* ASMR */}
            
          <ASMRbutton />
        
        </View>

        {/* Music Player */}

        <MediaPlayer />

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
  midContainer: {
    flex: 3,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default HomeScreen;