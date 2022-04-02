import { Link } from 'react-router-dom'
import { deletePost } from '../controllers/Controller1'
// import { useState } from 'react'

const Tweet = (props) => {
    // const [tweed, setTweed] = useState()
    // console.log(props)


    return (
        <div className="tweet">
            <h3>{props.post}</h3>
            <p className='timestamp'><small>{props.timeStamp}</small></p>
           <Link to='/update/{props._id}'><i className="fa-solid fa-pen-to-square"></i></Link>
            <button onClick={() => deletePost(props._id)} className="edits"><i className="fa-solid fa-trash-can"></i></button>
        </div>
    )
}

export default Tweet