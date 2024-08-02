import React, {useState} from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import {auth} from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            await signInWithEmailAndPassword(auth ,email,password)
            console.log("login successfully")
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        {/* <label htmlFor="email">Email:</label> */}
        <input type="email" placeholder='example.123@gmail.com' onChange={(e) => setEmail(e.target.value)}/>
        {/* <label htmlFor="password">Password:</label> */}
        <input type="password" placeholder='security_key' onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit'>Login</button>
        <p>Don't have an account?👉 <Link to={'/signup'} className='link-des'>Sign up</Link></p>

      </form>
    </div>
  )
}
export default LoginForm