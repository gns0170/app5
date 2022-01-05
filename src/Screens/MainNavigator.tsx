import React from "react";
import Styled from "styled-components/native";
import {BottomTabScreenProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "~/Screens/HomeNavigator";
import AnotherNavigator from "~/Screens/AnotherNavigator";



const BottomTab = createBottomTabNavigator();

function MainNavigator(){
    return(
        <BottomTab.Navigator screenOptions={{headerShown: false}}>
            <BottomTab.Screen name = "Home"component={HomeNavigator}/>
            <BottomTab.Screen name = "Another"component={AnotherNavigator}/>
        </BottomTab.Navigator>
    );
}

export default () =>{
    return(
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
};