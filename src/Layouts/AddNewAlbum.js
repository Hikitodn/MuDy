import { Text, View, Button, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import NewAlbumStyle from '../Styles/NewAlbumStyle';
import { FontAwesome5 } from '@expo/vector-icons';

const AddNewAlbum = () => {
    
    const navigation = useNavigation();

    return (
        <View style={NewAlbumStyle.container}>
            <View style={NewAlbumStyle.AlbumView}>
                <View style={NewAlbumStyle.innerAlbum}>
                    <View style={NewAlbumStyle.innerImage}>
                        {/* <Image style={{width: 50, height: 50}} source={require('../../assets/Images/background.png')} ></Image> */}
                    </View>
                    <View style={NewAlbumStyle.innerForm}>
                        <Text>Title:</Text>
                        <TextInput placeholder='Enter your title' style={NewAlbumStyle.title} />
                        <Text>Description:</Text>
                        <TextInput 
                            placeholder='Enter your Description' 
                            multiline 
                            numberOfLines={2} 
                            style={NewAlbumStyle.description} 
                        />
                    </View>
                </View>
            </View>

            <View style={NewAlbumStyle.SongsView}>
                <View style={NewAlbumStyle.innerSongs}>
                    <Text>aaaa</Text>
                    <View style={NewAlbumStyle.innerAdd}>
                        <TouchableOpacity style={NewAlbumStyle.add}>
                            <FontAwesome5 name="plus" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={NewAlbumStyle.ButtonView}>
                <View style={NewAlbumStyle.ButtonStyle}>
                    <Button onPress={() => navigation.goBack()}  title='Back' />
                </View>
                <View style={NewAlbumStyle.ButtonStyle}>
                    <Button title='Create' />
                </View>
            </View>

        </View>
    )
}

export default AddNewAlbum;

