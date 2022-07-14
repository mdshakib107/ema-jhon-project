import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="product-container">
                <h2>Product:{products.length}</h2>
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
            <div className="orderd-container">
                <h2>Orderd Item</h2>
            </div>

        </div>
    );
};

export default Shop;