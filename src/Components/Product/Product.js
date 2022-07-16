import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price, stock, seller } = props.product;

    return (
        <div className='product-section'>
            <div>
                <img src={img} alt="Product Image" />
            </div>
            <div className='card-right'>
                <h4 className='product-name' >{name} </h4>
                <p><small>By:{seller}</small></p>
                <p>Price:{price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className='btn-regular'
                >add to cart</button>
            </div>
        </div>
    );
};

export default Product;