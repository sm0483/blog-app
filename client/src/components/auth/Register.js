import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../apis";

const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(false);
    const navigate=useNavigate();

    const saveUser=async()=>{
        try {
            if(!name || !email || !password){
                setError(true);
                return;
            }
            const response=await registerUser({name,email,password});
            if(response.status===200) navigate("/login");
        } catch (error) {
            setError(true);
            console.log(error.message);
        }
    }

    return (
        <div className="register-container ">
            <div className="container register-box">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" 
                    placeholder="June"
                     value={name}
                     onChange={(e)=>setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" 
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput1" 
                    placeholder="abc@0343"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                
                <div className="mb-3 d-flex justify-content-center align-items-center flex-column">
                    <button className="btn-primary btn w-25"
                    onClick={saveUser}
                    >Register</button>
                    <p>Already have an account? <Link to={'/login'}> Login</Link></p>
                </div>

            </div>
        </div>
    );
}
 
export default Register;