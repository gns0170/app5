import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "react-native";
import Styled from "styled-components/native";
import TestBlank from "./TestBlank";

const Container = Styled.View`
    background-color:#CCFFCC;
`;
const Text = Styled.Text`
    font-size: 30px;
`;
const Btn = Styled.TouchableOpacity`
    font-size:45px;

`;



type Props = NativeStackScreenProps<StackNaviParamList_Home,"Main">;


const Home = ({navigation}:Props) => {
    return(
        <Container>
            <Button title="detail1" onPress={()=>navigation.navigate("Detail1")}/>
            <Text>Hi</Text>
            <Button title="detail2" onPress={()=>navigation.navigate("Detail2")}/>
            <Text>Hi</Text>
            <Text>Hi</Text>
            <Text>Hi</Text>
            <Text>Hi</Text>
            <TestBlank/>
        </Container>
    );
}

export default Home;