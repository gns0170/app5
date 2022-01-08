import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import Styled from "styled-components/native";
import Home from "~/Screens/Home/Home";
import HomeDetail1 from "~/Screens/Home/HomeDetail1";
import HomeDetail2 from "~/Screens/Home/HomeDetail2";




//Stack
const Stack = createNativeStackNavigator();

type Props = NativeStackScreenProps<NavigationParamList,"Home">;
function HomeNavigator({navigation}:Props){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Home}
            options={{title:"Home"}}/>
            <Stack.Screen name="Detail1" component={HomeDetail1}/>
            <Stack.Screen name="Detail2" component={HomeDetail2}/>
        </Stack.Navigator>
    );
}

export default HomeNavigator;
