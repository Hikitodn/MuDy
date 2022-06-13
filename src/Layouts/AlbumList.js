import { Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AlbumStyle from '../Styles/AlbumStyle'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AudioContext } from '../context/AudioProvider';
import PlayListDetail from './PlayListDetail';

let img = require('../../assets/Images/error.png')
let selectedPlayList = {}
const AlbumList = () => {
    
    const navigation = useNavigation();
    const [showPlayList, setShowPlayList] = useState(false)
    const context = useContext(AudioContext)
    const {playList, addToPlayList, updateState} = context;

    const renderPlayList = async () => {
        const result = await AsyncStorage.getItem('playlist');
        if (result === null) {
          const defaultPlayList = {
            id: Date.now(),
            title: 'My Favorite',
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
    
    const handleBannerPress = async playList => {
        if (addToPlayList) {
          const result = await AsyncStorage.getItem('playlist');
    
          let oldList = [];
          let updatedList = [];
          let sameAudio = false;
    
          if (result !== null) {
            oldList = JSON.parse(result);
    
            updatedList = oldList.filter(list => {
              if (list.id === playList.id) {
                // we want to check is that same audio is already inside our list or not.
                for (let audio of list.audios) {
                  if (audio.id === addToPlayList.id) {
                    // alert with some message
                    sameAudio = true;
                    return;
                  }
                }
    
                // otherwise update the playlist.
                list.audios = [...list.audios, addToPlayList];
              }
    
              return list;
            });
          }
    
          if (sameAudio) {
            Alert.alert(
              'Found same audio!',
              `${addToPlayList.filename} is already inside the list.`
            );
            sameAudio = false;
            return updateState(context, { addToPlayList: null });
        }
    
          updateState(context, { addToPlayList: null, playList: [...updatedList] });
          return AsyncStorage.setItem('playlist', JSON.stringify([...updatedList]));
        }
        // if there is no audio selected then we want open the list.
        selectedPlayList = playList;
        // setShowPlayList(true);
        navigation.navigate('PlayListDetail', playList);
    }

    const removePlaylist = async playList => {
        let isPlaying = context.isPlaying;
        let isPlayListRunning = context.isPlayListRunning;
        let soundObj = context.soundObj;
        let playbackPosition = context.playbackPosition;
        let activePlayList = context.activePlayList;
    
        if (context.isPlayListRunning && activePlayList.id === playList.id) {
          // stop
          await context.playbackObj.stopAsync();
          await context.playbackObj.unloadAsync();
          isPlaying = false;
          isPlayListRunning = false;
          soundObj = null;
          playbackPosition = 0;
          activePlayList = [];
        }
    
        const result = await AsyncStorage.getItem('playlist');
        if (result !== null) {
          const oldPlayLists = JSON.parse(result);
          const updatedPlayLists = oldPlayLists.filter(
            item => item.id !== playList.id
          );
    
          AsyncStorage.setItem('playlist', JSON.stringify(updatedPlayLists));
          context.updateState(context, {
            playList: updatedPlayLists,
            isPlayListRunning,
            activePlayList,
            playbackPosition,
            isPlaying,
            soundObj,
          });
        }
    }

    return (
        <View style={AlbumStyle.container}>
            <ScrollView>
                {playList.length ? playList.map(item => (
                    <TouchableOpacity
                        key={item.id.toString()}
                        onPress={() => handleBannerPress(item)}
                    >
                        <View style={AlbumStyle.inner}>
                            <View style={AlbumStyle.innerImage} >
                                <Image style={AlbumStyle.image} source={item.image == null ? img : {uri: item.image}} />
                            </View>
                            <View style={AlbumStyle.innerText}>
                                <Text style={{flex: 1, fontSize: 16}}>{item.title}</Text>
                                <Text style={{flex: 2, fontSize: 12}}>{item.des}</Text>
                                <Text>
                                    {item.audios.length > 1
                                    ? `${item.audios.length} Songs`
                                    : `${item.audios.length} Song`}
                                </Text>
                            </View>
                            <View style={AlbumStyle.innerUlti}>
                                <TouchableOpacity onPress={() => removePlaylist(item)}>
                                    <FontAwesome5 name="trash" size={30} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                )) : 
                    <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 20, fontFamily: ''}}>Nothing in the Albums</Text>
                    </View>
                }
            </ScrollView>

            <View style={AlbumStyle.innerAdd}>
                <TouchableOpacity onPress={() => navigation.navigate('New Album')} style={AlbumStyle.add}>
                    <FontAwesome5 name="plus" size={40} color="white" />
                </TouchableOpacity>
            </View>
            <PlayListDetail visible={showPlayList} playList={selectedPlayList} onClose={() => setShowPlayList(false)} />
        </View>
    )
}

export default AlbumList;