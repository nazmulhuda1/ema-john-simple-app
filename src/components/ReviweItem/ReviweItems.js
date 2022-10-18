import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviweItem.css';

const ReviweItems = ({ product, handleRemoveItem }) => {
    const { id, name, img, quantity, price } = product;
    // console.log(name, quantity, product);
    return (
        <div>
            <div className="show-reviwe-item">
                <div className="cart-img">
                    <img src={img} alt="" />
                </div>
                <div className="reviwe-details-container">
                    <div className="reviwe-container">
                        <p>{name}</p>
                        <p><small>Price: <span>{price}</span></small></p>
                        <p><small>Quantity: <span>{quantity}</span></small></p>
                    </div>
                    <div className="delate-container">
                        <button onClick={() => handleRemoveItem(id)} className='delate-btn'>
                            <FontAwesomeIcon className='delate-icon' icon={faTrash}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReviweItems;