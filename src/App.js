import './App.css';
import Home from './Home';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import ContactUs from './ContactUs';
import Birthday from './Birthday';
import Wedding from './Wedding';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './Component/Navbar';

function App() {
  return (
    <Router>
    <div>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/contactus' element={<ContactUs/>} />
      <Route path='/birthday' element={<Birthday />}/>
      <Route path='/wedding' element={<Wedding/>}/>
      <Route path='/signup' element={<SignUpForm/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      
    </Routes>
    </div>
    </Router>
   
  ) ;
}

export default App;
