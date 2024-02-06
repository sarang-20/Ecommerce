import React, { createContext, useState } from "react";
import all_product from '/Users/sarangaghara/Desktop/E-commerce/frontend/client/src/Assets/all_product.js';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    all_product.forEach(product => {
        cart[product.id] = 0;
    });
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart = (itemId) => {
        if (cartItem[itemId] > 0) {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        }
    }

    const contextValue = { all_product, cartItem, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
