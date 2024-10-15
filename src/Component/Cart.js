import { useEffect, useState } from 'react';
import { CartState } from '../Context/Context';
import { Button, ListGroup, Row, Col, Form, Image, Modal } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';

const Cart = () => {
  const {
    state: { carts },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showCheckContactModal, setShowCheckContactModal] = useState(false); // New state for the contact check modal
  const [paidAmount, setPaidAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(carts.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
  }, [carts]);

  const handleProceedToCheckout = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const userId = user.uid;
      const database = getDatabase();
      const contactRef = ref(database, `users/${userId}/contactDetails`);

      // Check if contact details exist in Firebase
      get(contactRef).then((snapshot) => {
        if (snapshot.exists()) {
          const contactDetails = snapshot.val();
          // If contact details are incomplete, show the contact check modal
          if (contactDetails.phoneNumber && contactDetails.eventLocation && contactDetails.numberOfGuests) {
            // Contact details filled, proceed to normal flow
            handlePaymentModal();
          } else {
            // Contact details not filled, show modal
            setShowCheckContactModal(true);
          }
        } else {
          // No contact details found, show modal
          setShowCheckContactModal(true);
        }
      }).catch((error) => {
        console.error('Error fetching contact details:', error);
      });
    } else {
      alert('Please log in first.');
      navigate('/login');
    }
  };

  const handlePaymentModal = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const userId = user.uid;
      const database = getDatabase();
      const userRef = ref(database, `users/${userId}`);

      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          if (userData.username && userData.username.trim() !== '') {
            setShowModal(true);
          } else {
            alert('Please complete your profile by adding a username before proceeding to payment.');
            navigate('/profile');
          }
        } else {
          console.log('User data not found');
        }
      }).catch((error) => {
        console.error('Error fetching user data:', error);
      });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePayment = () => {
    if (paidAmount >= total) {
      setShowModal(false);
      setShowThankYouModal(true);
    } else {
      alert('You must pay the total amount or more to proceed!');
    }
  };

  const handleCloseCheckContactModal = () => {
    setShowCheckContactModal(false);
  };

  const handleYesFilledContactForm = () => {
    setShowCheckContactModal(false);
    handlePaymentModal();
  };

  const handleNoFilledContactForm = () => {
    navigate('/ContactUs');
  };

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          <ListGroup.Item>
            {carts.map((prod) => (
              <Row key={prod.userId}>
                <Col md={2}>
                  <Image src={prod.img} alt={prod.userName} fluid rounded style={{ width: 700 }} />
                </Col>
                <Col md={2}>
                  <span>{prod.userName}</span>
                </Col>
                <Col md={2}>
                  <span>₹{prod.price}</span>
                </Col>
                <Col>
                  <br />
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: 'CHANGE_CART_QTY',
                        payload: {
                          id: prod.userId,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1}>{i + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: 'DELETE',
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            ))}
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div className="filters_summary">
        <span className="title">Subtotal ({carts.length}) Items</span>
        <br />
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹{total}</span>
        <br />
        <Button
          type="button"
          disabled={carts.length === 0}
          onClick={handleProceedToCheckout}
        >
          Proceed To Checkout
        </Button>
      </div>

      {/* Contact Check Modal */}
      <Modal show={showCheckContactModal} onHide={handleCloseCheckContactModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Have you filled out the Contact Us form?</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNoFilledContactForm}>
            No, take me to Contact Us
          </Button>
          <Button variant="primary" onClick={handleYesFilledContactForm}>
            Yes, I have filled it
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Main Modal for payment */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Total Amount: ₹{total}</h5>
          {carts.map((prod) => (
            <div key={prod.userId} className="checkout-item">
              <div className="item-image-text">
                <Image src={prod.img} alt={prod.userName} fluid rounded className="item-image" />
                <div className="item-details">
                  <p className="item-name">{prod.userName}</p>
                  <p>Quantity: {prod.qty}</p>
                  <p>Price: ₹{prod.price}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="payment-section">
            <Form.Group className="mt-3">
              <Form.Label>Enter Paid Amount (₹)</Form.Label>
              <Form.Control
                type="number"
                value={paidAmount}
                onChange={(e) => setPaidAmount(e.target.value)}
                min={total}
              />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePayment}>
            Confirm and Pay
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Thank You Modal */}
      <Modal show={showThankYouModal} onHide={() => setShowThankYouModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Your order has been successfully placed!</h5>
          <p>Your payment of ₹{paidAmount} was successful.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowThankYouModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
