import {  createContext, useContext, useState } from "react";
export const Authcontext=createContext(null);
export const Contextprovider=({children})=>{
    let [user,setUser]=useState(null);
    const login =(user)=>{
        setUser(user);
    }
    const logout=()=>{
        setUser(null);
    }
    return(
        <Authcontext value={{user,login,logout}}>{children}</Authcontext>
    )
};
export const useAuth=()=>{
    return useContext(Authcontext);
}