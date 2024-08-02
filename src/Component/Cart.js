import { useEffect, useState } from 'react'
import { CartState } from '../Context/Context'
import { Button, ListGroup, Row, Col, Form, Image } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';


const Cart = () => {
    const{
        state: {carts},
        dispatch,
        }=CartState();
 
    const [total, setTotal]=useState();
    
    useEffect(() => {
        setTotal(carts.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0));
    },[carts]);

return (
    <div className='home'>
      <div className='productContainer'> 
        <ListGroup>
            <ListGroup.Item>
            {carts.map((prod) =>(
                <Row>
                    <Col md={2}>
                        <Image src={prod.img} alt={prod.userName} fluid rounded style={{width:700}}/>
                    </Col>
                    <Col md={2}>
                        <span>{prod.userName}</span>
                    </Col>
                    <Col md={2}>
                    <span>₹{prod.price}</span>
                    </Col>
                    <Col>
                    <br/>
                        <Form.Control 
                            as="select"
                            value={prod.qty}
                            onChange={(e) =>
                                dispatch({
                                    type:"CHANGE_CART_QTY",
                                    payload:{
                                        id:prod.userId,
                                        qty:e.target.value,
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
                            type='button'
                            variant='light'
                            onClick={() =>
                                    dispatch({
                                        type:"DELETE",
                                        payload:prod,
                                    })
                            }
                            >
                            <AiFillDelete fontSize="20px"/>
                            </Button>    
                        </Col>
                    </Row>
                ))}
            </ListGroup.Item>
        </ListGroup>
      </div>
      <div className='filters_summary'>
        <span className='title'>Subtotal ({carts.length}) Items</span>
        <br/>
        <span style={{fontWeight:700, fontSize:20}}>Total:₹{total}</span>
        <br/>
        <Button type="button"disabled={carts.length===0}>
            Proceed To Checkout
        </Button>
        </div>
    </div>
  )
}

export default Cart
