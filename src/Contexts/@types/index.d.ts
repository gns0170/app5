interface TestDataSet {
    info1 :string;
    info2 : string;
    objectInfo : (subinfo1:string, subinfo2:string) => void;
    objectInfo2 : () => void;
}