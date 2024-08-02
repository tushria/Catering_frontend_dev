import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import {auth} from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUpForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try{
      await createUserWithEmailAndPassword(auth ,email,password)
      console.log("Account Created")
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='signup-container'>
        <form className='signup-form' onSubmit={handleSubmit}>
          <h2>Sign up</h2>
            <input type="text" placeholder='example.123@gmail.com' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='security_key' onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>Sign up</button>
            <p>Already Registered?👉 <Link to="/login" className='link-des'>Login</Link> </p>
        </form>
    </div>
  )
}
export default SignUpForm
