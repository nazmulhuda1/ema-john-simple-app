import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart, clearCart, children } = props;
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: <span>{quantity}</span></p>
            <p>Total price: <span>${total}</span></p>
            <p>Total Shipping: <span>{quantity}</span></p>
            <p>Tax: <span>{tax}</span></p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
            <br />
            {/* <button onClick={clearCart} className='clear-btn'> Clear Shopping cart
                <FontAwesomeIcon className='shopping-clear' icon={faTrash}></FontAwesomeIcon>
            </button> */}
            <br />
            <div className="reiviwe-order">
                {children}
            </div>
        </div>
    );
};

export default Cart;