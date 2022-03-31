import axios from 'axios'
import { useState } from 'react'

const MakePost = () => {
    const [post, setPost] = useState({
        text: '',
        simUser_id: '6243a56c40b56f93a560ff2b' 
})
    

    const handleChange = (event) => {
        const target = event.target.value;
        setPost({...post,[event.target.name]: target});
        console.log(target)
    }

    function handleSubmit(e) {
        axios({
            url: "http://localhost:3001/createPosts",
            method: 'post',
            data: post
        })
    }

    return (
        <form className="form-layout" onSubmit={(e) => handleSubmit(e)}>
            <ul>
                <li>
                    <input type="text" name='text' placeholder="What's happening?" onChange={handleChange} maxlength="280" />
                </li>
                <li>
                    <button className='form-layout-button'>Tweet</button>
                </li>
            </ul>
        </form>
    )
}

export default MakePost