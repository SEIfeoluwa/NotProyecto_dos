import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import MakePost from '../components/MakePost'



const Home = () => {
    return (
        <div>
          <Sidebar />  
          <div>
            <MakePost />
            {/* Map function for tweets, ads on the right side bar, place Makepost component  */}
          </div>
        </div>
    )
}

export default Home