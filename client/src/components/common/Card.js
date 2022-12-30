import {  useNavigate } from 'react-router-dom';

const Card = ({data}) => {
    const {blogData,blogTitle,authorId,_id:id,imageUrl}=data;
    const navigate=useNavigate();
    return (
        <div className="col-sm col-md-6 col-lg-3 mt-4">
            <div className="card single-card h-100">
                <div className="card-image-container">
                    <img src={imageUrl} className="card-img-top img-fluid" alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{blogTitle}</h5>
                    <p className="card-text text-truncate">
                        {blogData}
                        </p>
                    <button className="btn btn-primary"
                    onClick={()=>navigate(`/article/${id}`)}
                    >Read More</button>
                </div>
            </div>
        </div>
    );
}
 
export default Card;