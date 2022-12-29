import test from '../../assets/icon.jpg'
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext.';

const NavBar = () => {
    const {handleLogout,authenticated}=useAuth();

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" 
                data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" 
                aria-controls="navbarTogglerDemo03" aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <Link className="navbar-brand" to="#">
                    <img src={test} alt="Bootstrap" width="30" height="24"/>
                    blogSpot
                </Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li>{ authenticated &&
                            <Link className="nav-link active"
                             aria-current="page" to="/create">Write blog</Link>
                            }
                        </li>

                        <li>
                            {authenticated && 
                            <Link className="nav-link active" aria-current="page" 
                            to="/my-blog">Your Article</Link>
                            }
                        </li>
                    </ul>
                </div>
                {
                 !authenticated && 
                <Link type="button" 
                className="btn btn-primary login-button" to='/login'>Login</Link>
                }

                {
                 authenticated && 
                    <button type="button" 
                    className="btn btn-primary login-button"
                    onClick={handleLogout}
                >Logout</button>
                }
            </div>
        </nav>
    );
}
 
export default NavBar;