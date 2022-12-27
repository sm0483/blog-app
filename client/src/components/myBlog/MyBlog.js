import NavBar from "../common/NavBar";
import { getBlogByAuthorId } from "../../apis";
import { reducer,ACTIONS } from "../../helper/Helper";
import { useReducer,useEffect } from "react";
import Loading from "../common/Loading";
import Error from "../common/Error";
import Blogs from "./Blogs";





const initState={
    data:[],
    error:null,
    loading:false
}


const MyBlog = () => {

    const [state,dispatch]=useReducer(reducer,initState);
    const {data,error,loading}=state;
    // const {userId}=

    useEffect(()=>{
        const userId="5cabe64dcf0d4447fa60f5e1"
        dispatch({ type: ACTIONS.CALL_API });
        let isActive = true;
            const getData=async()=>{
                try{
                const response=await getBlogByAuthorId({userId});
                if (response.status === 200) {
                    dispatch({ type: ACTIONS.SUCCESS, data: response.data });
                    console.log(response.data)
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
                <Blogs blogData={data}/>
            )
        }
      
        </>
    );
}
 
export default MyBlog;