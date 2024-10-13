// import { CartState } from "../Context/Context";
// import SingleProduct from "./SingleProduct";
// import Filters from "./Filters";
// import './styling.css'; 
// import ProductList from "../Context/ProductList";

// const Home = () =>{
//     const{
//         state:{products} ,
//         productState:{ sort, fastDelivery, searchQuery}, } = CartState();

//         const transformProducts = () =>{
//             let sortedProducts = products;
//         if(sort){
//             sortedProducts= sortedProducts.sort((a, b) =>
//                 sort === 'lowToHigh' ? a.price-b.price : b.price-a.price);
//             if(fastDelivery){
//                 sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
//             }
//             if(searchQuery){
//                 sortedProducts = sortedProducts.filter((prod) => 
//                 prod.name.toLowerCase().includes(searchQuery)
//             );
//             }
//         }
//         return sortedProducts;
        
//     };

//     return (
//     <div className="home">
//         <Filters/>
//         <div className="productContainer">
//             {transformProducts().map((prod) => {
//                 return  <SingleProduct prod={prod} key={prod.userId}/>;
//             })}
//         </div>
//         </div>
//     );
// } ;

// export default Home

import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";
import './styling.css'; 

const Home = () => {
  const {
    state: { products },
    productState: { sort, fastDelivery, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    // Sort by price
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    // Filter by fast delivery
    if (fastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    // Filter by search query
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.userName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.userId} />
        ))}
      </div>
    </div>
  );
};

export default Home;
