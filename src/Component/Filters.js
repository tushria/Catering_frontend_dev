import {Button, Form} from "react-bootstrap";
import { CartState} from "../Context/Context";
const Filters =() => {
    const{productState: {fastDelivery,sort},productDispatch}= CartState();
    return(
        <div className="filter">
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                inline
                label="Ascending"
                name="group1"
                type="radio"
                id={`inline-1`}
                onChange={(e) =>
                    productDispatch({
                        type:"SORT_BY_PRICE",
                        payload:"lowToHigh",
                    })
                }
                checked={sort === "lowToHigh" ? true: false}
                />
            </span>
            <span>
                <Form.Check
                inline
                label="Descending"
                name="gropu1"
                type="radio"
                id={`inline-2`}
                onChange={(e) =>
                    productDispatch({
                        type:"SORT_BY_PRICE",
                        payload:"highToLow",
                    })
                }
                checked={sort === "highToLow" ? true: false}
                />
            </span>
            <span>
                <Form.Check
                inline
                label="Fast Delivery Only"
                name="group1"
                type="checkbox"
                id={`id1`}
                onChange={(e) =>
                    productDispatch({
                        type:"FILTER_BY_DELIVERY",
                    })
                }
                checked={fastDelivery}
                />
            </span>
            
            <Button variant="light"
            onClick={() =>
                productDispatch({
                  type: "CLEAR_FILTERS",
                })
              }
              >Clear Filters</Button>
        </div>
    );
};
export default Filters