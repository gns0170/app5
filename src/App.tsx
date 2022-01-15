import React,{useEffect} from "react";
import Styled from "styled-components/native";
import MainNavigator from "./Screens/MainNavigator";
import SplashScreen from "react-native-splash-screen";

const Container = Styled.View``;

const App = () => {
  useEffect(()=>{
    SplashScreen.hide();
  },[]);

  return(
      <MainNavigator />
  );
}

export default App;
