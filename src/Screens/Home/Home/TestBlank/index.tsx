import { identifier } from "@babel/types";
import React, { SetStateAction, useEffect, useState } from "react";
import { Alert, PushNotificationIOS } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Styled from "styled-components/native";


const OuterContainer = Styled.View`
    height: 52%;
    border: solid;
    margin-horizontal: 10px;
`;
const Container = Styled.View`
    display:flex;    
    padding-top:10px;
    height: 100px;
    width: 100%;
    padding-left: 6px;
    border: 0.5px solid;
    background-color: #EFEF11;
`;
const Text =Styled.Text`
    font-size: 12px;
    font-weight: bold;
`;
const TextBody = Styled.Text`
    font-size: 8px;
`;



type item = {
        id : string,
        userId : string,
        title: string,
        body: string,
    };
interface Props{item : item,}
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
                {item.body}
            </TextBody>
        </Container>
        //</Outer>
    );
}

const AsyncStorage = ()=> {

};

const TestBlank = ()=> {

    const [data,setData] = useState<item[]>([]);
    const [loading, setLoading] = useState(false);

    const getData = async() => {

        setData([]);
        setLoading(true);
        for (let i=1; i< 11;i++)
        await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
            .then(response => response.json())
            .then(res => setData((oldArray) =>[...oldArray,res]))
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
                data={data}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                numColumns={1}
                onEndReached={onEndReached}
            />
        </OuterContainer>
    );
}

export default TestBlank;