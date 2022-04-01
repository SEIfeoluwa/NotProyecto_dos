import { Link } from 'react-router-dom'
import { useState } from 'react'

const Tweet = (props) => {
    const [tweed, setTweed] = useState()

    const handleDelete = () => {
        
    }


    return (
        <div className="tweet">
            <h3>{props.post}</h3>
            <h4>{props.timestamp}</h4>
           <Link to='/update/{props._id}'><i class="fa-solid fa-pen-to-square"></i></Link>
            <button OnClick={handleDelete()} className="edits"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    )
}

export default Tweet