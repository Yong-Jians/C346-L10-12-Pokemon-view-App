import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View , SectionList , Image} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {useFonts} from "expo-font";
import {Alert} from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Background from "./Background";

import pokemons from "./pokemon";

const CardsComponent = ({pokemon,navigation}) => {

  const renderItem = ({item}) => {
    return (
        <View style={styles.cardContainer}>
          <Text style={{fontSize : 30,color : "grey",backgroundColor : "white"}}>{item.name}</Text>
          <Image source={{uri: item.imageUrl}} style={{width : 200,height : 300}}/>
          <Button title={"Edit"} onPress={() => navigation.navigate("Edit",{
            name : item.name,type : pokemons.find(entry => entry.data.some(key => key["name"] === item.name)).title
          })} ></Button>
        </View>
    )
  }

  const renderSection = ({section : {title , bg,icon}}) => {
    return (
        <>
        <LinearGradient colors={bg}>
          <FontAwesome6 style={{position : "absolute"}} name={icon} size={40} color="white" />
          <Text style={styles.sectionHeader}>{title}</Text>
        </LinearGradient>
    </>
    )
  }
  return (
      <SectionList sections={pokemon} renderItem={renderItem} renderSectionHeader={renderSection}/>
  )
}

export default function Home({navigation}) {
  const [fontsLoaded] = useFonts({
    pocketFont : require('./assets/Fonts/PocketMonk-15ze.ttf'),
  })



  return (
    <View style={styles.container}>
      <Background/>
      <Button title={"Add Pokemon"} onPress={() => {navigation.navigate("Add")} }></Button>
      <CardsComponent pokemon={pokemons} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : 40,
  },
  cardContainer: {
    flex: 1,
    alignItems : "center",
    borderWidth : 2,
    borderColor: "white",
    flexDirection : "row"
  },
  sectionHeader : {
    textAlign  : "center",
    fontSize : 40,
    color : "white",
    fontFamily : "pocketFont"
  }
});


