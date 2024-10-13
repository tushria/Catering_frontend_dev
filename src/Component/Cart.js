// import { useEffect, useState } from 'react'
// import { CartState } from '../Context/Context'
// import { Button, ListGroup, Row, Col, Form, Image } from 'react-bootstrap';
// import { AiFillDelete } from 'react-icons/ai';


// const Cart = () => {
//     const{
//         state: {carts},
//         dispatch,
//         }=CartState();
 
//     const [total, setTotal]=useState();
    
//     useEffect(() => {
//         setTotal(carts.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0));
//     },[carts]);

// return (
//     <div className='home'>
//       <div className='productContainer'> 
//         <ListGroup>
//             <ListGroup.Item>
//             {carts.map((prod) =>(
//                 <Row>
//                     <Col md={2}>
//                         <Image src={prod.img} alt={prod.userName} fluid rounded style={{width:700}}/>
//                     </Col>
//                     <Col md={2}>
//                         <span>{prod.userName}</span>
//                     </Col>
//                     <Col md={2}>
//                     <span>₹{prod.price}</span>
//                     </Col>
//                     <Col>
//                     <br/>
//                         <Form.Control 
//                             as="select"
//                             value={prod.qty}
//                             onChange={(e) =>
//                                 dispatch({
//                                     type:"CHANGE_CART_QTY",
//                                     payload:{
//                                         id:prod.userId,
//                                         qty:e.target.value,
//                                     },
//                                 })
//                             }
//                         >
//                             {Array.from({ length: 10 }, (_, i) => (
//                             <option key={i + 1}>{i + 1}</option>
//                         ))}
//                         </Form.Control>
//                     </Col>
//                     <Col md={2}>
//                             <Button 
//                             type='button'
//                             variant='light'
//                             onClick={() =>
//                                     dispatch({
//                                         type:"DELETE",
//                                         payload:prod,
//                                     })
//                             }
//                             >
//                             <AiFillDelete fontSize="20px"/>
//                             </Button>    
//                         </Col>
//                     </Row>
//                 ))}
//             </ListGroup.Item>
//         </ListGroup>
//       </div>
//       <div className='filters_summary'>
//         <span className='title'>Subtotal ({carts.length}) Items</span>
//         <br/>
//         <span style={{fontWeight:700, fontSize:20}}>Total:₹{total}</span>
//         <br/>
//         <Button type="button"disabled={carts.length===0}>
//             Proceed To Checkout
//         </Button>
//         </div>
//     </div>
//   )
// }

// export default Cart


// import { useEffect, useState } from 'react';
// import { CartState } from '../Context/Context';
// import { Button, ListGroup, Row, Col, Form, Image, Modal } from 'react-bootstrap'; 
// import { AiFillDelete } from 'react-icons/ai';
// import './Cart.css'; 
// const Cart = () => {
//   const {
//     state: { carts },
//     dispatch,
//   } = CartState();

//   const [total, setTotal] = useState();
//   const [showModal, setShowModal] = useState(false); // State for showing/hiding modal

//   useEffect(() => {
//     setTotal(carts.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
//   }, [carts]);

//   const handleProceedToCheckout = () => {
//     setShowModal(true); // Show modal on button click
//   };

//   const handleCloseModal = () => {
//     setShowModal(false); // Close modal when necessary
//   };

