import {  useNavigate } from 'react-router-dom';
import edit from '../../assets/edit.svg'
const EditCard = ({data}) => {
    const {blogData,blogTitle,authorId,_id:id,imageUrl}=data;

    
    const navigate=useNavigate();
    return (
        <div className="mt-4 col-md-6 col-lg-4">
        <div className="article-card"
            onClick={()=>navigate(`/my-article/${id}`)}                
        >
        <div className="card-image-container">
            <img src={imageUrl} alt="thumbnail" className='img-fluid '/>
        </div>
        <div className="card-text-container card-bg">
            <div className="card-text-sub">
                <h3 className="head-text text-center text-color">{blogTitle}</h3>
                <div className="head-content text-center">
                    {blogData}
                </div>
            </div>
            <div className='edit-button d-flex justify-content-end'
                         onClick={()=>navigate(`/edit/${id}`)}
            >
                <i><img src={edit} alt="edit-icon" /></i>
            </div>
        </div>
        </div>
    </div>
        
    );
}
 
export default EditCard;


// <div className="col-sm col-md-6 col-lg-3 mt-4">
//             <div className="card single-card">
//                 <div className="card-image-container"
//                         onClick={()=>navigate(`/my-article/${id}`)}                
//                 >
//                     <img src={imageUrl} className="card-img-top" alt="..."/>
//                 </div>
//                 <div className="card-body">
//                     <h5 className="card-title">{blogTitle}</h5>
//                     <p className="card-text text-truncate">
//                         {blogData}
//                         </p>
//                         <button className="btn btn-primary"
//                         >Edit</button>
//                 </div>
//             </div>
//         </div>