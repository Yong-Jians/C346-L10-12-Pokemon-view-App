import React, {useState} from 'react';
import {StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';

import {Picker} from "@react-native-picker/picker";

import pokemon from "./pokemon";
import {Alert} from "react-native";

const AddPokemon = ({navigation}) => {
    const [name,setName] = useState("");
    const [type,setType] = useState("");
    const [image,setImageUrl] = useState("")
    const [Number,setNumber] = useState("");

    function Add(){
        if (name == ""  ) {
            return Alert.alert("name empty!");
        }

        if (type == "") {
            return Alert.alert("Please enter Title!");
        }

        if (image == ""){
            return Alert.alert("Please enter Image!");
        }

        if (Number == "") {
            return Alert.alert("Please enter Number!");
        }


        const existingTitle = pokemon.find(data => data.title === type);

        if (existingTitle) {
            existingTitle.data.push({name : name, title : type, imageUrl: image})
            Alert.alert("Added pokemon!")
            navigation.navigate('Home');
        }
    }


    return (
        <View style={{marginTop  : 40}}>
            <Text>Pokemon Name:</Text>
            <TextInput  placeholder={"Add Pokemon"} style={{borderWidth : 2}} onChangeText={(value) => setName(value)}></TextInput>

            <Text>Image Url:</Text>
            <TextInput  placeholder={"Add image url"} style={{borderWidth : 2}} onChangeText={(value) => setImageUrl(value)}></TextInput>

            <Text>Num:</Text>
            <TextInput  placeholder={"Add Number"} style={{borderWidth : 2}} onChangeText={(value) => setNumber(value)}></TextInput>


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


