import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'

const Product = (props) => {
    const { id, category, name, seller, price, stock, img, quantity } = props.product
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />

            </div>

            <div>
                <h3 className='text-css'>{name}</h3>
                <br />
                <p><small>By {seller}</small></p>
                <p><small>Price: ${price}</small></p>
                <p><small>Only {stock} Products left only-Order Soon.</small></p>
                <button className='my-btn' onClick={() => props.addCartHandler(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>

        </div>

    );
};

export default Product;
