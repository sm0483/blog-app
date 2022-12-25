import test from '../../assets/icon.jpg'
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <div className="col-sm col-md-6 col-lg-3 mt-4">
            <div className="card single-card">
                <img src={test} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text text-truncate">
                        Some quick example text to build on the card title an
                        d make up the bulk of the card's content.
                        </p>
                    <Link to="/article" className="btn btn-primary">Read More</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Card;