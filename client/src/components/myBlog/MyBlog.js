import NavBar from "../common/NavBar";
import { getBlogByAuthorId } from "../../apis";
import { reducer,ACTIONS } from "../../helper/Helper";
import { useReducer,useEffect } from "react";
import Loading from "../common/Loading";
import Blogs from "./Blogs";
import Save from "../common/Saved";
import { useAuth } from "../../context/authContext.";





const initState={
    data:[],
    error:null,
    loading:false
}


const MyBlog = () => {

    const [state,dispatch]=useReducer(reducer,initState);
    const {data,error,loading}=state;
    const {authState,setAuthenticated,setToggle}=useAuth();

    useEffect(()=>{
        dispatch({ type: ACTIONS.CALL_API });
        let isActive = true;
            const getData=async()=>{
                try{
                    const userId=authState.data._id;
                    const response=await getBlogByAuthorId({userId});
                    if (response.status === 200) {
                        dispatch({ type: ACTIONS.SUCCESS, data: response.data });
                        console.log(response.data)
                        return;
                    }
                    console.log(response);
                    dispatch({ type: ACTIONS.ERROR, error: response.error});
            }catch(err){
                console.log(err);
                dispatch({ type: ACTIONS.ERROR, error: err.message});
            }
    
            }
    
            authState && getData();

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
                <div className="container pt-5 save-message-container d-flex justify-content-center">
                <Save message={error} flag={ACTIONS.ERROR}/>
                </div>
            ) : (
                <Blogs blogData={data}/>
            )
        }
      
        </>
    );
}
 
export default MyBlog;