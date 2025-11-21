import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export default function Homebutton(){
    const back=useNavigate();
    function handleBack(){
        back(-1)
    }
    return(
        <>
        <Link className="link" to="/home">
        <button className=" btn goHome">
            Main
        </button>
        </Link>
               <button onClick={handleBack} className="btn goBack">
Back
        </button>
 </>
    )
}