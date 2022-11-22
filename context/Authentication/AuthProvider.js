import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";
import { auth, db } from "../../firebase-config";

import AuthService from "./AuthService";

const authContext = createContext();

export default function useAuth(){
    return useContext(authContext);
}

export function AuthProvider(props){
    const [user,setUser] =  useState(null);
    const [error,setError] = useState(null);
    const [data,setData] = useState({});
    const router  = useRouter();

    const logiIn = async ()=>{
        const {error,user} = await AuthService.logInWithEmail();
        setUser(user ?? null);
        setError(error ?? "");
    }
    const logout = async() =>{
        await AuthService.logout();
        setUser(null);
        router.push("/")

    }
    const getData = async (uid)=>{
        const {userData} = await AuthService.getUsersCollectionData(uid);
        await setData({...userData});

    }


    const initialize = async(user)=>{
        if (!user){
            setUser(null);
            setData({});
            setError("No user signed in!");
            return
        }
        const uid = user.uid;
        await setUser(user);
        await getData(uid);
        //why does this not print anything?
    }   
    const value ={user,error,data,logiIn,logout,setUser,getData,initialize};

    return <authContext.Provider value={value} {...props} />;
}