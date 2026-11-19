import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View , SectionList , Image} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {useFonts} from "expo-font";
import {Alert} from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



const Background = () => {
    return (
        <Image source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgDr-V09wWdBFLdLYWKiKzaPwGBld0dzda4jfZ6lEYg&s=10"}}
        style={{width:'100%',height:'110%',zIndex : 0,position : "absolute"}}/>
    )
}

export default Background