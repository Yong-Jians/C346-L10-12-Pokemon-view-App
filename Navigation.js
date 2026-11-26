import { NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./Home";
import AddPokemon from "./AddPokemon";
import EditPokemon from "./EditPokemon";
import {StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';



const Stack = createNativeStackNavigator();



const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Add" component={AddPokemon} />
                <Stack.Screen name="Edit" component={EditPokemon} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Navigation