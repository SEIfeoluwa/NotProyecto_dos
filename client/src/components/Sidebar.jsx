import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
     <div className="side-nav">
         <ul className="nav-links">
             <li className="item logo"><i className="fa-brands fa-twitter"></i></li>
             <li className="item doc"><i className="fa-solid fa-house"></i><Link to="/home">Home</Link></li>
             <li className="item doc"><i className="fa-solid fa-bell"></i><Link to="/IPP">Notifications</Link></li>
             <li className="item doc"><i className="fa-solid fa-envelope"></i><Link to="/IPP">Messages</Link></li>
             <li className="item doc"><i className="fa-solid fa-bookmark"></i><Link to="/IPP">Bookmarks</Link></li>
             <li className="item doc"><i className="fa-solid fa-list"></i><Link to="/IPP">Lists</Link></li>
             <li className="item doc"><i className="fa-solid fa-user"></i><Link to="/prof">Profile</Link></li>
             <li className="item doc"><i className="fa-solid fa-ellipsis"></i><Link to="/IPP">More</Link></li>
             <li className="item"><button className="butt"><Link to="/home">Tweet</Link></button></li>
         </ul> 
    </div>   
    )
}

export default Sidebar