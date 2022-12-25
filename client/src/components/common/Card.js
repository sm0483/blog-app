import test from '../../assets/icon.jpg'
import { Link } from 'react-router-dom';

const Card = ({data}) => {
    const {blogData="cat",blogTitle="fish",authorId="0483"}=data;
    return (
        <div className="col-sm col-md-6 col-lg-3 mt-4">
            <div className="card single-card">
                <img src={test} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{blogTitle}</h5>
                    <p className="card-text text-truncate">
                        {blogData}
                        </p>
                    <Link to="/article" className="btn btn-primary">Read More</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Card;