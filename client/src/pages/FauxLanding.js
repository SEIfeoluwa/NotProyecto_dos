import { Link } from 'react-router-dom'

const FauxLanding = () => {

    return (
        <div className='landing'>
            <div><img src='https://s7.gifyu.com/images/Screenshot-from-2022-04-01-12-42-25.png' /></div>
            <h1>Sign in to Twitter</h1>
            <ul>
                <li><input type='text' value='Elonccentric'/></li>
                <li><input type="password" id="pass" name="pass" value='KevinSucks'/></li>
                <li><Link to='/home'><button>Log In</button></Link></li> 
            </ul>  
        </div>
    )
}

export default FauxLanding