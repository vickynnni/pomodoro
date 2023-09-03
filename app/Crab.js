import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Keyboard, TextInput, KeyboardAvoidingView, StyleSheet, Image, Text, View, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { useEffect,useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const colours = [ "#85B09A", "#5D8AA8", "#B22222"];
const Stack = createStackNavigator();

export default function Spotify() {
  
    const navigation = useNavigation();
    const saySth = () => {
        return;
    };

    // navigation through different screens
    const handleTasksPress = () => {
        navigation.navigate('Tasks');
    };

    const handleHomePress = () => {
        navigation.navigate('Home');
    };

    const handleSpotyPress = () => {
        navigation.navigate('Spotify');
    };

    return (
        <SafeAreaView style={ styles.container }>
        
            <View style = {{ flex: 1, paddingHorizontal: 15 }}>
                <View style = {{ flexDirection: "row", justifyContent: 'space-between', width: "100%", }}> 
                    <TouchableOpacity onPress={handleHomePress} >
                        <Image source={require('../assets/icons/home.png')} style={styles.menu} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleTasksPress}>
                        <Image source={require('../assets/icons/list.png')} style={styles.menu} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleSpotyPress}>
                        <Image source={require('../assets/icons/spotify.png')} style={styles.menu} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../assets/icons/crab.png')} style={styles.selected} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.wrapCrab}>
                    <Image source={require('../assets/talking.png')} style = {styles.crab}  resizeMode="contain" />
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  text: {
    fontSize:32, 
    fontWeight: "bold",
    alignItems: 'center',
    padding: 5,
    backgroundColor: "white",
    marginTop: 15,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 3,
  },
  selected:{ 
    width: 35, 
    height: 35, 
    tintColor: 'white',
    backgroundColor: colours[1],
    borderRadius: 11,
    marginTop: 15,
  },
  button: {
    backgroundColor: "white",
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 3,
  },
  menu: {
    width: 35, 
    height: 35, 
    tintColor: colours[1],
    marginTop: 15,
  },
  crab: {    
    width: 300,
    height: 300,
  },
  wrapCrab: {
    backgroundColor: "#7BA05B",
    marginTop: 25,
    borderRadius: 15,
    alignItems: "center",
    paddingVertical: 120,
    paddingHorizontal: 3,
  }
});
