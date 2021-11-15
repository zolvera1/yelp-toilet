import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput } from "react-native";

export default function App() {
    const [text, onChangeText] = React.useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>Yelp-toilet</Text>
            </View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Search..."
                />
                <View style={styles.emergencyButtonContainer}>
                    <Button
                        onPress={() => {
                            alert("You tapped the button!");
                        }}
                        title="It's an emergency"
                        color="#774433"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
    bodyContainer: {
        padding: 40,
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 35,
    },
    searchContainer: {
        backgroundColor: "#E5E5E5",
        width: "100%",
        height: "30%",
    },
    emergencyButtonContainer: {
        margin: 20,
        width: "40%",
    },
    textInput: {
        height: 40,
        width: "70%",
        margin: 20,
        borderWidth: 1,
        padding: 10,
    },
});
