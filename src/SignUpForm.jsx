// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './style.css';
// import { Link } from 'react-router-dom';
// import { auth } from './firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { getDatabase, ref, set } from 'firebase/database';
// import UserProfile from './UserProfile';

// const SignUpForm = () => {
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const[currentUser,setCurrentUser]=useState(null)
//   const navigate = useNavigate();
//   const database = getDatabase();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       console.log("user signed in:", user);
//       const userID = user.uid;
//       const userRef = ref(database, `users/${userID}`);
//       await set(userRef, {
//         username,
//         email,
//       });
//       setCurrentUser(user);
//       navigate('./profile'); // Navigate to profile page on success
//     } catch (err) {
//       alert("Error");
//       console.log("error");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className='signup-container'>
//       <form className='signup-form' onSubmit={handleSubmit}>
//         <h2>Sign up</h2>
//         <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
//         <input type="text" placeholder='example.123@gmail.com' onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder='security_key' onChange={(e) => setPassword(e.target.value)} />
//         <button disabled={loading} type='submit'>Sign up</button>
//         <p>Already Registered?👉 <Link to="/login" className='link-des'>Login</Link> </p>
//         {/* this is for the user profile page */}
//         {currentUser && <UserProfile/>}
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
  const navigate = useNavigate();
  const database = getDatabase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("user signed in:", user);

      await updateProfile(user, { displayName: username });

      const userID = user.uid;
      const userRef = ref(database, `users/${userID}`);
      await set(userRef, {
        username,
        email,
      });

      setLoading(false);
      navigate('/profile'); // Navigate to the profile page
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
        <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder='example.123@gmail.com' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='security_key' onChange={(e) => setPassword(e.target.value)} />
        <button disabled={loading} type='submit'>Sign up</button>
        <p>Already Registered?👉 <Link to="/login" className='link-des'>Login</Link></p>
      </form>
    </div>
  );
};

export default SignUpForm;
