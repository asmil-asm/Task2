import './App.css';
import {HashRouter as Router, Routes,Route,Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Admin from './components/Admin';
import User from './components/User'
import Register from './components/Register';
import { Contextprovider} from './Context/Auth';

  

function App() {
  
  return (
  <div className='main'>
    <Router>
      <Contextprovider>
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
     <Route path='/sign-in' element={<Register/>}/>
     <Route path='/admin' element={<Admin/>}/>
     <Route path='/user' element={<User/>}/>
    </Routes>
    </Contextprovider>
    </Router>
  </div>
  
  );
}

export default App;
