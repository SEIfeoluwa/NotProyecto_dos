import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
     <div className="header">
        <Link to="/home">Home</Link>
        <Link to="/IPP">Messages</Link>
        <Link to="/IPP">Notifications</Link>
        <Link to="/IPP">Bookmarks</Link>
        <Link to="/IPP">Lists</Link>
        <Link to="/prof">Profile</Link>
        <Link to="/IPP">More</Link>
    </div>   
    )
}

export default Sidebar