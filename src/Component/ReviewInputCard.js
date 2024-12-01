import React, { useState, useEffect } from 'react';
import { Button, Form, Card, Alert } from 'react-bootstrap';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, get, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import './ReviewInputCard.css';

const ReviewInputCard = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [review, setReview] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [reviews, setReviews] = useState([]); 
  const navigate = useNavigate();

  // Fetch user profile from Firebase
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const userId = user.uid;
      const database = getDatabase();
      const userRef = ref(database, `users/${userId}`);

      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            if (userData.username && userData.username.trim() !== '') {
              setUserProfile(userData);
            } else {
              setAlertMessage('Please complete your profile before submitting a review.');
              navigate('/profile');
            }
          } else {
            setAlertMessage('No profile found. Please create a profile to submit a review.');
            navigate('/profile');
          }
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    } else {
      setAlertMessage('Please log in to submit a review.');
      navigate('/login');
    }
  }, [navigate]);

  // Fetch reviews from Firebase
  useEffect(() => {
    const database = getDatabase();
    const reviewsRef = ref(database, 'reviews');

    get(reviewsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const reviewData = snapshot.val();
          const reviewsArray = Object.values(reviewData);
          setReviews(reviewsArray);
        } else {
          console.log('No reviews found');
        }
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  const handleReviewSubmit = () => {
    if (review.trim() === '') {
      setAlertMessage('Review cannot be empty.');
      return;
    }

    const auth = getAuth();
    const user = auth.currentUser;

    if (user && userProfile) {
      const userId = user.uid;
      const database = getDatabase();
      const reviewRef = ref(database, `reviews/${userId}`);

      set(reviewRef, {
        username: userProfile.username,
        reviewText: review,
        timestamp: new Date().toISOString(),
      })
        .then(() => {
          setReview('');
          setAlertMessage('Thank you for your review!');

          // Fetch updated reviews after submission
          get(ref(database, 'reviews')).then((snapshot) => {
            if (snapshot.exists()) {
              const updatedReviews = Object.values(snapshot.val());
              setReviews(updatedReviews);
            }
          });
        })
        .catch((error) => {
          console.error('Error submitting review:', error);
          setAlertMessage('Error submitting review. Please try again.');
        });
    }
  };

  return (
    <div className="review-input-card">
      {alertMessage && <Alert variant="info">{alertMessage}</Alert>}

      {userProfile ? (
        <>
          <div className="review-box-cards">
            <h3 className="mt-5">Customer Reviews</h3>
            {reviews.length > 0 ? (
              <div className="review-list">
                {reviews.map((rev, index) => (
                  <div className="review-item" key={index}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{rev.username}</Card.Title>
                        <Card.Text>{rev.reviewText}</Card.Text>
                        <small className="text-muted">
                          Reviewed on {new Date(rev.timestamp).toLocaleDateString()}
                        </small>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              <p>No reviews yet. Be the first to leave a review!</p>
            )}
          </div>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Leave a Review</Card.Title>
              <Form.Group controlId="review">
                <Form.Label>Write your review about our services:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Enter your review..."
                />
              </Form.Group>
              <Button
                variant="primary"
                onClick={handleReviewSubmit}
                disabled={review.trim() === ''}
                className="mt-3"
              >
                Submit Review
              </Button>
            </Card.Body>
          </Card>
        </>
      ) : (
        <p>Please log in or complete your profile to submit a review.</p>
      )}
    </div>
  );
};

export default ReviewInputCard;
