import { Link } from 'react-router-dom'

const FauxLanding = () => {

    return (
        <div>
            <div>
                <h1>Sign in to Twitter</h1>
                <input type='text' value='Elonccentric'/>
                <input type="password" id="pass" name="pass" value='KevinSucks'/>
                <Link to='/home'><button>Log In</button></Link>
            </div>  
        </div>
    )
}

export default FauxLanding