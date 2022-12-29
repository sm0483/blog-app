import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext.";
const RequireAuth = ({children}) => {
    const {authenticated}=useAuth();
    console.log(authenticated);
    if(!authenticated) return <Navigate to='/login'/>
    return children;

}
 
export default RequireAuth;