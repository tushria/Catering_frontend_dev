
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './style.css';
// import { Link } from 'react-router-dom';
// import { auth } from './firebase';
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { getDatabase, ref, set } from 'firebase/database';

// const SignUpForm = () => {
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const navigate = useNavigate();
//   const database = getDatabase();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       console.log("user signed in:", user);

//       await updateProfile(user, { displayName: username });

//       const userID = user.uid;
//       const userRef = ref(database, `users/${userID}`);
//       await set(userRef, {
//         username,
//         email,
//       });

//       setLoading(false);
//       navigate('/profile'); // Navigate to the profile page
//     } catch (err) {
//       alert("Error: " + err.message);
//       console.log("Error:", err);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='signup-container'>
//       <form className='signup-form' onSubmit={handleSubmit}>
//         <h2>Sign up</h2>
//         <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
//         <input type="email" placeholder='example.123@gmail.com' onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder='security_key' onChange={(e) => setPassword(e.target.value)} />
//         <button disabled={loading} type='submit'>Sign up</button>
//         <p>Already Registered?👉 <Link to="/login" className='link-des'>Login</Link></p>
//       </form>
//     </div>
//   );
// };

// export default SignUpForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // For success message
  const navigate = useNavigate();
  const database = getDatabase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(''); // Reset the success message

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("user signed in:", user);

      // Update the user profile with username
      await updateProfile(user, { displayName: username });

      // Store user info in the database
      const userID = user.uid;
      const userRef = ref(database, `users/${userID}`);
      await set(userRef, {
        username,
        email,
      });

      setLoading(false);
      setSuccessMessage("Successfully signed up!"); // Set success message

      // Optionally delay navigation so that the user can see the message
      setTimeout(() => {
        navigate('/profile');
      }, 2000); // Redirect after 2 seconds
    } catch (err) {
      alert("Error: " + err.message);
      console.log("Error:", err);
      setLoading(false);
    }
  };

  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <input 
          type="text" 
          placeholder='Username' 
          onChange={(e) => setUsername(e.target.value)} 
          required
        />
        <input 
          type="email" 
          placeholder='example.123@gmail.com' 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <input 
          type="password" 
          placeholder='security_key' 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
        <button disabled={loading} type='submit'>
          {loading ? 'Signing up...' : 'Sign up'}
        </button>

        {successMessage && <p className="success-message">{successMessage}</p>} {/* Success message */}

        <p>Already Registered?👉 <Link to="/login" className='link-des'>Login</Link></p>
      </form>
    </div>
  );
};

export default SignUpForm;
