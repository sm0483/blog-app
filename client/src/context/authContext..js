import React, { Children, useContext, useEffect, useReducer, useState } from "react";
import { getUser } from "../apis";
import { ACTIONS } from "../helper/Helper";
import { reducer } from "../helper/Helper";
import { logoutUser } from "../apis";
import { setHead } from "../apis";


const AuthContext=React.createContext();


const initUser={
    data:{},
    loading:false,
    error:null
}

const AuthProvider=({children})=>{
    const [authState,authDispatch]=useReducer(reducer,initUser);
    const [authenticated,setAuthenticated]=useState(false);
    const [toggle,setToggle]=useState(false);


    const handleLogout=async()=>{
        await logoutUser();
        setHead("");
        setAuthenticated(false);
    }

    useEffect(()=>{
        authDispatch({ type: ACTIONS.CALL_API });
        let isActive=true;
        const getData=async()=>{
            try {
                const response=await getUser();
                authDispatch({ type: ACTIONS.SUCCESS, data: response.data });
                if(response.status===200) setAuthenticated(true);
                else setAuthenticated(false);
            } catch (error) {
                authDispatch({ type: ACTIONS.ERROR, error: error.message});
                setAuthenticated(false);
            }
        }

        getData();
        return()=>{
            isActive=false;
        }

    },[toggle])


    return(
        <AuthContext.Provider
        value={{
            authState,
            authDispatch,
            authenticated,
            handleLogout,
            setAuthenticated,
            setToggle
        }}
        >
            {children}
        </AuthContext.Provider>
    )

}


const useAuth=()=>{
    return useContext(AuthContext);
}


export {AuthContext,AuthProvider,useAuth};