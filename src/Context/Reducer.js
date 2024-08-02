

export const cartReducer=(state, action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return{...state,carts:[...state.carts,{...action.payload, qty:1}]};
            case "DELETE":
                return{...state,carts:state.carts.filter(c=>c.userId!== action.payload.userId)};
            case "CHANGE_CART_QTY":
                return {
                    ...state,
                    carts: state.carts.map(c =>
                      c.userId === action.payload.id ? { ...c, qty: action.payload.qty } : c
                    ),
                  };
        default:
            return state;
    }
};
export const productReducer =(state,action) =>{
    switch(action.type){
        case "SORT_BY_PRICE":
            return {...state, sort:action.payload};
        case "FILTER_BY_DELIVERY":
            return {...state, fastDelivery: !state.fastDelivery};
        case "FILTER_BY_SEARCH":
            return {...state, searchQuery:action.payload};
        case "CLEAR_FILTERS":
            return {
                fastDelivery:false,
                searchQuery:"",
                sort: "",
            };
        default:
            return state;
    }
}