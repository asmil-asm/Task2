import { useState } from "react"
export default function Register (){
      let [password,setPassword]=useState('');
      let [confirm,setConfirm]=useState('');
      let [create,setCreate]=useState('');
function checked(){
    if(password!=confirm)
    {
    alert('confirm the password')
    setCreate(false);

    }
    else{
        setCreate(true)
    }
}
    return(
        <>
        <div className="box">
            <h2>Sign In</h2>
            <form>
                <label>Name</label>
                <input type="text" required/>
                <label>Email</label>
                <input type="email" required/>
                <label>Password</label>
        <input value={password}  type='password' required onChange={(event)=>{
         setPassword( event.target.value);
        }} />
           
            <label>Confirm</label>
    <input value={confirm}  type='password' required onChange={(event)=>{
         setConfirm( event.target.value);
        }}/>
    <button onClick={checked}className="submit">Create</button>
            </form>
        </div>
        </>
    )
}