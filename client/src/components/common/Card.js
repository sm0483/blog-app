import {  useNavigate } from 'react-router-dom';

const Card = ({data}) => {
    const {blogData,blogTitle,authorId,_id:id,imageUrl}=data;
    const navigate=useNavigate();
    return (
        <div className="mt-4 col-md-6 col-lg-4">
            <div className="article-card"
                onClick={()=>navigate(`/article/${id}`)}
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
            </div>
            </div>
        </div>
    );
}
 
export default Card;

