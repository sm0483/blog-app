import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext.";


const RequireAuth = ({children}) => {
    const authenticated=localStorage.getItem("accessToken");
    if(!authenticated) return <Navigate to='/login' replace={true}/>
    return children;

}
 
export default RequireAuth;