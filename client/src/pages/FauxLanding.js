import { Link } from 'react-router-dom'

const FauxLanding = () => {

    return (
        <div className='landing'>
            <div className='front'><img src='https://s7.gifyu.com/images/Screenshot-from-2022-04-01-12-42-25.png' /></div>
            <div className='login'> 
            <ul>
                <li><h1>Sign in to Twitter</h1></li>
                <li><input type='text' value='Elonccentric'/></li>
                <li><input type="password" id="pass" name="pass" value='KevinSucks'/></li>
                <li><Link to='/home'><button>Log In</button></Link></li> 
            </ul>  
            </div>
        </div>
    )
}

export default FauxLanding