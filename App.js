import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/Screen/HomeScreen';
import AlbumScreen from './src/Screen/AlbumScreen';
import AddNewAlbumScreen from './src/Screen/AddNewAlbumScreen';
import AudioProvider from './src/context/AudioProvider';
import SongsListScreen from './src/Screen/SongsListScreen';
import PlayListDetail from './src/Screen/PlayListDetail';

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const HomeTab = () => {
  return(
    <Tab.Navigator
          screenOptions={{
            headerShown: false,  
          }}
          initialRouteName="Home"
        >
          <Tab.Screen name = 'Song List' component= {SongsListScreen} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="folder-music" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen name="Home" component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen name="Albums" component={AlbumScreen} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="album" size={size} color={color}/>
              ),
            }}
          />
        </Tab.Navigator>
  )
}

const App = () => {
  return (
    <AudioProvider>
      <NavigationContainer> 
        <StatusBar hidden/>
        <RootStack.Navigator
          initialRouteName="HomeTab"
          screenOptions={{
            headerShown: false,  
          }}>

        <RootStack.Screen 
          name = 'HomeTab'
          component = {HomeTab}
        />

        <RootStack.Screen 
          name = 'New Album' 
          component = {AddNewAlbumScreen}  
        />

        <RootStack.Screen 
          name = 'PlayListDetail' 
          component = {PlayListDetail}  
        />
          
        </RootStack.Navigator>
      </NavigationContainer>
    </AudioProvider>
  );
}

export default App;