// import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUpForm/>}/>
      <Route path='/login' element={<LoginForm/>}/>
    </Routes>
    </Router>
   
  );
}

export default App;
