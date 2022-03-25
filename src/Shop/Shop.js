import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../comonents/Header/Cart/Cart';
import './Shop.css'
import { addToDb, getStoreCart } from '../utilities/fakedb';

const Shop = () => {
    const [products ,setProduct] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setProduct(data))
    },[]);

    useEffect(()=>{
        const storedCart = getStoreCart();
        const savedCart =[];
        for(const id in storedCart){
            const addedProduct = products.find(product =>product.id === storedCart.id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    },[products])
    

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