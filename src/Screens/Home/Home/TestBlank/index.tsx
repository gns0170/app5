import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Styled from "styled-components/native";

const OuterContainer = Styled.View`
    border: solid;
    margin-horizontal: 10px;
`;
const Container = Styled.View`
    display:flex;    
    padding-top:10px;
    height: 100px;
    margin-right:10px;
    background-color: #EFEF11;
`;
const Text =Styled.Text`
    font-size: 12px;
    font-weight: bold;
`;
const TextBody = Styled.Text`
    font-size: 8px;
`;


interface Props{
    item: {
        id : string,
        userId : string,
        title: string,
        body: string,
    };
}
const renderItem = ({item}:Props) => {
    return(
        //<Outer>
        <Container>
            <Text>
                {item.userId} : {item.id}
            </Text>
            <Text>
                {item.title}
            </Text>
            <TextBody>
                {item.title}
            </TextBody>
        </Container>
        //</Outer>
    );
}

const TestBlank = ()=> {

    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = () => {
        setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(res => setData(res))
    
    .catch((error)=>{
        setLoading(false);
        Alert.alert("Error");
    })
    };

    useEffect(()=> {
        getData();
    },[]);

    const onEndReached = () => {
        if (loading) {
          return;
        } else {
          getData();
        }
      };

    return(
        <OuterContainer>
            <FlatList
                horizontal={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                onEndReached={onEndReached}
            />
        </OuterContainer>
    );
}

export default TestBlank;