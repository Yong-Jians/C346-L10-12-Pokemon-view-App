import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View , SectionList , Image} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {useFonts} from "expo-font";
import {Alert} from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Background from "./Background";
const CardsComponent = ({pokemon}) => {

  const renderItem = ({item}) => {
    return (
        <View style={styles.cardContainer}>
          <Text style={{fontSize : 30,color : "grey",backgroundColor : "white"}}>{item.name}</Text>
          <Image source={{uri: item.imageUrl}} style={{width : 200,height : 300}}/>
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

export default function App() {
  const [fontsLoaded] = useFonts({
    pocketFont : require('./assets/Fonts/PocketMonk-15ze.ttf'),
  })
  const pokemons = [
    {
      title: "Electric",
      bg : ["#cbc44c", "#d3cabd"],
      icon : "bolt-lightning",
      data: [
        {
          name: "Raichu",
          imageUrl: "https://images.pokemontcg.io/base1/14.png",
          number : 14,
        }
      ]
    },
    {
      title: "Dragon/Psychic",
      bg : ["#7B2FF7", "#E64980"],
      icon : "dragon",
      data: [
        {
          name: "Latias",
          imageUrl: "https://images.pokemontcg.io/ex8/105.png",
          number : 105
        },
        {
          name: "Latios",
          imageUrl: "https://images.pokemontcg.io/ex8/106.png",
          number : 106,
        }
      ]
    }
  ];


  return (
    <View style={styles.container}>
      <Background/>
      <Button title={"Add Pokemon"} onPress={() => Alert.alert("coming soon")}></Button>
      <CardsComponent pokemon={pokemons} />
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
