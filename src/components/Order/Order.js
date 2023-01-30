import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviweItems from '../ReviweItem/ReviweItems';
 
const Order = () => {
    const { products, initialCart } = useLoaderData()
    const [cart, setCart] = useState(initialCart)
    const handleRemoveItem = id => {
        const remaining = cart.filter(product => product._id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart([]);
    }

    return (
        <div className='shop-container'>
            <div className='carts-container'>
                {
                    cart.map(product => <ReviweItems
                        key={product._id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}>
                    </ReviweItems>)
                }
                <div className='no-shop'>
                    {
                        cart.length === 0 && <h2>No Items For Reviwe. <br />
                            Please <Link to='/shops'>Shop More</Link> </h2>
                    }
                </div>
            </div>
            <div className='cart-container'>
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/shipping'>
                        <button className=''>Proceed Shipping</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Order;