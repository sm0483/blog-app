import NavBar from "../common/NavBar";
import Main from "../common/Main";
import { getAllBlog } from "../../apis";
import { useEffect, useReducer } from "react";
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

    useEffect(()=>{
        dispatch({ type: ACTIONS.CALL_API });
        let isActive = true;
            const getData=async()=>{
                try{
                const response=await getAllBlog();
                if (response.status === 200) {
                    dispatch({ type: ACTIONS.SUCCESS, data: response.data });
                    console.log(response)
                    return;
                }
                console.log(response);
            }catch(err){
                console.log(err);
                dispatch({ type: ACTIONS.ERROR, error: err});
            }
    
            }
    
            getData();

            // eslint-disable-next-line react-hooks/exhaustive-deps

    
    
       
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
                <Main blogData={data}/>
            )
        }
      
        </>
    );
    
    
}
 
export default Home;