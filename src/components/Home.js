import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Homebutton from "./Homebutton"
export default function Home(){
    return(
        <>

<Navbar name='Login' />
  <div class="text">
    <h1>We Are Creative Agency</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accuvoluptate error perferendis. Dignissimos nemo optio.</p>
   </div>


<Homebutton/>
<Sidebar/>
        </>
    )
}