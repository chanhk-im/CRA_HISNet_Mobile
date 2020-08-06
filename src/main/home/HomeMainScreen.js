import React from 'react';
import { View, Text, Button } from 'react-native';

export function HomeMainScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Home</Text>
            <Button title="Information" onPress={() => navigation.navigate("Information")} />
        </View>
    );
}