"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type DataType = {
    name: string
}

interface ContextProps {
    isAuthModal: boolean,
    setIsAuthModal: Dispatch<SetStateAction<boolean>>,
    // data: DataType[],
    // setData: Dispatch<SetStateAction<DataType[]>>
};

const GlobalContext = createContext<ContextProps>({
    isAuthModal: false,
    setIsAuthModal: (): boolean => false,
})


export const GlobalContextProvider = ({ children }: any) => {
    const [ isAuthModal, setIsAuthModal ] = useState(false);

    return(
        <GlobalContext.Provider value={{ isAuthModal, setIsAuthModal }}>
            { children }
        </GlobalContext.Provider>
    )
}


export const useGlobalContext = () => useContext(GlobalContext);
