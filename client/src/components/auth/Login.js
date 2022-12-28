import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, setHead } from "../../apis";
import { api } from "../../apis";

const Login = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(false);

    const login=async()=>{
        try {
            if(!email || !password) {
                setError(true);
                return;
            }
            const response=await loginUser({email,password});
            console.log(response.data.accessToken);
            setHead(response.data.accessToken);
            if(response.status===200) navigate('/');
        } catch (error) {
            setError(true)
        }
    }
    return (
        <div className="register-container ">
            <div className="container register-box">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" 
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" 
                    placeholder="abc@0343"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                
                <div class="mb-3 d-flex justify-content-center align-items-center flex-column">
                    <button className="btn-primary btn w-25"
                    onClick={login}
                    >Login</button>
                    <p>New here ?<Link to='/register'> Register</Link></p>
                </div>

            </div>
        </div>
    );
}
 
export default Login;