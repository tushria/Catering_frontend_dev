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
           {/* <label htmlFor="email">Email:</label> */}
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
           <path d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
           <path d="M10.5 19.5C10.0337 19.4939 9.56682 19.485 9.09883 19.4732C5.95033 19.3941 4.37608 19.3545 3.24496 18.2184C2.11383 17.0823 2.08114 15.5487 2.01577 12.4814C1.99475 11.4951 1.99474 10.5147 2.01576 9.52843C2.08114 6.46113 2.11382 4.92748 3.24495 3.79139C4.37608 2.6553 5.95033 2.61573 9.09882 2.53658C11.0393 2.4878 12.9607 2.48781 14.9012 2.53659C18.0497 2.61574 19.6239 2.65532 20.755 3.79141C21.8862 4.92749 21.9189 6.46114 21.9842 9.52844C21.9939 9.98251 21.9991 10.1965 21.9999 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
           <path d="M19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17ZM19 17V17.5C19 18.3284 19.6716 19 20.5 19C21.3284 19 22 18.3284 22 17.5V17C22 14.5147 19.9853 12.5 17.5 12.5C15.0147 12.5 13 14.5147 13 17C13 19.4853 15.0147 21.5 17.5 21.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
           </svg>
            <input type="text" placeholder='example.123@gmail.com' onChange={(e) => setEmail(e.target.value)}/>
            {/* <label htmlFor="password">Password</label> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
            <path d="M13.4082 16.6682C13.4082 16.6682 14.0332 16.6682 14.6582 18.0015C14.6582 18.0015 16.6435 14.6682 18.4082 14.0015" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.9434 7.00146H16.9524" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.9434 7.00146H11.9524" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.94336 7.00146H6.95234" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.89193 11.9685H5.00845C3.34693 11.9685 2 10.6254 2 8.96851V4.99854C2 3.34168 3.34693 1.99854 5.00845 1.99854H18.9916C20.6531 1.99854 22 3.34168 22 4.99854V9.12944" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21.9996 16.0015C21.9996 12.6878 19.3057 10.0015 15.9827 10.0015C12.6597 10.0015 9.96582 12.6878 9.96582 16.0015C9.96582 19.3152 12.6597 22.0015 15.9827 22.0015C19.3057 22.0015 21.9996 19.3152 21.9996 16.0015Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <input type="password" placeholder='security_key' onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>Sign up</button>
            <p>Already Registered?<Link to="/login">Login</Link> </p>
        </form>
    </div>
  )
}
export default SignUpForm
