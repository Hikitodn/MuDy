import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5, MaterialIcons  } from '@expo/vector-icons';
import { StatusBar } from 'react-native';

import HomeScreen from './src/Screen/HomeScreen';
import AlbumScreen from './src/Screen/AlbumScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer> 
      <StatusBar hidden/>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,       
        }}
      >
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
    </NavigationContainer>
  );
}

export default App;