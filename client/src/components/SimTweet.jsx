const SimTweet = (props) => {

    return (
        <div className="tweet">
            <h3>{props.user}</h3>
            <p>{props.text}</p>
            <p><small>{props.createdAt}</small></p>
        </div>
    )
} 

export default SimTweet