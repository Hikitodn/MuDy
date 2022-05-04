import { Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import AlbumStyle from '../Styles/AlbumStyle'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AudioContext } from '../context/AudioProvider';

const img = require('../../assets/Images/favourite.png');

const AlbumList = () => {
    
    const navigation = useNavigation();
    
    const context = useContext(AudioContext)
    const {playList, updateState} = context;

    const renderPlayList = async () => {
        const result = await AsyncStorage.getItem('playlist');
        if (result === null) {
          const defaultPlayList = {
            id: Date.now(),
            title: 'My Favorite',
            image: img,
            des: 'Listen to all your favourite songs',
            audios: [],
          };
    
          const newPlayList = [...playList, defaultPlayList];
          updateState(context, { playList: [...newPlayList] });
          return await AsyncStorage.setItem(
            'playlist',
            JSON.stringify([...newPlayList])
          );
        }
    
        updateState(context, { playList: JSON.parse(result) });
    };
    
    useEffect(() => {
        if (!playList.length) {
          renderPlayList();
        }
    }, []);

    return (
        <View style={AlbumStyle.container}>
            <ScrollView>
                {playList.length ? playList.map(item => (
                    <View style={AlbumStyle.inner} key={item.id.toString()}>
                        <View style={AlbumStyle.innerImage} >
                            <Image style={AlbumStyle.image} source={{uri: item.image}} />
                        </View>
                        <View style={AlbumStyle.innerText}>
                            <Text style={{flex: 1, fontSize: 16}}>{item.title}</Text>
                            <Text style={{flex: 2, fontSize: 12}}>{item.des}</Text>
                        </View>
                        <View style={AlbumStyle.innerUlti}>
                            <TouchableOpacity>
                                <FontAwesome5 name="play" size={22} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <FontAwesome5 name="edit" size={22} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <FontAwesome5 name="trash" size={22} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )) : 
                    <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 20, fontFamily: ''}}>Nothing in the Albums</Text>
                    </View>
                }
                
            </ScrollView>

            <View style={AlbumStyle.innerAdd}>
                <TouchableOpacity onPress={() => navigation.navigate('New Album')} style={AlbumStyle.add}>
                    <FontAwesome5 name="plus" size={40} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AlbumList;