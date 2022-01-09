import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Button } from "react-native";
import Styled from "styled-components/native";

const Container = Styled.View`
    background-color:#CCFFCC;
`;
const Text = Styled.Text`
    font-size: 15px;
`;
const HomeDetail1 = () => {

    const [test,setTest] = useState<any>()



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


    getAsyncData();

    return(
        <Container>
            <Text>{test}</Text>
            <Button title={"Test: 123"} onPress={()=>{setAsyncData("123"); getAsyncData()}} />
        </Container>
    );
}

export default HomeDetail1;