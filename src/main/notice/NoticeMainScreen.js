import React from 'react';
import { View, Text, Button } from 'react-native';

export function NoticeMainScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Notice</Text>
            <Button 
                title="Normal" 
                onPress={() => navigation.navigate("Normal")} 
            />
            <Button 
                title="School" 
                onPress={() => navigation.navigate("School")} 
            />
            <Button 
                title="Scholarship" 
                onPress={() => navigation.navigate("Scholarship")} 
            />
            <Button 
                title="Dormitory" 
                onPress={() => navigation.navigate("Dormitory")} 
            />
            <Button 
                title="Graduate" 
                onPress={() => navigation.navigate("Graduate")} 
            />
            <Button 
                title="Employment" 
                onPress={() => navigation.navigate("Employment")} 
            />
        </View>
    );
}