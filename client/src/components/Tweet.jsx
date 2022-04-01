import { handleSubmit } from "./MakePost" 

const Tweet = (props) => {


    return (
        <div className="tweet">
            <h3>{props.post}</h3>
            <p>{props.timestamp}</p>
            <button onClick={() => props.update(props._id)} >Update</button>
            <button>Delete</button>
        </div>
    )
}

export default Tweet