import React, { createContext } from "react";
import Styled from "styled-components/native";

const defaultContext: TestDataSet = {
    info1 :"basic",
    info2 : "basic",
    objectInfo : (subinfo1:string, subinfo2:string) => {},
    objectInfo2 : () => {},
}

const HomeContext = createContext(defaultContext);

interface Props {
    children : JSX.Element | Array<JSX.Element>;
}

export default({children}:Props) => {
    

}