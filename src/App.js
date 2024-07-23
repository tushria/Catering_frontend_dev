import './App.css';
import Home from './Home';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import ContactUs from './ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Component/Navbar';

function App() {
  return (
  
    <Router>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/contactus' element={<ContactUs/>} />
      <Route path='/signup' element={<SignUpForm/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      
    </Routes>
    </Router>
   
  ) ;
}

export default App;
