import {  useNavigate } from 'react-router-dom';
import {RiEditLine} from 'react-icons/ri'
import {MdDeleteOutline} from 'react-icons/md'
import { deleteBlog } from '../../apis';


const EditCard = ({data}) => {
    const {blogData,blogTitle,authorId,_id:id,imageUrl}=data;
    const navigate=useNavigate();

    const handleDelete=async(id)=>{
        await deleteBlog(id);
    }
    return (
        <div className="mt-4 col-md-6 col-lg-4">    
        <div class="card h-100 ">
            <img src={imageUrl} class="card-img-top thumbnail" alt="image"
                onClick={()=>navigate(`/my-article/${id}`)}                
            />
            <div className="d-flex">
                    <div class="card-body">
                        <h5 class="card-title ">{blogTitle}</h5>
                        <p class="card-text text-center">{blogData}</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between p-2'>
                <button class="edit-btn"
                        onClick={()=>navigate(`/edit/${id}`)}
                >
                    <RiEditLine size={25}/>
                </button>

                <button class="edit-btn"
                        onClick={()=>handleDelete(id)}
                >
                    <MdDeleteOutline size={25}/>
                </button>
            </div>
        </div>
    </div>
        
    );
}
 
export default EditCard;


