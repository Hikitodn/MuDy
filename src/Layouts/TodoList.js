import { View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import ListStyle from '../Styles/ListStyle';
import { useState } from 'react';

const TodoList = () => {

  const [inputs, setInputs] = useState([{key: '', value: ''}]);

  const addHandler = ()=>{
    const _inputs = [...inputs];
    _inputs.push({key: '', value: ''});
    setInputs(_inputs);
  }
  
  const deleteHandler = (key)=>{
    const _inputs = inputs.filter((input,index) => index != key);
    setInputs(_inputs);
  }

  const inputHandler = (text, key)=>{
    const _inputs = [...inputs];
    _inputs[key].value = text;
    _inputs[key].key   = key;
    setInputs(_inputs);
  }

  return (
    <View style={ListStyle.container}>
      <View style={ListStyle.listContainer}>

          <View>
              <TouchableOpacity onPress={addHandler} style={ListStyle.addInput}>
                  <Entypo name="add-to-list" size={24} color="black" />
              </TouchableOpacity>
          </View>

          <ScrollView>
            {inputs.map((input, key)=>(
              <View style={ListStyle.innerInput} key={key}>
                <View style={ListStyle.inputList}>
                  <TextInput style={ListStyle.inputTodo} placeholder={"Enter here"} value={input.value} onChangeText={(text)=>inputHandler(text,key)}></TextInput>
                </View>
                <View style={ListStyle.innerUlti}>
                  <TouchableOpacity 
                    style={ListStyle.Ulti} 
                    onPress = {()=> deleteHandler(key)}
                  >
                    <MaterialIcons name="delete" size={22} color="black" />              
                  </TouchableOpacity> 
                </View>
              </View>
            ))}
          </ScrollView>
          
      </View>
    </View>
  )
}

export default TodoList;
