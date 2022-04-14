import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AlbumStyle from '../Styles/AlbumStyle'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AlbumList = () => {
    
    const navigation = useNavigation();

    return (
        <View style={AlbumStyle.container}>
            <View style={AlbumStyle.inner}>
                <View style={AlbumStyle.innerImage} >
                    <Image style={AlbumStyle.image} source={require('../../assets/Images/background.png')} />
                </View>
                <View style={AlbumStyle.innerText}>
                    <Text style={{flex: 1, fontSize: 16}}>Album Title</Text>
                    <Text style={{flex: 2, fontSize: 12}}>Description</Text>
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
            <View style={AlbumStyle.innerAdd}>
                <TouchableOpacity onPress={() => navigation.navigate('New Album')} style={AlbumStyle.add}>
                    <FontAwesome5 name="plus" size={40} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AlbumList;