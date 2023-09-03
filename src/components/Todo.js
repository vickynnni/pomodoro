import React from "react";
import { View, Text, StyleSheet } from "react-native";

const colours = [ "#5D8AA8", "#85B09A", ];

export default function Todo (txt) {
    return (
        <View style = {styles.item}>
             <View style = {styles.tick}>
             <View style = {styles.square}></View>
                <Text style={styles.txt}>{txt.text}</Text>
             </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: colours[0],
        padding: 17,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      txt: {
        fontSize: 18,
        color: '#E8EAED',
      },
      tick: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
      },
      square: {
        backgroundColor: '#E8EAED',
        opacity: 0.8,
        width: 27,
        height: 27,
        borderRadius: 8,
        marginRight: 15,
      },
});
  