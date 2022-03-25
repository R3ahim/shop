import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../comonents/Header/Cart/Cart';
import './Shop.css'
import { addToDb } from '../utilities/fakedb';

const Shop = () => {
    const [products ,setProduct] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setProduct(data))
    },[]);

    useEffect(()=>{
        
    },[])
    

    const handleAddToCart=(product)=>{
            const newCart = [...cart,product ];
            setCart(newCart);
           addToDb(product.id)
        

    }
    return (
        <div className='shop-container'>
        <div className='products-container'>
       {
           products.map(product=>
                <Product 
                product={product}
                key = {product.id}
                handleAddToCart ={handleAddToCart}
                >

                </Product>
           )
       }
        </div>
        <div className='cart-container'>
        <Cart cart={cart}></Cart>
        </div>
      </div>
  
    );
};

export default Shop;