//   return (
//     <div className='home'>
//       <div className='productContainer'>
//         <ListGroup>
//           <ListGroup.Item>
//             {carts.map((prod) => (
//               <Row key={prod.userId}>
//                 <Col md={2}>
//                   <Image src={prod.img} alt={prod.userName} fluid rounded style={{ width: 700 }} />
//                 </Col>
//                 <Col md={2}>
//                   <span>{prod.userName}</span>
//                 </Col>
//                 <Col md={2}>
//                   <span>₹{prod.price}</span>
//                 </Col>
//                 <Col>
//                   <br />
//                   <Form.Control
//                     as="select"
//                     value={prod.qty}
//                     onChange={(e) =>
//                       dispatch({
//                         type: 'CHANGE_CART_QTY',
//                         payload: {
//                           id: prod.userId,
//                           qty: e.target.value,
//                         },
//                       })
//                     }
//                   >
//                     {Array.from({ length: 10 }, (_, i) => (
//                       <option key={i + 1}>{i + 1}</option>
//                     ))}
//                   </Form.Control>
//                 </Col>
//                 <Col md={2}>
//                   <Button
//                     type="button"
//                     variant="light"
//                     onClick={() =>
//                       dispatch({
//                         type: 'DELETE',
//                         payload: prod,
//                       })
//                     }
//                   >
//                     <AiFillDelete fontSize="20px" />
//                   </Button>
//                 </Col>
//               </Row>
//             ))}
//           </ListGroup.Item>
//         </ListGroup>
//       </div>

//       <div className='filters_summary'>
//         <span className='title'>Subtotal ({carts.length}) Items</span>
//         <br />
//         <span style={{ fontWeight: 700, fontSize: 20 }}>Total:₹{total}</span>
//         <br />
//         <Button
//           type="button"
//           disabled={carts.length === 0}
//           onClick={handleProceedToCheckout} // Show modal when this button is clicked
//         >
//           Proceed To Checkout
//         </Button>
//       </div>

//       {/* Modal for confirmation */}
//       <Modal show={showModal} onHide={handleCloseModal} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Your Order</Modal.Title>
//         </Modal.Header>
//         {/* <Modal.Body>
//           <h5>Total Amount: ₹{total}</h5>
//           {carts.map((prod) => (
//             <div key={prod.userId} className="checkout-item">
//               <Image src={prod.img} alt={prod.userName} fluid rounded style={{ width: '100px' }} />
//               <p>{prod.userName}</p>
//               <p>Quantity: {prod.qty}</p>
//               <p>Price: ₹{prod.price}</p>
//             </div>
//           ))}
//         </Modal.Body> */}
//         <Modal.Body>
//   <h5>Total Amount: ₹{total}</h5>
//   {carts.map((prod) => (
//     <div key={prod.userId} className="checkout-item">
//       <div className="item-image-text">
//         <Image src={prod.img} alt={prod.userName} fluid rounded className="item-image"/>
//         <div className="item-details">
//           <p className="item-name">{prod.userName}</p>
//           <p>Quantity: {prod.qty}</p>
//           <p>Price: ₹{prod.price}</p>
//         </div>
//       </div>
//     </div>
//   ))}
// </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleCloseModal}>
//             Confirm and Pay
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Cart;


import { useEffect, useState } from 'react';
import { CartState } from '../Context/Context';
import { Button, ListGroup, Row, Col, Form, Image, Modal } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import ServiceDetailsForm from './ServiceDetailsForm';
import './Cart.css';

const Cart = () => {
  const {
    state: { carts },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();
  const [showModal, setShowModal] = useState(false); // State for showing/hiding main modal
  const [showThankYouModal, setShowThankYouModal] = useState(false); // State for thank-you modal
  const [paidAmount, setPaidAmount] = useState(0); // Amount paid by user

  useEffect(() => {
    setTotal(carts.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
  }, [carts]);

  const handleProceedToCheckout = () => {
    setShowModal(true); // Show modal on button click
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close main modal when necessary
  };

  const handlePayment = () => {
    if (paidAmount >= total) {
      setShowModal(false); // Close the main modal
      setShowThankYouModal(true); // Show thank-you modal
    } else {
      alert('You must pay the total amount or more to proceed!');
    }
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
        <ServiceDetailsForm />
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

          {/* Provided QR Code */}
          <div className="payment-section">
            <h5>Scan to Pay</h5>
            <Image src="YOUR_QR_CODE_URL" alt="QR Code for payment" fluid />
            {/* Replace YOUR_QR_CODE_URL with the actual URL of your QR code image */}
            
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
