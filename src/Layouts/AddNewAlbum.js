import { Text, View, Button, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, {useState, useContext} from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

import NewAlbumStyle from '../Styles/NewAlbumStyle';
import { AudioContext } from '../context/AudioProvider';

const AddNewAlbum = () => {
    const context = useContext(AudioContext)
    const {playList, addToPlayList, updateState} = context;

    const [playListName, setplayListName] = useState('')
    const [desPlaylist, setDesPlaylist] = useState('')
    const [selectedImage, setSelectedImage] = useState(null);
    const navigation = useNavigation();

    const createNewAlbum = async () => {
        const result = await AsyncStorage.getItem('playlist');
        if(result !== null || result === null){
            const audios = [];
            if(addToPlayList){
                audios.push(addToPlayList)
            }
            const newList = {
                id: Date.now(),
                title: playListName,
                image: selectedImage.localUri,
                des: desPlaylist,
                audios: audios,
            }
            if (!playListName.trim()) {
                Alert.alert("Please Enter Your Playlist Name!!!")
            } else {
                const updatedList = [...playList, newList];
                updateState(context, {addToPlayList: null, playList: updatedList});
                await AsyncStorage.setItem('playlist', JSON.stringify(updatedList));
                navigation.navigate('Albums', playList);
            }
        }
    }

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert('Permission to access camera roll is required!');
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
        });
    
        if (pickerResult.cancelled === true) {
          return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    };

    if(selectedImage === null){

    return (
        <View style={NewAlbumStyle.container}>
            <View style={NewAlbumStyle.AlbumView}>
                <View style={NewAlbumStyle.innerAlbum}>
                    <View style={NewAlbumStyle.innerImage}>
                        <TouchableOpacity onPress={openImagePickerAsync} style={NewAlbumStyle.addImage}>
                            <Image style={{width: 75, height: 75}} source={require('../../assets/Images/add-image.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={NewAlbumStyle.innerForm}>
                        <Text>Title:</Text>
                        <TextInput 
                            value={playListName} 
                            onChangeText={(text) => setplayListName(text)}
                            placeholder='Enter your title' 
                            style={NewAlbumStyle.title} />
                        <Text>Description:</Text>
                        <TextInput
                            value={desPlaylist} 
                            onChangeText={(des) => setDesPlaylist(des)}
                            placeholder='Enter your Description' 
                            multiline 
                            numberOfLines={4} 
                            style={NewAlbumStyle.description}
                        />
                    </View>
                </View>
            </View>

            <View style={NewAlbumStyle.SongsView}>
                <View style={NewAlbumStyle.innerSongs}>
                    <Text></Text>
                </View>
            </View>

            <View style={NewAlbumStyle.ButtonView}>
                <View style={NewAlbumStyle.ButtonStyle}>
                    <Button onPress={() => navigation.goBack()}  title='Back' />
                </View>
                <View style={NewAlbumStyle.ButtonStyle}>
                    <Button onPress={createNewAlbum} title='Create' />
                </View>
            </View>
        </View>
    )
    } else {
        return(
            <View style={NewAlbumStyle.container}>
                <View style={NewAlbumStyle.AlbumView}>
                    <View style={NewAlbumStyle.innerAlbum}>
                        <View style={NewAlbumStyle.innerImage}>
                            <Image
                                source={{ uri: selectedImage.localUri }}
                                style={{width: 150, height: 150}}
                            />
                        </View>
                        <View style={NewAlbumStyle.innerForm}>
                            <Text>Title:</Text>
                            <TextInput 
                                value={playListName} 
                                onChangeText={(text) => setplayListName(text)}
                                placeholder='Enter your title' 
                                style={NewAlbumStyle.title} />
                            <Text>Description:</Text>
                            <TextInput
                                value={desPlaylist} 
                                onChangeText={(des) => setDesPlaylist(des)}
                                placeholder='Enter your Description' 
                                multiline 
                                numberOfLines={4} 
                                style={NewAlbumStyle.description} 
                            />
                        </View>
                    </View>
                </View>

                <View style={NewAlbumStyle.SongsView}>
                    <View style={NewAlbumStyle.innerSongs}>
                        
                    </View>
                </View>

                <View style={NewAlbumStyle.ButtonView}>
                    <View style={NewAlbumStyle.ButtonStyle}>
                        <Button onPress={() => navigation.goBack()}  title='Back' />
                    </View>
                    <View style={NewAlbumStyle.ButtonStyle}>
                        <Button onPress={createNewAlbum} title='Create' />
                    </View>
                </View>
            </View>
        )
    }
}

export default AddNewAlbum;

