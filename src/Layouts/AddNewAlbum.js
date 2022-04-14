import { Text, View, Button, Image, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import NewAlbumStyle from '../Styles/NewAlbumStyle';

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
                        <TextInput style={{backgroundColor: '#fff'}} />
                        <TextInput style={{backgroundColor: '#fff'}} />
                    </View>
                </View>
            </View>

            <View style={NewAlbumStyle.SongsView}>

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

