import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import {Navbar,
        Container, 
        FormControl,
        Nav,
        Dropdown,
        Badge,
        Button}
        from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";
import Context from './Context/Context';
import Home from './Component/Home';
import SingleProduct from './Component/SingleProduct';
import { CartState } from './Context/Context';
import { AiFillDelete } from 'react-icons/ai';
import Header from './Component/Header.js';
const AddtoCart = () => {
  const{
    state:{carts},
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <div>
        <div className='main-body'>
      <div className='inner-box1'>
            <section className='blured-box'>
                <div className="logo"></div>
                    <Header/>
                    <Navbar bg="dark" variant='dark' style={{height:80}}>
                      <Container>
                        <Navbar.Text className='search'>
                            <FormControl 
                            style={{width:500}} 
                            placeholder='search your choice'
                            className='m-auto'
                            onChange={(e) =>{
                              productDispatch({
                                type:"FILTER_BY_SEARCH",
                                payload: e.target.value,
                              });
                            }}
                            />
                        </Navbar.Text>
                        <Nav>
                        <Dropdown align="end">
                            <Dropdown.Toggle variant="success">
                              <GiShoppingCart color="white" fontSize="25px"/>
                                <Badge>{carts.length}</Badge>
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{minWidth:370}}>
                              {carts.length > 0 ? (
                              <>
                               {
                                carts.map((prod) =>(
                                  <span className="cartitem" key={prod.userId}>
                                    <img
                                      src={prod.img}
                                      className="cartItemImg"
                                      alt={prod.userName}
                                    />
                                    <div className="cartItemDetail">
                                      <span>{prod.userName}</span>
                                      <span>₹{prod.price}</span>
                                    </div>
                                    <AiFillDelete
                                      fontSize="20px"
                                      style={{cursor:"pointer"}}
                                      onClick={() =>
                                        dispatch({
                                          type:"DELETE",
                                          payload:prod,
                                        })
                                      }
                                    />
                                  </span>
                                ))}
                                <Link to ="/cart">
                                  <Button style={{width:"95%" ,margin:"0 10px"}}>
                                      Go To Cart
                                  </Button>
                                  </Link>
                              </>
                              ):
                              (<span style={{ padding: 10 }}>Cart is Empty</span>)}
                            </Dropdown.Menu>
                          </Dropdown>
                        </Nav>
                      </Container>
                    </Navbar>
                      <Context></Context>
                      <Home><SingleProduct></SingleProduct></Home>

            </section>
        </div>
        </div>
      
    </div>
  )
}

export default AddtoCart
