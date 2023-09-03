import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, TextInput, KeyboardAvoidingView, StyleSheet, Image, Text, View, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { useEffect,useState } from "react";
import Timer from '../src/components/Timer';
import { Audio } from "expo-av";
import Options from '../src/components/Options';
import Todo from '../src/components/Todo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const colours = [ "#85B09A", "#5D8AA8"];
const Stack = createStackNavigator();

export default function Tasks() {
  
  const navigation = useNavigation();

  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);
  
  useEffect(() => {
    // Cargar la lista de tareas guardada al cargar la aplicación
    loadTasks();
  }, []);

  useEffect(() => {
    // Guardar la lista de tareas cuando cambia
    saveTasks();
  }, [taskList]);

  // navigation through different screens
  const handleHomePress = () => {
    navigation.navigate('Home');
  }
  const handleSpotyPress = () => {
    navigation.navigate('Spotify');
  }
  const handleCrabPress = () => {
    navigation.navigate('Crab');
  };

  function handleAdd() {
    Keyboard.dismiss();
    setTaskList([...taskList, task]); // Add the task to the list of tasks
    setTask(null); // clear the input
  }

  function handleDone(index) {
    let itemsCopy = [...taskList];
    itemsCopy.splice(index, 1);
    setTaskList(itemsCopy);
  } 

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem('taskList', JSON.stringify(taskList));
    } catch (error) {}
  };

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('taskList');
      if (storedTasks !== null) {
        setTaskList(JSON.parse(storedTasks));
      }
    } catch (error) {}
  };

  return (
    <SafeAreaView style={ styles.container }>
        
      <View style = {{ flex: 1, paddingHorizontal: 15 }}>   
        <View style = {{ flexDirection: "row", justifyContent: 'space-between', width: "100%", }}>
        {/* navbar */}
          <TouchableOpacity onPress={handleHomePress} >
            <Image source={require('../assets/icons/home.png')} style={styles.menu} />
          </TouchableOpacity>

          <TouchableOpacity >
            <Image source={require('../assets/icons/list.png')} style={styles.selected} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSpotyPress}>
            <Image source={require('../assets/icons/spotify.png')} style={styles.menu} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCrabPress}>
           <Image source={require('../assets/icons/crab.png')} style={styles.menu} />
          </TouchableOpacity>

        </View>

          <TouchableOpacity style={styles.button}>
            <Text style={{ color: colours[1], fontSize: 25, fontWeight: "bold" }}>to-do</Text>
          </TouchableOpacity>



          <View style = { styles.tasks }>
            {
              taskList.map((item, index) => {
                return (
                  <TouchableOpacity key={index}  onPress={() => handleDone(index)}>
                    <Todo text={item} /> 
                  </TouchableOpacity>
                )
                })
            }
          </View>

          {/* Write new task */}
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
            <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
            <TouchableOpacity onPress={handleAdd}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
  
      </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  selected:{ 
    width: 35, 
    height: 35, 
    tintColor: "white",
    backgroundColor: colours[1],
    borderRadius: 11,
    marginTop: 15,
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
  button: {
    backgroundColor: "white",
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 3,
  },
  tasks: {
    paddingTop: 25,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 30,
    borderColor: colours[1],
    borderWidth: 1,
    width: 270,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colours[1],
    borderWidth: 1,
  },
  menu: {
    width: 35, 
    height: 35, 
    tintColor: colours[1],
    marginTop: 15,
  },
});
