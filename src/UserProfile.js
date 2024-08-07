import React, { useState, useEffect, useRef} from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
import './UserProfile.css';
import by_default_user from './assest/by_default_user.jpg';
import Header from './Component/Header';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [displayName, setDisplayName] = useState(''); 
  const [emailid , setEmailid] = useState('');
  const inputRef =useRef(null);
  const[image,setImage]=useState('')

  const handleImageClick=()=>{
    inputRef.current.click();
  };
  const handleImageChange =(e) =>{
    const file = e.target.files[0];
    console.log(file);
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        const database = getDatabase();
        const userRef = ref(database, `users/${userId}/private/login credentials`);
        get(userRef).then((snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            setUserName(userData.userName);
            setUserId(userData.userId);
            setUser(userName);
          } else {
            console.log('No user data found', user);
          }
        });
        setUserName(user.userName);
        setDisplayName(user.displayName); 
        setEmailid(user.email);
      } else {
        console.log('No user logged in');
      }
    });
  }, []);

  return (
    <div className='main-body'>
      <div className='inner-box1'>
          <section className='blured-box'>
              <Header/>
                <h1>User Profile</h1>
                <div id="userProfile" >
                  <div className="file-input-container" onClick={handleImageClick}>
                    {/* <img src={by_default_user}/> */}
                    {image ? (
                    <img src={URL.createObjectURL(image)} alt=''/>
                    ) : (
                    <img src='./by_default_user.jpg' alt=''/>
                    )}
                    <input 
                      type="file" 
                      ref={inputRef} 
                      onClick={handleImageChange} 
                      style={{
                        display:'none'
                      }}
                      />
                    {/* <button class="file-input-button">Browse</button> */}
                  </div>
                  <div className='u-detail'>
                    <p>Username: {displayName}</p> 
                    <p>Registered email-id: {emailid}</p>
                  </div>
                  <br/>
                  <br/>
                  <br/>
                </div>
          </section>
        </div>
    </div>
  );
}

export default UserProfile;