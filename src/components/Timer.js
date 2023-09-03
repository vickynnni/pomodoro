import { Text, View, StyleSheet} from "react-native";

export default function Timer ({ time }) {
    const formattedTime = `${Math.floor(time / 3600).toString().padStart(2, "0")}:${Math.floor((time % 3600) / 60).toString().padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;
    return (
        <View style={styles.container}>
            <Text style = {styles.time}>{formattedTime}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        justifyContent: 'center',
        backgroundColor: "#F2F2F2",
        padding: 15,
        borderRadius: 30,
    },
    time: {
        fontSize: 70,
        fontWeight: "bold",
        textAlign: "center",
        color: "#5D8AA8",
    }
});