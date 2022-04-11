import { View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Entypo, AntDesign, MaterialIcons   } from '@expo/vector-icons';
import ListStyle from '../Styles/ListStyle';

const TodoList = () => {
  return (
    <View style={ListStyle.container}>
      <View style={ListStyle.listContainer}>
          <View>
              <TouchableOpacity style={ListStyle.addInput}>
                  <Entypo name="add-to-list" size={24} color="black" />
              </TouchableOpacity>
          </View>
          <View style={ListStyle.innerInput}>
            <View style={ListStyle.inputList}>
                <TextInput style={ListStyle.inputTodo} placeholder='fuck u'></TextInput>
            </View>
            <View style={ListStyle.innerUlti}>
              <TouchableOpacity style={ListStyle.Ulti1}>
                <AntDesign name="check" size={22} color="black" />              
              </TouchableOpacity>
              <TouchableOpacity style={ListStyle.Ulti2}>
                <MaterialIcons name="delete" size={22} color="black" />              
              </TouchableOpacity>
            </View>
          </View>
      </View>
    </View>
  )
}

export default TodoList;
