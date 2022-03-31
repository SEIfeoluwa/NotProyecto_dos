

const Tweet = (props) => {

    return (
        <div className="tweet">
            <h3>{props.post}</h3>
            <p>{props.timestamp}</p>
            
        </div>
    )
}

export default Tweet