import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "react-native";
import Styled from "styled-components/native";

const Container = Styled.View`
    height: 60%;
    background-color:#CCFFCC;
`;
const Text = Styled.Text`
    font-size: 30px;
`;
type Props = NativeStackScreenProps<StackNaviParamList_Another,"Main">

const Another = ({navigation}:Props) => {
    return(
        <Container>
            <Button title="detail1 "height="30"onPress={()=>navigation.navigate("Detail1")}/>
            <Text>Hi</Text>
            <Button title="detail2" onPress={()=>navigation.navigate("Detail2")}/>
        </Container>
    );
}

export default Another;