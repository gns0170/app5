import React, { SetStateAction, useEffect, useState } from "react";
import { Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Styled from "styled-components/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NullableTypeAnnotation } from "@babel/types";

const OuterContainer = Styled.View`
    margin-vertical:15px;
    height: 400px;
    border: solid;
    margin-horizontal: 10px;
`;
const Container = Styled.View`
    display:flex;    
    padding-top:10px;
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

const Button = Styled.Button``;

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

const TestBlank = ()=> {

    const [data,setData] = useState<item[]>([]);
    const [loading, setLoading] = useState(false);

    const [test, setTest] = useState<any>([]);
    const getData = async() => {

        setData([]);
        setLoading(true);
        for (let i=1; i< 3;i++)
        await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
            .then(response => response.json())
            .then(res => setData((oldArray) =>[...oldArray,res]))
        .catch((error)=>{
            setLoading(false);
            Alert.alert("Error");
        })


    };

    //AsyncStorage

    const getAsyncData =async () => {
        try{
            return await AsyncStorage.getItem('1').then((res)=>{ setTest(res); console.log(res); return res;})
        } catch (e){
        }
    }
    const setAsyncData = async(value: string) => {
        try {
            //const jsonValue = JSON.stringify(value)
            //await AsyncStorage.setItem('@storage_Key',jsonValue)
            await AsyncStorage.setItem('1',value,()=>{
                console.log("done",value);
            })
        }catch(e){}
    }    
    useEffect(()=> {
        getData();
    },[]);
    useEffect(()=>{
        getAsyncData();
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
            <Button title={"Test"} onPress={()=> {setAsyncData("456"); getAsyncData()}}/>
            <Button title={"getData"} onPress={()=> {getAsyncData()}}/>
            <Text>{test}</Text>
        </OuterContainer>
    );
}

export default TestBlank;