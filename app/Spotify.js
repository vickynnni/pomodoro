import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Keyboard, TextInput, KeyboardAvoidingView, StyleSheet, Image, Text, Linking, View, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { useEffect,useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const colours = ["#355E3B", "#85B09A", "#5D8AA8"];
const Stack = createStackNavigator();

export default function Spotify() {

    const openSpotifyLink = (link) => {
        const spotifyLink = link;
        Linking.openURL(spotifyLink).catch((err) =>
          console.error('Error al abrir el enlace de Spotify:', err)
        );
    };

    const navigation = useNavigation();
    // navigation through different screens
    const handleTasksPress = () => {
        navigation.navigate('Tasks'); // Navigate to the Tasks screen
    };
    const handleHomePress = () => {
        navigation.navigate('Home'); // Navigate to the Spotify screen
    };
    const handleCrabPress = () => {
        navigation.navigate('Crab'); // Navigate to the Crab screen
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
                    <TouchableOpacity >
                        <Image source={require('../assets/icons/spotify.png')} style={styles.selected} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleCrabPress}>
                        <Image source={require('../assets/icons/crab.png')} style={styles.menu} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>cool study playlists</Text>
                </TouchableOpacity>

                {/* Playlists */}
                 <View style={{flexDirection: "row", justifyContent: 'space-between', width: "100%",}}>

                    <TouchableOpacity onPress={() => openSpotifyLink('https://open.spotify.com/playlist/0OgWoucxKFXJsf5wxtrKdw?si=19ad05ce06ac40a6')}>
                            <Image source={require('../assets/playlist/rory.png')} style={styles.image} />
                            <Text style={styles.playlist}>rory gilmore</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openSpotifyLink('https://open.spotify.com/playlist/05OkqemhVmD27zXfdnyNsy?si=9a896e0c9a6a4741')}>
                            <Image source={require('../assets/playlist/lofi.png')} style={styles.image} />
                            <Text style={styles.playlist}>lofi</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: "row", justifyContent: 'space-between', width: "100%",}}>
                    <TouchableOpacity onPress={() => openSpotifyLink('https://open.spotify.com/playlist/1jddhrER2GDxS4nCMyFHf4?si=83fde192a47c4674')}>
                            <Image source={require('../assets/playlist/elevator.png')} style={styles.image} />
                            <Text style={styles.playlist}>elevator music</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openSpotifyLink('https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO?si=b2857b13c3774dde')}>
                            <Image source={require('../assets/playlist/piano.png')} style={styles.image} />
                            <Text style={styles.playlist}>piano music</Text>
                    </TouchableOpacity>
                </View> 
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
  playlist: {
    marginTop: 10,
    fontSize:20, 
    fontWeight: "bold",
    alignItems: 'center',
    color: colours[2],
  },
  image: {
    marginTop: 35,
    width: 150,
    height: 150,
  },
  selected:{ 
    width: 35, 
    height: 35, 
    tintColor: colours[2],
    backgroundColor: "white",
    borderRadius: 11,
    marginTop: 15,
  },
  button: {
    backgroundColor: colours[2],
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 3,
  },
  menu: {
    width: 35, 
    height: 35, 
    tintColor: colours[2],
    marginTop: 15,
  },
});
