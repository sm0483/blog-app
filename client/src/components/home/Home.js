import NavBar from "../common/NavBar";
import Main from "../common/Main";
import { getAllBlog } from "../../apis";
import { useEffect, useReducer, useState } from "react";
import {reducer,ACTIONS} from "../../helper/Helper";
import Loading from "../common/Loading";
import Error from "../common/Error";



const initState={
    data:[],
    error:null,
    loading:true,
}


const Home = () => {
    const [state,dispatch]=useReducer(reducer,initState);
    const {data,error,loading}=state;
    const [blogData,setBlogData]=useState([]);

    useEffect(()=>{
        dispatch({ type: ACTIONS.CALL_API });
        let isActive = true;
        try{
            const getData=async()=>{
                const response=await getAllBlog();
                if (response.status === 200) {
                    dispatch({ type: ACTIONS.SUCCESS, data: response.data });
                    setBlogData(response.data);
                    return;
                }
    
                console.log(response);
    
                dispatch({ type: ACTIONS.ERROR, error: response.error });
    
            }
    
            getData();
    
    
        }catch(err){
            console.log(err);
        }
        return () => {
            isActive = false;
        };
    },[])

    return (
        <>
        <NavBar/>
        {
            loading ? (
                <Loading/>
            ):error ?
            (
                <Error/>
            ) : (
                <Main blogData={blogData}/>
            )
        }
      
        </>
    );
    
    
}
 
export default Home;