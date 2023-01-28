import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../apis";
import { ACTIONS } from "../../helper/Helper";
import Save from "../common/Saved";

const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const navigate=useNavigate();

    const saveUser=async()=>{
        try {
            if(!name || !email || !password){
                setError("Field can't be empty");
                return;
            }
            const response=await registerUser({name,email,password});
            if(response.status===200) navigate("/login");
            if(!response) setError("Email already present");
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="register-container ">
            {   error && (
                <div className="position-absolute top-0 pt-5
                  start-0 w-100 d-flex justify-content-center"
                              onMouseDown={()=>setError("")}
                     >
                    <Save message={error} flag={ACTIONS.ERROR}/>
                </div>
                )
            }
            <div className="container register-box">
                <h3 className="text-center">Register</h3>  
                <div className="mb-3 mt-4">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" 
                    placeholder="June"
                     value={name}
                     onChange={(e)=>setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
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
                    onClick={saveUser}
                    >Register</button>
                    <p className="mt-4">Already have an account? <Link to={'/login'}> Login</Link></p>
                </div>

            </div>
        </div>
    );
}
 
export default Register;