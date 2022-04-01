import { Link } from 'react-router-dom'

const Tweet = (props) => {



    return (
        <div className="tweet">
            <h3>{props.post}</h3>
            <p>{props.timestamp}</p>
           <Link to="update"><i class="fa-solid fa-pen-to-square"></i></Link>
            <button OnClick={() => props.delete(props._id)} className="edits"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    )
}

export default Tweet