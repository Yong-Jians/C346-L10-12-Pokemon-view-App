import React, {useState} from 'react';
import {StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';

import {Picker} from "@react-native-picker/picker";

import pokemon from "./pokemon";
import {Alert} from "react-native";

const AddPokemon = ({navigation}) => {
    const [name,setName] = useState("");
    const [type,setType] = useState("");

    function Add(){
        if (name == ""  ) {
            return Alert.alert("name empty!");
        }

        if (type == "") {
            return Alert.alert("Please enter Title!");
        }


        const existingTitle = pokemon.find(data => data.title === type);

        if (existingTitle) {
            existingTitle.data.push({name : name, title : type})
            Alert.alert("Added pokemon!")
            navigation.navigate('Home');
        }
    }


    return (
        <View style={{marginTop  : 40}}>
            <Text>Pokemon Name:</Text>
            <TextInput  placeholder={"Add Pokemon"} style={{borderWidth : 2}} onChangeText={(value) => setName(value)}></TextInput>

            <Picker selectedValue={type} onValueChange={(value) => setType(value)}>
                <Picker.Item label="Dragon/Psychic" value="Dragon/Psychic" />
                <Picker.Item label="Electric" value="Electric" />
            </Picker>

            <TouchableOpacity onPress={Add}  >
                <Text>Add</Text>
            </TouchableOpacity>

        </View>
    )
}



export default AddPokemon


