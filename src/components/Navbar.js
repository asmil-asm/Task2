import '../App.css'
import {Link} from 'react-router-dom'
import { useAuth } from '../Context/Auth'

export default function Navbar({name}){
  let auth=useAuth();
    return(
        <>
        <div className="Navbar"> 
<ul>
  <li>Home</li>
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