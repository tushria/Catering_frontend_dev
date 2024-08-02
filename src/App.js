import './App.css';
import Home from './Home';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import ContactUs from './ContactUs';
import Birthday from './Birthday';
import Wedding from './Wedding';
import Menu from './Menu';
import AddtoCart from './AddtoCart';

import Cart from "./Component/Cart";
import Context from './Context/Context';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './Component/Navbar';

function App() {
  return (
    <Context>
    <Router>
    <div>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/contactus' element={<ContactUs/>} />
      <Route path='/addtocart' element={<AddtoCart/>}/>
      <Route path='/birthday' element={<Birthday />}/>
      <Route path='/wedding' element={<Wedding/>}/>
      <Route path='/signup' element={<SignUpForm/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/cart' element={<Cart/>} />
      {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
    </Routes>
    </div>
    </Router>
    </Context>
  ) ;
}

export default App;
