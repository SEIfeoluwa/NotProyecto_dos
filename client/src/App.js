import {Routes, Route } from 'react-router-dom'
import FauxLanding from './pages/FauxLanding'
import Home from './pages/Home'
import Profile from './pages/Profile'
import IPPage from './pages/IPPage'
import axios from 'axios'
import './styles/App.css';

function App() {
  const makeApiCall = async () => {
    let res = await axios.get('http://localhost:3001/posts')
    console.log(res.data.posts)
    // console.log(res.data.users)
  }
  // makeApiCall();

  return (
    <div className="App">
      <Routes>
        <Route index element={ <FauxLanding /> }/>
        <Route path='/home' element={ <Home />}/>
        <Route path='/prof' element={ <Profile />}/>
        <Route path='/IPP' element={ <IPPage /> }/>
      </Routes>
    </div>
  );
}

export default App;
