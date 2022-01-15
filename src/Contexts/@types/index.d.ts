interface TestContext {
    info : Info | undefined;
    changeInfo?: (end: string, end2:string)=> void;
}

interface Info {
    info1?: string;
    info2?: string;
}