import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
     <div className="side-nav">
         <ul className="nav-links">
             <li className="item logo"><i class="fa-brands fa-twitter"></i></li>
             <li className="item"><i class="fa-solid fa-house"></i><Link to="/home">Home</Link></li>
             <li className="item"><i class="fa-solid fa-bell"></i><Link to="/IPP">Notifications</Link></li>
             <li className="item"><Link to="/IPP">Messages</Link></li>
             <li className="item"><Link to="/IPP">Bookmarks</Link></li>
             <li className="item"><Link to="/IPP">Lists</Link></li>
             <li className="item"><Link to="/prof">Profile</Link></li>
             <li className="item"><Link to="/IPP">More</Link></li>
         </ul> 
    </div>   
    )
}

export default Sidebar