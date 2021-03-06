import { createContext,useEffect,useState} from "react";

export const AppContext=createContext();

export const AppContextProvider=(props)=>{
    const {children}=props
    const [appName]=useState("Public Health Dashboard")

    return(
        <AppContext.Provider value={{appName}}>
            {children}
        </AppContext.Provider>
    )
}