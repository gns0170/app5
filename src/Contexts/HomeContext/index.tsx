import React, { createContext } from "react";
import Styled from "styled-components/native";
import AsyncStorage from '@react-native-async-storage/async-storage';


interface Props {
    children : JSX.Element | Array<JSX.Element>;
    value: JSON,
}
export const getTestData = async(value:JSON) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@storage_Key',jsonValue)
        }catch(e){

        }
    }
export const getData =async () => {
        try{
            const jsonValue = await AsyncStorage.getItem('@storage_Key')
            return jsonValue != null ? JSON.parse(jsonValue) : null; 
        } catch (e){

        }
    }
export const ContextSet = ({children,value}:Props) => {
    getTestData(value);
    getData()



}