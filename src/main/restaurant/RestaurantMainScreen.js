import React from 'react';
import { View, Text, Button } from 'react-native';

export function RestaurantMainScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Restaurant</Text>
            <Button 
                title="Student Restaurant" 
                onPress={() => navigation.navigate("StudentRestaurant")} 
            />
            <Button 
                title="MomsKitchen" 
                onPress={() => navigation.navigate("MomsKitchen")} 
            />
            <Button 
                title="HandongLounge" 
                onPress={() => navigation.navigate("HandongLounge")} 
            />
            <Button 
                title="GraceTable" 
                onPress={() => navigation.navigate("GraceTable")} 
            />      
        </View>
    );
}