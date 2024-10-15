import React from 'react';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

function PaymentButton() {
  const navigate = useNavigate();

  const handlePaymentClick = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const userId = user.uid;
      const database = getDatabase();
      const userRef = ref(database, `users/${userId}`);

      // Check if username exists in Firebase
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          if (userData.username && userData.username.trim() !== '') {
            // Proceed with payment
            navigate('/checkout'); // Redirect to payment page
          } else {
            // Alert user to update profile
            alert('Please complete your profile by adding a username before proceeding to payment.');
            navigate('/profile'); // Redirect to profile page
          }
        } else {
          console.log('User data not found');
        }
      }).catch((error) => {
        console.error('Error fetching user data:', error);
      });
    } else {
      alert('No user is logged in. Please log in first.');
      navigate('/login'); // Redirect to login page
    }
  };

  return (
    <button onClick={handlePaymentClick}>
      Proceed to Pay
    </button>
  );
}

export default PaymentButton;
