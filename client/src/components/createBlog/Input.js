import { useReducer, useState } from 'react';
import { createBlog } from '../../apis';
import { reducer ,ACTIONS, MESSAGE} from '../../helper/Helper';
import Loading from '../common/Loading';
import Save from '../common/Saved';


const initState={
    data:{},
    error:null,
    loading:false
}



const Input = () => {
    const [title,setTitle]=useState("");
    const [blogData,setBlogData]=useState("");
    const [image,setImage]=useState("");

    const [status,setStatus]=useState(false);

    const [state,dispatch]=useReducer(reducer,initState);
    const {data,loading,error}=state;
    const [errorButton,setErrorButton]=useState(false);



    const saveData=async()=>{
        try {
            if(!image || !title || !blogData) {
                dispatch({ type: ACTIONS.ERROR, error:MESSAGE.error.fieldEmpty});
                setErrorButton(true);

                return;
            }
            dispatch({ type: ACTIONS.CALL_API });
            const data={
                "blogTitle":title,
                blogData,
                "authorId":"5cabe64dcf0d4447fa60f5e1",
                "authorName":"mr rave",
                image
                }

            console.log(data)


            const response=await createBlog(data);
            if(response.status === 200){
                setStatus(true);
                setTitle("");
                setBlogData("");
                setImage("");
                console.log(response.data);
                dispatch({ type: ACTIONS.SUCCESS, data: response.data });

                
            } 
            console.log(response)
        } catch (error) {
            console.log(error);
            dispatch({ type: ACTIONS.ERROR, error});
            setErrorButton(true);

        }
    }


    return (
        <>
            { status ? (
            <div className="container pt-5 save-message-container d-flex justify-content-center"
                onMouseDown={()=>setStatus(false)}
            >
                <Save message={MESSAGE.success.savedData} flag={ACTIONS.SUCCESS}/>
            </div>):

            
                errorButton ? (
                    <div className="container pt-5 save-message-container 
                    d-flex justify-content-center"
                    onMouseDown={()=>setErrorButton(false)}
                    >
                    <Save message={error} flag={ACTIONS.ERROR}/>
                    </div>
                ):
            


            
                loading ?(<Loading/>) :(

                    <div className="container pt-5">

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label h4">Title</label>
                    <input type="text" className="form-control title-input"
                    id="exampleFormControlInput1" placeholder="bing bang theory" value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>


                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label h4">Upload image</label>
                    <input type="file" className="form-control title-input"
                    id="exampleFormControlInput1" placeholder="bing bang theory"
                    onChange={(e)=>setImage(e.target.files[0])}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label h4">Article</label>
                    <textarea type="text" className="form-control article-text-area"
                    id="exampleFormControlInput1" placeholder="It is theory written ..."
                    value={blogData}
                    onChange={(e)=>setBlogData(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary"
                    onClick={saveData}
                    >Save</button>
                </div>
            </div>


                )
            }

            
            
    </>


    );
}
 
export default Input;