import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { NoticeMainScreen } from "./notice/NoticeMainScreen";
    import { NormalScreen } from "./notice/NormalScreen";
    import { SchoolScreen } from "./notice/SchoolScreen";
    import { ScholarshipScreen } from "./notice/ScholarshipScreen";
    import { DormitoryScreen } from "./notice/DormitoryScreen";
    import { GraduateScreen } from "./notice/GraduateScreen";
    import { EmploymentScreen } from "./notice/EmploymentScreen";

import { RestaurantMainScreen } from "./restaurant/RestaurantMainScreen";
    import { StudentRScreen } from "./restaurant/StudentRScreen";
    import { MomsKitchenScreen } from "./restaurant/MomsKitchenScreen";
    import { HandongLoungeScreen } from "./restaurant/HandongLoungeScreen";
    import { GraceTableScreen } from "./restaurant/GraceTableScreen";

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
            <NoticeStack.Screen 
                name="NoticeMain" 
                component={NoticeMainScreen}
            />
             <NoticeStack.Screen 
                name="Normal" 
                component={NormalScreen}
            />
            <NoticeStack.Screen 
                name="School" 
                component={SchoolScreen}
            />
            <NoticeStack.Screen 
                name="Scholarship" 
                component={ScholarshipScreen}
            />
            <NoticeStack.Screen 
                name="Dormitory" 
                component={DormitoryScreen}
            />
            <NoticeStack.Screen 
                name="Graduate" 
                component={GraduateScreen}
            />
            <NoticeStack.Screen 
                name="Employment" 
                component={EmploymentScreen}
            />
        </NoticeStack.Navigator>
    );
}

export function RestaurantStackScreen() {
    return (
        <RestaurantStack.Navigator>
            <RestaurantStack.Screen 
                name="RestaurantMain" 
                component={RestaurantMainScreen}
            />
            <RestaurantStack.Screen
                name="StudentRestaurant"
                component={StudentRScreen}
            />
            <RestaurantStack.Screen
                name="MomsKitchen"
                component={MomsKitchenScreen}
            />
            <RestaurantStack.Screen
                name="HandongLounge"
                component={HandongLoungeScreen}
            />
            <RestaurantStack.Screen
                name="GraceTable"
                component={GraceTableScreen}
            />
        </RestaurantStack.Navigator>
    );
}

export function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name="HomeMain" 
                component={HomeMainScreen}
                options={{headerShown: false}}
            />
            <HomeStack.Screen 
                name="Information" 
                component={InformationScreen}
            />
        </HomeStack.Navigator>
    );
}

export function LectureStackScreen() {
    return (
        <LectureStack.Navigator>
            <LectureStack.Screen 
                name="LectureMain" 
                component={LectureMainScreen}
            />
        </LectureStack.Navigator>
    );
}

export function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen 
            name="SettingsMain" 
            component={SettingsMainScreen}
            />
        </SettingsStack.Navigator>
    );
}