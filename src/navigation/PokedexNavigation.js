import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";
// import PokemonScreen from "../api/Pokemon";

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen name="Pokemon" component={PokemonScreen} />
    </Stack.Navigator>
  );
}
