import Navbar from "./Navbar"
import Homebutton from "./Homebutton"
export default function Admin(){
  
    return(
        <>
        <Navbar name={'Logout'}/>
        <div className="admin">
            <h1> Admin:Mohammed Shaheen</h1>
            <h2>Dashboard</h2>
            <div className="data">
                <div className="info">
                    <h3>Total Visitors</h3>
                    <p>12,426</p>
                </div>
                <div className="info">
                    <h3>Users</h3>
                    <p>4,210</p>
                </div>
                <div className="info">
                    <h3>Requests</h3>
                    <p>1,258</p>
                </div>
                <div className="info">
                    <h3>Earnings</h3>
                    <p>$1,258</p>
                </div>
            </div>
            <div className="Users">
<h3>Active Users</h3>
<ul>
    <li>
        <span>A</span>
        <div>
            <h4>Ahmed Mohammed</h4>
            <p>Admin System</p>
        </div>
    </li>
 <li>
        <span>O</span>
        <div>
            <h4>Omer Shaheen</h4>
            <p>Sales Manager</p>
        </div>
    </li>    
    <li>
        <span>A</span>
        <div>
            <h4>Ali Ahmed</h4>
            <p>Web Developer</p>
        </div>
    </li>
 <li>
        <span>A</span>
        <div>
            <h4>Asmail Shaheen</h4>
            <p>Web Designer</p>
        </div>
    </li>

</ul>
            </div>

        </div>
        <Homebutton/>
        </>
    )
}