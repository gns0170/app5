import React from "react";
import Styled from "styled-components/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import Another from "~/Screens/Another";
import AnotherDetail1 from "~/Screens/Another/AnotherDetail1";
import AnotherDetail2 from "~/Screens/Another/AnotherDetail2";


//Stack
const Stack = createNativeStackNavigator();

type Props = NativeStackScreenProps<NavigationParamList,"Another">;
function AnotherNavigator({navigation}:Props){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Another}
            options={{title:"Another"}}/>
            <Stack.Screen name="Detail1" component={AnotherDetail1}/>
            <Stack.Screen name="Detail2" component={AnotherDetail2}/>
        </Stack.Navigator>
    );
}

export default AnotherNavigator;