import { createContext, useReducer,useContext } from 'react';
import {cartReducer,productReducer} from "./Reducer";
// ==========================================================

import React from 'react';
import Rfood from '../assest/Rajasthani.jpg';
import Hfood from '../assest/haryana.jpeg';
import Gofood from '../assest/goa.jpeg';
import Gujfood from '../assest/gujarat.jpeg';
import Cfood from '../assest/chgarh.jpg';
import Arufood from '../assest/arup.jpg';
import Assfood from '../assest/assam.jpeg';
import Bifood from '../assest/bihar.jpeg';
import Jarfood from '../assest/jharkhand.jpeg';
import Kafood from '../assest/kar.jpeg';
import Mhfood from '../assest/maharashtra.jpeg';
import Hifood from '../assest/himachal.jpeg';
import kerfood from '../assest/kerala.jpeg';
import Hyfood from '../assest/hbad.jpeg';
import Mpfood from '../assest/mp.jpeg';
import Megfood from '../assest/Meg.jpeg';
import Mizfood from '../assest/Miz.jpeg';
import Nagfood from '../assest/Nag.jpeg';
import Odfood from '../assest/od.jpeg';
import Sifood from '../assest/Si.jpeg';
import Tmfood from '../assest/Tm.jpeg';
import Trifood from '../assest/Tri.jpeg';
import Ukfood from '../assest/Uk.jpeg';
import Upfood from '../assest/Up.jpeg';
import Wbfood from '../assest/Wb.jpeg';
import Punfood from '../assest/Pun.jpeg';
// ===========================================================
const Cart = createContext();

const Context = ({ children }) => {
    
    const products = [
        {
          userId: 1,
          userName: 'Rajasthani Thali',
          description: 'A combination of spicy lentils, baked bread, and sweet crushed wheat',
          price: 200,
          img: Rfood
        },
        {
          userId: 2,
          userName: 'Bajra Aloo Roti',
          description: 'A type of flatbread made with pearl millet flour and served with spiced potatoes',
          price: 150,
          img: Hfood
        },
        {
          userId: 3,
          userName: 'Goan Fish Curry',
          description: 'A tangy and spicy fish curry made with coconut and traditional Goan spices',
          price: 300,
          img: Gofood
        },
        {
          userId: 4,
          userName: 'Dhokla',
          description: 'A steamed cake made from chickpea flour and served with coriander chutney',
          price: 100,
          img: Gujfood
        },
        {
          userId: 5,
          userName: 'Chana Samosa',
          description: 'Samosa filled with spiced chickpeas, served with tamarind chutney',
          price: 50,
          img: Cfood
        },
        {
          userId: 6,
          userName: 'Thukpa',
          description: 'A Tibetan noodle soup with vegetables or meat',
          price: 250,
          img: Arufood
        },
        {
          userId: 7,
          userName: 'Assam Laksa',
          description: 'A sour and spicy noodle soup made with tamarind and fish',
          price: 350,
          img:Assfood
        },
        {
          userId: 8,
          userName: 'Litti Chokha',
          description: 'A spicy and tangy dish made with whole wheat balls stuffed with spiced lentils',
          price: 180,
          img:Bifood
        },
        {
          userId: 9,
          userName: 'Thekua',
          description: 'A sweet snack made from wheat flour, jaggery, and fennel seeds',
          price: 80,
          img:Jarfood
        },
        {
          userId: 10,
          userName: 'Kadhi Pakora',
          description: 'A spicy and tangy curry made with gram flour and served with fried fritters',
          price: 220,
          img: Kafood
        },
        {
          userId: 11,
          userName: 'Himachali Dham',
          description: 'A traditional Himachali dish made with rice, lentils, and vegetables',
          price: 280,
          img: Hifood
        },
        {
          userId: 12,
          userName: 'Kerala Idli',
          description: 'A traditional Kerala breakfast dish made with steamed rice cakes',
          price: 120,
          img: kerfood
        },
        {
          userId: 13,
          userName: 'Maharashtrian Misal Pav',
          description: 'A spicy curry made with sprouted lentils and served with bread',
          price: 200,
          img: Mhfood
        },
        {
            userId: 11,
            userName: 'Hyderabad Biryani',
            description: 'A flavorful and aromatic rice dish made with basmati rice and spices',
            price: 250,
            img: Hyfood
          },
          {
            userId: 12,
            userName: 'Madhya Pradesh Bhindi Masala',
            description: 'A spicy and tangy curry made with okra and traditional Madhya Pradesh spices',
            price: 180,
            img: Mpfood
          },
          {
            userId: 13,
            userName: 'Meghalayan Smoked Pork',
            description: 'A traditional Meghalayan dish made with smoked pork and served with rice',
            price: 300,
            img: Megfood
          },
          {
            userId: 14,
            userName: 'Mizoram Bai',
            description: 'A traditional Mizoram dish made with steamed rice and served with fermented soybeans',
            price: 220,
            img: Mizfood
          },
          {
            userId: 15,
            userName: 'Nagaland Smoked Chicken',
            description: 'A traditional Nagaland dish made with smoked chicken and served with rice',
            price: 280,
            img: Nagfood
          },
          {
            userId: 16,
            userName: 'Odisha Rasagola',
            description: 'A traditional Odisha dessert made with sweetened cottage cheese and served with syrup',
            price: 150,
            img: Odfood
          },
          {
            userId: 17,
            userName: 'Sikkim Momo',
            description: 'A traditional Sikkim dish made with steamed dumplings filled with meat or vegetables',
            price: 120,
            img: Sifood
          },
          {
            userId: 18,
            userName: 'Tamil Nadu Idli',
            description: 'A traditional Tamil Nadu breakfast dish made with steamed rice cakes',
            price: 100,
            img: Tmfood
          },{
            userId: 19,
            userName: 'Tripura Mui Borok',
            description: 'A traditional Tripura dish made with fermented fish and served with rice',
            price: 200,
            img: Trifood
          },
          {
            userId: 20,
            userName: 'Uttarakhand Kafuli',
            description: 'A traditional Uttarakhand dish made with spinach and served with rice',
            price: 180,
            img: Ukfood,
          },
          {
            userId: 21,
            userName: 'Uttar Pradesh Tunday Kebabi',
            description: 'A traditional Uttar Pradesh dish made with minced lamb and served with naan',
            price: 250,
            img: Upfood
          },
          {
            userId: 22,
            userName: 'West Bengal Jhol or Bhuna',
            description: 'A traditional West Bengal dish made with spicy curry and served with rice',
            price: 220,
            img: Wbfood
          },
          {
            userId: 23,
            userName: 'Punjab Sarson Ka Saag',
            description: 'A traditional Punjab dish made with mustard greens and served with makki di roti',
            price: 280,
            img: Punfood,
          },
          {
            userId: 24,
            userName: 'Nagaland Smoked Chicken',
            description: 'A traditional Nagaland dish made with smoked chicken and served with rice',
            price: 280,
            img: Nagfood,
          },
          
        ]

    const [state,dispatch] = useReducer(cartReducer ,{
        products: products,
        carts:[],
    });

    const [productState,productDispatch] = useReducer(productReducer ,{
       searchQuery:"",
    });
    return( 
        <Cart.Provider 
            value={{ state, dispatch, productState,productDispatch}}>
            {children}
        </Cart.Provider>);
};

export default Context;

export const CartState = () => {
    return useContext(Cart);
};