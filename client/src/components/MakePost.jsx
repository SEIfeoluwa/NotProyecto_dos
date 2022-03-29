import axios from 'axios'
import { useState } from 'react'

const MakePost = () => {
    const [post, setPost] = useState('')
    

    const handleChange = (event) => {
        const target = event.target.value;
        setPost(target);
        console.log(target)
    }

    function handleSubmit(e) {
        axios({
            url: "http://localhost:3001/createReviews",
            method: 'post',
            data: {
                post: post
            }
        })
    }

    return (
        <form class="form-layout" onSubmit={(e) => handleSubmit(e)}>
            <ul>
                <li>
                    <input type="text" placeholder="What's happening?" onChange={handleChange} maxlength="280" />
                </li>
                <li>
                    <button className='form-layout-button'>Tweet</button>
                </li>
            </ul>
        </form>
    )
}

export default MakePost