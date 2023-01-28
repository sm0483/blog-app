import test from '../../assets/test.png'
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext.';
import { logoutUser } from "../../apis/index";
import { setHead } from '../../apis/index';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const {setAuthenticated,authenticated}=useAuth();
    const navigate=useNavigate();



    const handleLogout=async()=>{
        await logoutUser();
        setAuthenticated(false);
        setHead("");
        navigate("/");

    }

    return (
        <>
        <nav className="navbar navbar-expand-lg  navbar-bg-color px-0 py-3 navbar-shadow">
  <div className="container-xl">
  <Link className="navbar-brand" to="/">
    MadScientist
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">

      <div className="navbar-nav">
        <Link className="nav-item nav-link active navbar-home-color" to="/" aria-current="page">Home</Link>
        { authenticated && 
            <Link className="nav-item nav-link text-color " to="/create">Write blog</Link>
        }
        {
            authenticated && 
            <Link className="nav-item nav-link text-color" to="/my-blog">My blog</Link>

        }
      </div>

    
      <div className="navbar-nav ms-auto">
       

        {!authenticated &&
            <Link className="nav-item nav-link text-color" to='/login'>Sign in</Link>
        }
      </div>

      
      <div className="d-flex align-items-lg-center mt-3 mt-lg-0 ">

        { !authenticated &&
        <Link to="/register" className="btn btn-sm btn-primary w-full w-lg-auto">
          Register
        </Link>
        }


            {authenticated &&
            <button to="/register" className="btn btn-sm btn-primary w-full w-lg-auto"
            onClick={handleLogout}
            >
          Logout
        </button>
        }
      </div>
    </div>
  </div>
</nav>
</>
    );
}
 
export default NavBar;


