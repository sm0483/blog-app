import { useEffect, useReducer,  } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../../apis';
import { reducer,ACTIONS} from '../../helper/Helper';
import Credit from '../common/Creadit';
import Head from '../common/Head';
import Loading from '../common/Loading';
import Error from '../common/Error';



const initState={
    data:{},
    error:null,
    loading:false
}


const Content = () => {
    const {id}=useParams();

    const [state,dispatch]=useReducer(reducer,initState);
    const {data,error,loading}=state;
    const {authorName,blogData,blogTitle,authorId,imageUrl}=data;





    useEffect(()=>{
        dispatch({ type: ACTIONS.CALL_API });
        let isActive=true;
        const getBlog=async()=>{
            try {
                const response=await getBlogById(id);
                dispatch({ type: ACTIONS.SUCCESS, data: response.data });
                console.log(response.data);
            } catch (error) {
                dispatch({ type: ACTIONS.ERROR, error});
                console.log(error);
            }
         
        }

        getBlog();



        return ()=>{
            isActive=false;
        }

    },[])


    return (
            <div className="container p-2 article-content mt-5">
                {
                    loading ? (<Loading/>):
                    error ? (<Error/>) :
                    (
                    <div className="row">
                    <div className="col-lg-6 col-sm-1 article-image-container">
                        <img src={imageUrl} className='img-fluid w-100' alt="article" />
                    </div>
                    <div className="col-lg-6 col-sm-1">
                    <Head title={blogTitle}/>
                    <Credit credit={authorName}/>
                    <p className='p-4'>
                        {blogData}
                    </p>
                    </div>
                </div>)
                }
                
            </div>
        );

}
 
export default Content;