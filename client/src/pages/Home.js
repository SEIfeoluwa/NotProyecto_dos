import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import MakePost from '../components/MakePost'
import Tweet from '../components/Tweet'
import axios from 'axios'

const Home = () => {
  const [tweet, setTweet] = useState([])

  useEffect(() => {
    const makeApiCall = async () => {
      let res = await axios.get('http://localhost:3001/posts')
      setTweet(res.data.reviews)
    }
    makeApiCall();
  }, [])

    return (
        <div>
          <Sidebar />  
          <div>
            <MakePost />
            {/* Map function for tweets, ads on the right side bar, place Makepost component  */}
            {tweet.map((tweet) =>(
              <Tweet 
                key={tweet._id}
                post={tweet.text}
                // user={tweet.user_id}
                timeStamp={tweet.createdAt}
                />
            ))}
          </div>
        </div>
    )
}

export default Home