import { Text, View, Image, TouchableOpacity, Modal, TextInput, PushNotificationIOS } from 'react-native'
import React, { useState, useEffect } from 'react'
import moment from 'moment'
import ClockStyle from '../Styles/ClockStyle'
import * as Notifications from 'expo-notifications';
import { Feather, Ionicons } from '@expo/vector-icons'

const ClockMoment = ({weatherData, onPressed}) => {
        
    //moment data for clock
    const [currentDateMoment, setCurrentDateMonent] = useState('')
    useEffect(() => {
      setInterval(() => {
        var dateMoment = moment().format('hh:mm');
        setCurrentDateMonent(dateMoment);
      }, 1000);
    }, []);

    //Alarm Notifications
    const [showBellModal, setShowBellModal] = useState(false);
    const [bellTime, setBellTime] = useState('');
    // const setAlarm = () => {
    //   Notifications
    // }
    //Not done yet!!!!!!!!!!!!!!!!!!!!!!!!!!

    async function registerForPushNotificationsAsync() {
      let token;
      if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert('Failed to get push token for push notification!');
          return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
      } else {
        alert('Must use physical device for Push Notifications');
      }
    
      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
    
      return token;
    }

    //API icon
    if(weatherData){
    const img = {uri: 'http://openweathermap.org/img/wn/'+ weatherData[0].icon +'@4x.png'}
    return(
      <View>
        <Modal 
          visible={showBellModal}
          transparent
          onRequestClose={() => setShowBellModal(false)}
          animationType='slide'
          hardwareAccelerated
        >
          <View style={ClockStyle.centerBell}>
            <View style={ClockStyle.bellModal}>
              <View style={ClockStyle.bellBody}>
                <Text>Set Your Time</Text>
                <TextInput 
                  style={ClockStyle.bellInput} 
                  keyboardType='numeric'
                  value={bellTime}
                  onChangeText={(value) => setBellTime(value)}
                  maxLength={3}
                  defaultValue={'0'}
                />
                <Text>minute(s)</Text>
              </View>
              <View style={ClockStyle.bellButton}>
                <TouchableOpacity onPress={() => {setShowBellModal(false)}} style={ClockStyle.bellCancel}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => {setShowBellModal(false)
                                  }} 
                  style={ClockStyle.bellOk}>
                  <Text>Ok</Text>
                </TouchableOpacity>
              </View>
            </View> 
          </View> 
        </Modal>
        <View style={ClockStyle.clockContainer}>
            <View style={ClockStyle.innerClockWeather}>
                <Text style={ClockStyle.clockText}>{currentDateMoment}</Text>
                <Image style={ClockStyle.weatherImage} source={img} />
            </View>
            <View style={ClockStyle.ultiContainer}>
              <View style={{marginRight: 10}}>
                <TouchableOpacity onPress={() => {setShowBellModal(true)}} style={ClockStyle.innerUlti}>
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
