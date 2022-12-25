import { useState } from 'react';
import { createBlog } from '../../apis';
import Save from '../common/Saved';

const Input = () => {
    const [title,setTitle]=useState("");
    const [blogData,setBlogData]=useState("");
    const [image,setImage]=useState("");

    const [status,setStatus]=useState(false);

    const saveData=async()=>{
        try {
            const data={
                blogTitle:title,
                blogData,
                authorId:"5cabe64dcf0d4447fa60f5e2"
            }
            const response=await createBlog(data);
            if(response.status === 200){
                setStatus(true);
                setTitle("");
                setBlogData("");
                setImage("");
                
            } 
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            {status && 
            <div className="container pt-5 save-message-container d-flex justify-content-center"
                onMouseDown={()=>setStatus(false)}
            >
                <Save />
            </div>
            }
            <div className="container pt-5">

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label h4">Title</label>
                    <input type="text" class="form-control title-input"
                    id="exampleFormControlInput1" placeholder="bing bang theory" value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>


                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label h4">Upload image</label>
                    <input type="file" class="form-control title-input"
                    id="exampleFormControlInput1" placeholder="bing bang theory"
                    onChange={(e)=>setImage(e.target.value)}
                    />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label h4">Article</label>
                    <textarea type="text" class="form-control article-text-area"
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
    </>


    );
}
 
export default Input;