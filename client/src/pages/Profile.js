import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"
import SimTweet from "../components/SimTweet"
import axios from "axios"

const Profile = () => {
    const [tweet, setTweet] = useState([])

    useEffect(() => {
      const makeApiCall = async () => {
        let res = await axios.get('http://localhost:3001/simUser')
        setTweet(res.data.posts)
      }
      makeApiCall();
    }, [])

    return (
        <div>
            <Sidebar />
            <div className="centerProf">
                <div><img src="https://pbs.twimg.com/profile_images/1503591435324563456/foUrqiEw_400x400.jpg" /></div>
                
                <img src="?" />
                <h1>Elon Musk</h1>
                <p>@elonmusk</p>
                <p>Joined June 2009</p>
                {/*  followers and following */}
            </div>
            <div className="simTweets">
            {tweet.map((tweet) => (
                <SimTweet 
                    key={tweet._id}
                    post={tweet.text}
                    // user={tweet.user_id}
                    timeStamp={tweet.createdAt}
                    {...tweet}
                />
            ))}
            </div>
        </div>
    )
}

export default Profile