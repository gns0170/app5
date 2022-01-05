import React from "react";
import Styled from "styled-components/native";

const Container = Styled.View`
    background-color:#CCFFCC;
`;
const Text = Styled.Text`
    font-size: 30px;
`;
const Home = () => {
    return(
        <Container>
            <Text>Hi</Text>
            <Text>Hi</Text>
            <Text>Hi</Text>
            <Text>Hi</Text>
            <Text>Hi</Text>
        </Container>
    );
}

export default Home;