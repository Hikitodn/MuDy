import { View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const TodoList = () => {
  return (
    <View>
        <View>
            <TouchableOpacity>
                <Entypo name="add-to-list" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <View>
            <TextInput>asdfasdf</TextInput>
        </View>
    </View>
  )
}

export default TodoList;
