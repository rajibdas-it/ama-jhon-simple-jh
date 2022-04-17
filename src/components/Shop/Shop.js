import React, { useState } from 'react';
import fakeProduct from '../../fakeData/products.json';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeProduct.slice(0, 10);
    const [products, setProduct] = useState(first10);
    const addCartHandler = (product) => {
        console.log("Add to card", product)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => <Product
                        addCartHandler={addCartHandler}
                        product={pd}
                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <h1>This is cart</h1>
            </div>
        </div>
    );
};

export default Shop;