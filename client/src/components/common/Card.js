import {  useNavigate } from 'react-router-dom';

const Card = ({data}) => {
    const {blogData,blogTitle,authorId,_id:id,imageUrl}=data;
    const navigate=useNavigate();
    return (
        <div className="mt-4 col-md-6 col-lg-4 ">
            <div class="card h-100 d-flex align-items-center"
                        onClick={()=>navigate(`/article/${id}`)}
            >
            <img src={imageUrl} class="card-img-top img-fluid thumbnail" alt="image"/>
                <div class="card-body">
                    <h5 class="card-title">{blogTitle}</h5>
                    <p class="card-text">{blogData}</p>
                </div>
            </div>

        </div>
    );
}
 
export default Card;



