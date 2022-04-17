import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import moment from 'moment'
import ClockStyle from '../Styles/ClockStyle'
import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';

const ClockMoment = ({weatherData, onPressed}) => {
        
    //moment data for clock
    const [currentDateMoment, setCurrentDateMonent] = useState('')
    useEffect(() => {
      setInterval(() => {
        var dateMoment = moment().format('hh:mm');
        setCurrentDateMonent(dateMoment);
      }, 1000);
    }, []);

    //API icon
    if(weatherData){
    const img = {uri: 'http://openweathermap.org/img/wn/'+ weatherData[0].icon +'@4x.png'}
    return(
      <View>
        <View style={ClockStyle.clockContainer}>
            <View style={ClockStyle.innerClockWeather}>
                <Text style={ClockStyle.clockText}>{currentDateMoment}</Text>
                <Image style={ClockStyle.weatherImage} source={img} />
            </View>
            <View style={ClockStyle.ultiContainer}>
              <View style={{marginRight: 10}}>
                <TouchableOpacity style={ClockStyle.innerUlti}>
                  <Ionicons name="alarm-outline" size={30} color="#80ACFF" />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={() => onPressed()} style={ClockStyle.innerUlti}>
                  <Feather name="list" size={30} color="#80ACFF" />
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </View>
    )
  } else {
    return( 
      <View style={ClockStyle.clockContainer}>
        <View style={ClockStyle.innerClockWeather}>
            <Text style={ClockStyle.clockText}>{currentDateMoment}</Text>
            <MaterialIcons name="error" size={24} color="black" />
        </View>
        <View style={ClockStyle.ultiContainer}>
          <View style={{marginRight: 10}}>
            <TouchableOpacity style={ClockStyle.innerUlti}>
              <Ionicons name="alarm-outline" size={30} color="#80ACFF" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => onPressed()} style={ClockStyle.innerUlti}>
              <Feather name="list" size={30} color="#80ACFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default ClockMoment;
