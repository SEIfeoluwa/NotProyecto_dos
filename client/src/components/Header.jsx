import { useState } from 'react'

const Header = () => {
    const [pageName, setPageName] = useState('')

    // function to change title on the header to the current page
    return (
        <header className='header'>
            <nav>
                <h2>{pageName}</h2>
                <input type='text' placeholder='Search Twitter'/>
            </nav>
        </header>
    )
}

export default Header