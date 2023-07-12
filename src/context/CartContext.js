import React, { createContext, useState } from 'react';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const storedProducts = JSON.parse(localStorage.getItem("products") || '[]')
    const [products, setProducts] = useState(storedProducts);
    const addToCart = (product) => {
        if (Array.isArray(product)) {
            updateProducts([...products, product])
        } else if (typeof product === 'object' && product !== null) {
            updateProducts([...products, product])
        } else {
            console.error('addToCart: Product must be an array or an object');
        }
    };

    const emptyCart = () => {
        updateProducts([])
    }

    const updateProducts = (products) => {
        setProducts(products)
        localStorage.setItem('products', JSON.stringify(products))
    }
    const cartContextValue = {
        products,
        addToCart,
        setProducts,
        emptyCart,
    };

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
};