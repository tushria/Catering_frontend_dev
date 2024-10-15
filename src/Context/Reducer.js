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
export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return {
        ...state,
        sort: action.payload,  // payload will be 'asc' or 'desc'
        products: [...(state.products || [])].sort((a, b) => {
          if (action.payload === 'asc') {
            return a.price - b.price;  // Sort in ascending order
          } else {
            return b.price - a.price;  // Sort in descending order
          }
        })
      };
      
    case "FILTER_BY_SEARCH":
      return {
        ...state,
        products: (state.products || []).filter(product => 
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
        searchQuery: action.payload,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        sort: "",
        searchQuery: "",
        products: state.originalProducts || [],  // Assuming originalProducts is defined
      };

    default:
      return state;
  }
};

