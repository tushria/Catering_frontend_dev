import React, { useState } from 'react'; 
import './style.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState(''); // State for showing login success message
  const [hasAccount, setHasAccount] = useState(null); // State to check if user has an account
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoginMessage("Login successful!"); // Set success message
      console.log("Login successful");
      // Optionally navigate to user profile after login
    } catch (err) {
      console.log(err);
      setLoginMessage(""); // Clear the success message in case of an error
      alert("Error logging in: " + err.message); // Inform user about the error
    }
  };

  const handleAccountCheck = (answer) => {
    if (answer === 'yes') {
      setHasAccount(true); // User has an account, show login form
    } else {
      navigate('/SignUpForm'); // User does not have an account, navigate to signup page
    }
  };

  return (
    <div className='login-container'>
      {/* If the user has not yet indicated if they have an account, ask them */}
      {hasAccount === null ? (
        <div className="account-check">
          <h2>Do you already have an account?</h2>
          <button className="acct-btn" onClick={() => handleAccountCheck('yes')}>Yes</button>
          <button className="acct-btn" onClick={() => handleAccountCheck('no')}>No</button>
        </div>
      ) : (
        // Show login form if user has an account
        <form className='login-form' onSubmit={handleSubmit}>
          <h2>Login</h2>
          {/* Show success message if login is successful */}
          {loginMessage && <p className="success-message">{loginMessage}</p>}
          <input 
            type="email" 
            placeholder='example.123@gmail.com' 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
          />
          <input 
            type="password" 
            placeholder='security_key' 
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
          />
          <button type='submit'>Login</button>
          
        </form>
      )}
    </div>
  );
}

export default LoginForm;
