import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useEffect,useState } from "react";
import Timer from '../src/components/Timer';
import { Audio } from "expo-av";
import Options from '../src/components/Options';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const colours = ["#5D8AA8", "#85B09A", "#003262"];
const Stack = createStackNavigator();

export default function Home() {
    const navigation = useNavigation();
  
    
  // navigation through different screens
    const handleTasksPress = () => {
        playSound();
      navigation.navigate('Tasks');
    };

    const handleSpotyPress = () => {
      playSound();
    navigation.navigate('Spotify');
    };

    const handleCrabPress = () => {
      playSound();
    navigation.navigate('Crab');
   };
  
  const [time, setTime] = useState(25 * 60);
  const [isActive, setActive] = useState(false);
  
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      setActive(false);
      setWorking((prev) => !prev);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  function handleStartStop() {
    playSound();
    setActive(!isActive);
  }

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/click.mp3")
    )
    await sound.playAsync();
  }

    return (
      <SafeAreaView style={ [styles.container, {backgroundColor: colours[0]},] }>
        <View style = {{ flex: 1, paddingHorizontal: 15 }}>
        
          <View style = {{ flexDirection: "row", justifyContent: 'space-between', width: "100%", }}>
            <TouchableOpacity>
              <Image source={require('../assets/icons/home.png')} style={styles.selected} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleTasksPress}>
              <Image source={require('../assets/icons/list.png')} style={styles.menu} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleSpotyPress}>
              <Image source={require('../assets/icons/spotify.png')} style={styles.menu} />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCrabPress}>
              <Image source={require('../assets/icons/crab.png')} style={styles.menu} />
            </TouchableOpacity>
          </View>  

          <Options setTime = {setTime} />
          <Timer time = {time} />

          <TouchableOpacity onPress={handleStartStop} style={styles.button}>
            <Text style={{ color: colours[0], fontSize: 25, fontWeight: "bold" }}>
              {isActive ? "stop" : "start" }
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize:32, 
    fontWeight: "bold" 
  },
  button: {
    backgroundColor: "white",
    // padding: 15,
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 3,
  },
  selected:{ 
    width: 35, 
    height: 35, 
    tintColor: colours[0],
    backgroundColor: "white",
    borderRadius: 11,
    marginTop: 15,
  },
  menu: {
    width: 35, 
    height: 35, 
    tintColor: 'white',
    marginTop: 15,
  },
});
