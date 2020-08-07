import React from 'react';
import { View, Text } from 'react-native';

export function NormalScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>일반 공지</Text>
        </View>
    );
}