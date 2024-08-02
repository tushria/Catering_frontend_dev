import { Button, Card } from "react-bootstrap";
import { CartState } from "../Context/Context";

const SingleProduct = ({prod}) => {
  const{
    state:{carts},
    dispatch,
  } = CartState();
    return (
    <div className="products"> 
        <Card>
            <Card.Img 
                variant="top" 
                src={prod.img}
                alt={prod.username}/>
            <Card.Body>
                <Card.Title>{prod.userName}</Card.Title>
                <Card.Subtitle style={{paddingBottom:10}}>
                    <span>₹{prod.price}</span>
                    {prod.fastDelivery ? (
                        <div>Fast Delivery</div>
                    ) : (
                        <div>4 days Delivery</div>
                    )}               
                </Card.Subtitle>
               
                {carts.some(c=>c.userId===prod.userId)?(
                        <Button 
                            onClick={()=>{
                            dispatch({
                                type:"DELETE",
                                payload:prod,
                            });
                        }}
                        variant="danger">   
                        Delete
                        </Button>
                    ):(
                        <Button
                            onClick={()=>{
                            dispatch({
                                type:"ADD_TO_CART",
                                payload:prod,
                            });
                        }}
                        >Add to Cart</Button> 
                    )
                }   
            </Card.Body>
        </Card>
    </div>
    );
};
export default SingleProduct;



