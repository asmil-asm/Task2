import '../App.css'
import {Link,useNavigate} from 'react-router-dom'
import { useAuth } from '../Context/Auth'


export default function Navbar({name}){
    let auth=useAuth();
    let navigate=useNavigate();

    return(
        <>
        <div className="Navbar"> 
<ul>
  <Link className='link' to='/'>
    <li>Home</li>

  </Link>
   <li>About</li>
   <li>Sitting</li>
  
</ul>
<div className='login'>
 {!auth.user &&(<Link className='link' to="/login">
  <p>{name}</p>
</Link>)}
</div>
</div>


        </>
    )
}