import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Name:{props.product.name} </h2>
        </div>
    );
};

export default Product;