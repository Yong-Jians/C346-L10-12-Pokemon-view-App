import React, {useState} from 'react';
import {StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';

import {Picker} from "@react-native-picker/picker";

import pokemon from "./pokemon";
import {Alert} from "react-native";
import pokemons from "./pokemon";


const EditPokemon = ({navigation,route}) => {
    const [name,setName] = useState(route.params.name);
    const [type,setType] = useState(route.params.type);
    const [newName, setNewName] = useState("");
    const [newType, setNewType] = useState("");
    const [image,setImageUrl] = useState("")
    const [Number,setNumber] = useState("");

    function Edit(){
        if (name == ""  ) {
            return Alert.alert("Please enter pokemon name");
        }

        if (newName == "") {
            return Alert.alert("Please enter Name!");
        }

        if (newType == ""){
            return Alert.alert("Please enter Type!");
        }

        if (image == ""){
            return Alert.alert("Please enter Image!");
        }


        if (Number == "") {
            return Alert.alert("Please enter Number!");
        }




        const existingTitle = pokemon.find(data => data.title === type);
        if (existingTitle) {
            const existingLetter = existingTitle.data.find(data => data["name"] == name)
            if (existingLetter) {
                existingLetter.name = newName
                existingLetter.imageUrl = image
                existingLetter.number = Number

                const AnotherType = pokemon.find(data => data.title === newType);

                if (AnotherType) {
                    AnotherType.data.push(existingLetter)
                    existingTitle.data.splice(existingTitle.data.indexOf(name), 1)

                }

                Alert.alert("Edit successful!")
                navigation.navigate('Home')
            }else {
                Alert.alert("ERROR. Cannot find pokemon in category !")
            }
        }
    }

    function  Delete() {
        console.log(type)
        const existingTitle = pokemon.find(data => data.title === type);
        if (existingTitle) {
            existingTitle.data.splice(existingTitle.data.indexOf(name), 1);
            navigation.navigate('Home')
        }
    }


    return (
        <View style={{marginTop  : 40}}>
            <Text>Input pokemon name you want to edit:</Text>
            <TextInput value={name}  placeholder={"Letter to edit"} style={{borderWidth : 2}} onChangeText={(value) => setName(value)}></TextInput>
            <Text>New Name for pokemon:</Text>
            <TextInput  placeholder={"new Letter"} style={{borderWidth : 2}} onChangeText={(value) => setNewName(value)}></TextInput>

            <Text>Image Url:</Text>
            <TextInput  placeholder={"Add image url"} style={{borderWidth : 2}} onChangeText={(value) => setImageUrl(value)}></TextInput>

            <Text>Num:</Text>
            <TextInput  placeholder={"Add Number"} style={{borderWidth : 2}} onChangeText={(value) => setNumber(value)}></TextInput>


            <Text>New type:</Text>
            <Picker  onValueChange={(value) => setNewType(value)}>
                <Picker.Item label="Dragon/Psychic" value="Dragon/Psychic" />
                <Picker.Item label="Electric" value="Electric" />
            </Picker>

            <TouchableOpacity onPress={Edit}  >
                <Text>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                Alert.alert(
                    'Delete Item',
                    'Are you sure you want to delete this item? This action cannot be undone.',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                        {
                            text: 'Delete',
                            onPress: () => Delete(),
                            style: 'destructive',
                        },
                    ],
                    {
                        cancelable: true,
                        onDismiss: () => console.log('Dialog dismissed'),
                    }
                );
            }}  >
                <Text>Delete</Text>
            </TouchableOpacity>

        </View>
    )
}



export default EditPokemon