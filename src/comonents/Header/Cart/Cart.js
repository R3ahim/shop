import React from 'react';
import './Cart.css'
const Cart = (props) => {
   const{cart} = props;
   let total = 0;
   let shipping = 0;
   
   for(const product of cart){
        total = product.price + total;
        shipping = product.shipping + shipping
      
   }
   const tax = parseFloat((total * 0.1).toFixed(2));
   const grandtotal = total + tax + shipping;
    return (
        <div className='cart'>
        <h3>Order Summery </h3>
        <p>Selected items: {cart.length}</p>
        <p>Total Price :${total}</p> 
        <p>Total Shipping: {shipping} </p>
        <p>Tax: ${tax}</p>
        <h4>Grand Total: ${grandtotal} </h4>
        </div>
    );
};

export default Cart;