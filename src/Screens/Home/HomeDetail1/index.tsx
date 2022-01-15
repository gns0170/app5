import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import Styled from "styled-components/native";
import { StorageTest } from "~/Contexts/AsyncStorage";

const Container = Styled.View`
    background-color:#CCFFCC;
`;
const Text = Styled.Text`
    font-size: 15px;
`;
const HomeDetail1 = () => {

    const [test,setTest] = useState<any>()

    useEffect(()=>{

    },[])
    return(
        <Container>
            <Text>{}</Text>
            <Button title={"Test: 123"} onPress={()=>{}} />
        </Container>
    );
}

export default HomeDetail1;