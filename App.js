import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { useEffect,useState } from "react";
import Timer from './src/components/Timer';
import { Audio } from "expo-av";
import Options from './src/components/Options';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/Home';
import Tasks from './app/Tasks';
import Spotify from './app/Spotify';
import Crab from './app/Crab';
import { useNavigation } from '@react-navigation/native';

const colours = ["#5D8AA8", "#85B09A"];
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Tasks" component={Tasks} options={{ headerShown: false}} />
        <Stack.Screen name="Spotify" component={Spotify} options={{ headerShown: false}} />
        <Stack.Screen name="Crab" component={Crab} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}