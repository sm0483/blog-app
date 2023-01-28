import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, setHead } from "../../apis";
import { useAuth } from "../../context/authContext.";
import { ACTIONS } from "../../helper/Helper";
import Save from "../common/Saved";

const Login = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(false);
    const {setAuthenticated,setToggle}=useAuth()

    const login=async()=>{
        try {
            if(!email || !password) {
                setError(true);
                return;
            }
            const response=await loginUser({email,password});
            setHead(response.data.accessToken);
            if(response.status===200) navigate('/');
            setAuthenticated(true);
            setToggle((value)=>!value)
        } catch (error) {
            setError(error.message)
        }
    }

    
    return (
        <div className="register-container ">
            <div className="container register-box">
                <h3 className="text-center">Login</h3>
                <div className="mb-3 mt-4">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" 
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput1" 
                    placeholder="abc@0343"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                
                <div className="mb-3 d-flex justify-content-center align-items-center flex-column mt-4">
                    <button className="btn-primary btn w-25"
                    onClick={login}
                    >Login</button>
                    <p className="mt-4 ">New here ?<Link to='/register'> Register</Link></p>
                </div>

            </div>
        </div>
    );
}
 
export default Login;