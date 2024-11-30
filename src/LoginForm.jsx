import React, { useState } from 'react'; 
import './style.css'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { auth } from './firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = () => { 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [loginMessage, setLoginMessage] = useState(''); 
  const navigate = useNavigate();  
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    try { 
      await signInWithEmailAndPassword(auth, email, password); 
      setLoginMessage("Login successful!"); 
      
      navigate('/Home');
      
    } catch (err) { 
      console.log(err); 
      setLoginMessage(""); 
      alert("Error logging in: " + err.message); 
    } 
  };

  return ( 
    <div className='login-container'> 
      <form className='login-form' onSubmit={handleSubmit}> 
        <h2>Login</h2> 

        {loginMessage && <p className="success-message">{loginMessage}</p>} 
        <input 
          type="email" 
          placeholder='example.123@gmail.com' 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
        /> 
        <input 
          type="password" 
          placeholder='Password' 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        /> 
        <button type='submit'>Login</button>

        {/* Link to the Sign Up form */}
        
      <p style={{ marginTop: '15px' }}>Create Account👉 <Link to="/SignUpForm" className='link-des'>SignUp</Link></p>
      
      </form> 
    </div> 
  ); 
}; 

export default LoginForm;
