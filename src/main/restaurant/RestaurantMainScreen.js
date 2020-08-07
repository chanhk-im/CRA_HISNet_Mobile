import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { GraceTableScreen } from "./GraceTableScreen";
import { StudentRScreen } from "./StudentRScreen";
import { MomsKitchenScreen } from "./MomsKitchenScreen";
import { HandongLoungeScreen } from "./HandongLoungeScreen";

const Tab = createMaterialTopTabNavigator();

export function RestaurantMainScreen() {
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name ="Student Restaurant" 
                component={StudentRScreen} 
                options={{tabBarLabel: "학생식당"}} 
            />
            <Tab.Screen 
                name ="MomsKtichen" 
                component={MomsKitchenScreen} 
                options={{tabBarLabel: "맘스키친"}} 
            />
            <Tab.Screen 
                name ="HandongLounge" 
                component={HandongLoungeScreen} 
                options={{tabBarLabel: "한동라운지"}} 
            />
            <Tab.Screen 
                name ="GraceTable" 
                component={GraceTableScreen}
                options={{tabBarLabel: "더 그레이스 테이블"}} 
            />
        </Tab.Navigator>
    );
}