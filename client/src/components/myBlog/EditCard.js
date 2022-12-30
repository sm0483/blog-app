import {  useNavigate } from 'react-router-dom';

const EditCard = ({data}) => {
    const {blogData,blogTitle,authorId,_id:id,imageUrl}=data;

    
    const navigate=useNavigate();
    return (
        <div className="col-sm col-md-6 col-lg-3 mt-4">
            <div className="card single-card">
                <div className="card-image-container"
                        onClick={()=>navigate(`/my-article/${id}`)}                
                >
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{blogTitle}</h5>
                    <p className="card-text text-truncate">
                        {blogData}
                        </p>
                        <button className="btn btn-primary"
                        onClick={()=>navigate(`/edit/${id}`)}
                        >Edit</button>
                </div>
            </div>
        </div>
    );
}
 
export default EditCard;