import Navbar from "./Navbar"
import Homebutton from "./Homebutton"
import { Link } from "react-router-dom"


export default function User(){
  
    return(
        <>
        <Navbar name={'Logout'}/>
        <div className="user">
<h1>Asmail Shaheen</h1>
<h2>Frontend developer </h2>
<p>Web developer passionate about user experience and interactive design. 
I have been working in this field for 5 years.</p>
<h3>Information</h3>
<div className="info">
    <div>
        <span>150</span>
        <span>Projects</span>
    </div>
    <div>
        <span>2.4K</span>
        <span>Followers</span>
    </div>
    <div>
        <span>350</span>
        <span>Likes</span>
    </div>


</div>
<h3>Skills</h3>
<div className="skills">
    <ul>
     <li>Html</li>
<li>Css</li>
        <li>Javascript</li>
        <li>Bootstrap</li>
        <li>React</li>


    </ul>
</div>
<div className="btns">
    <button>
        Following
    </button>
    <button>
       Message
    </button>

</div>



        </div>
<Homebutton/>
        </>
    )
}