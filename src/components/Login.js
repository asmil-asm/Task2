import { useState } from "react"
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../Context/Auth";

export default function Login(){
let [user,setUser]=useState(null);
    let auth=useAuth();
    let navigate=useNavigate();
    const handleUser=()=>{
   auth.login(user);
         navigate('/user',{replace:true});
   
       
    }
   const handleAdmin=()=>{
     auth.login(user);
         navigate('/admin',{replace:true});
   }
  
    return(
        <>
        
        <div className="box">
            <h2>Login</h2>
            <form>
                <label>username or email</label>
            <input value={user} type="text" required onChange={(event)=>{
setUser(event.target.value);
            }}/>
      
            <button onClick={handleUser} className="submit">Login As User</button>
            <button onClick={handleAdmin}  className="submit">Login As Admin</button>
            </form>
            <div className="btns">
                <Link className="link" to="/sign-in">
         <button>Sign In</button>

                </Link>


            </div>


        </div>
    
        
        </>
    )
}