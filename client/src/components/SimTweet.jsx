import axios from "axios"
import { useState, useEffect } from "react"

const SimTweet = (props) => {
    const [TweetT, setTweetT] = useState('')

    const handleChange = (e) => {
        setTweetT(e.target.value)
    }

    const updateTweet = async () => {
        await axios.put(`http://localhost:3001/updatePost/${props._id}`, {
        text: TweetT
        })
    }
    const deleteTweet = async () => {
        const selTweet = props._id
        console.log(selTweet)
        await axios.delete('/deletePost', { selTweet })
    }

    return (
        <div className="tweet">
            <h3>{props.user}</h3>
            <p>{props.text}</p>
            <p><small>{props.createdAt}</small></p>
            <div>
                <input 
                type='text'
                name='tweet'
                placeholder='Enter edited Tweet'
                onChange={(e) => handleChange(e)}
                />
            </div>
            <button onClick={deleteTweet}><i className="fa-solid fa-trash-can"></i></button>
        </div>
    )
} 

export default SimTweet