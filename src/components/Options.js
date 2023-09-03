import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["work", "rest"];
const colours = ["#5D8AA8", "#85B09A"];

export default function Header( { setTime, isActive }) {
    
    function handleStartStop() {
        setActive(!isActive);
    }

    function handlePress(index) {
        if (index === 0) setTime (25 * 60);
        else if (index === 1) setTime(5 * 60);
    }
    
    return (
        <View style= {{ flexDirection: "row" }}>
            {options.map((item, index) => (
                <TouchableOpacity key = {index} onPress ={() => handlePress(index)} style = {styles.options}>                    
                    <Text style={{ fontWeight: "bold", fontSize: 20, color: "white"}}> {item} </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    options: {
        width: "50%",
        alignItems: 'center',
        padding: 5,
        marginVertical: 20,
    },
});