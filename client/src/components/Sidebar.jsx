import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
     <div className="side-nav">
         <ul className="nav-links">
             <li><Link to="/home">Home</Link></li>
             <li><Link to="/IPP">Messages</Link></li>
             <li><Link to="/IPP">Notifications</Link></li>
             <li><Link to="/IPP">Bookmarks</Link></li>
             <li><Link to="/IPP">Lists</Link></li>
             <li><Link to="/prof">Profile</Link></li>
             <li><Link to="/IPP">More</Link></li>
         </ul> 
    </div>   
    )
}

export default Sidebar