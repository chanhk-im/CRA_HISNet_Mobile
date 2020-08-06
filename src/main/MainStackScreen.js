import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { NoticeMainScreen } from "./notice/NoticeMainScreen";
import { RestaurantMainScreen } from "./restaurant/RestaurantMainScreen";
import { HomeMainScreen } from "./home/HomeMainScreen";
import { InformationScreen } from "./home/InformationScreen";
import { LectureMainScreen } from "./lecture/LectureMainScreen";
import { SettingsMainScreen } from "./settings/SettingsMainScreen";

const NoticeStack = createStackNavigator();
const RestaurantStack = createStackNavigator();
const HomeStack = createStackNavigator();
const LectureStack = createStackNavigator();
const SettingsStack = createStackNavigator();

export function NoticeStackScreen() {
    return (
        <NoticeStack.Navigator>
            <NoticeStack.Screen name="NoticeMain" component={NoticeMainScreen}/>
        </NoticeStack.Navigator>
    );
}

export function RestaurantStackScreen() {
    return (
        <RestaurantStack.Navigator>
            <RestaurantStack.Screen name="RestaurantMain" component={RestaurantMainScreen}/>
        </RestaurantStack.Navigator>
    );
}

export function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeMain" component={HomeMainScreen}/>
            <HomeStack.Screen name="Information" component={InformationScreen}/>
        </HomeStack.Navigator>
    );
}

export function LectureStackScreen() {
    return (
        <LectureStack.Navigator>
            <LectureStack.Screen name="LectureMain" component={LectureMainScreen}/>
        </LectureStack.Navigator>
    );
}

export function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="SettingsMain" component={SettingsMainScreen}/>
        </SettingsStack.Navigator>
    );
}