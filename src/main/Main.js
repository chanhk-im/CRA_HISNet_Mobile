import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { NoticeStackScreen, RestaurantStackScreen, HomeStackScreen, LectureStackScreen, SettingsStackScreen } from "./MainStackScreen";

const Maintab = createBottomTabNavigator();

export default function Main() {
    return (
        <NavigationContainer>
            <Maintab.Navigator>
                <Maintab.Screen
                    name="Notice"
                    component={NoticeStackScreen}
                    options={{
                        tabBarLabel: "공지",
                        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="file-document-outline" color={color} size={size} />,
                    }}
                />
                <Maintab.Screen
                    name="Restaurant"
                    component={RestaurantStackScreen}
                    options={{
                        tabBarLabel: "식단",
                        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="silverware-fork-knife" color={color} size={size} />,
                    }}
                />
                <Maintab.Screen
                    name="Home"
                    component={HomeStackScreen}
                    options={{
                        tabBarLabel: "홈",
                        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
                    }}
                />
                <Maintab.Screen
                    name="Lecture"
                    component={LectureStackScreen}
                    options={{
                        tabBarLabel: "수업",
                        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="book-open-page-variant" color={color} size={size} />,
                    }}
                />
                <Maintab.Screen
                    name="Settings"
                    component={SettingsStackScreen}
                    options={{
                        tabBarLabel: "설정",
                        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="settings-helper" color={color} size={size} />,
                    }}
                />
            </Maintab.Navigator>
        </NavigationContainer>
    );
}
