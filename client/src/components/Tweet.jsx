
const Tweet = (props) => {
 

    return (
        <div className="tweet">
            <h3>{props.user}</h3>
            <h3>{props.post}</h3>
            <p><small>{props.timestamp}</small></p>
           {/* <Link to=`/update/{props._id}`><i className="fa-solid fa-pen-to-square"></i></Link> */}
           {/* <Delete><i className="fa-solid fa-trash-can"></i></Delete> */}
           {/* <button className="edits"><i className="fa-solid fa-trash-can"></i></button> */}
        </div>
    )
}

export default Tweet

