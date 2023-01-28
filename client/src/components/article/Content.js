import { useEffect, useReducer,  } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../../apis';
import { reducer,ACTIONS} from '../../helper/Helper';
import Credit from '../common/Creadit';
import Head from '../common/Head';
import Loading from '../common/Loading';
import Save from '../common/Saved';



const initState={
    data:{},
    error:null,
    loading:false
}


const Content = () => {
    const {id}=useParams();

    const [state,dispatch]=useReducer(reducer,initState);
    const {data,error,loading}=state;
    const {authorName,blogData,blogTitle,imageUrl}=data;





    useEffect(()=>{
        dispatch({ type: ACTIONS.CALL_API });
        let isActive=true;
        const getBlog=async()=>{
            try {
                const response=await getBlogById(id);
                dispatch({ type: ACTIONS.SUCCESS, data: response.data });
                console.log(response.data);
            } catch (error) {
                dispatch({ type: ACTIONS.ERROR, error:error.message});
                console.log(error);
            }
         
        }

        getBlog();

        return ()=>{
            isActive=false;
        }

    },[])


    return (
            <div className="container p-2 article-content mt-4">
                <div className="article-sub-container">
                     <Head title={blogTitle}/>
                    <div className="article-image-container text-center mt-4">
                        <img src={imageUrl} alt="article" className='img-fluid' />
                    </div>
                    <div className="article-text-container mt-4">
                        {blogData}
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        <Credit credit={authorName}/>
                    </div>

                </div>
            </div>
        );

}
 
export default Content;



// {
//     loading ? (<Loading/>):
//     error ? (
//         <div className="d-flex justify-content-center">
//     <Save message={error} flag={ACTIONS.ERROR}/>
//     </div>
    
//     ) :
//     (
//     <div className="row">
//     <div className="col-lg-6 col-sm-1 article-image-container">
//         <img src={imageUrl} className='img-fluid w-100' alt="article" />
//     </div>
//     <div className="col-lg-6 col-sm-1">
//     <Head title={blogTitle}/>
//     <Credit credit={authorName}/>
//     <p className='p-4'>
//         {blogData}
//     </p>
//     </div>
// </div>)
// }
