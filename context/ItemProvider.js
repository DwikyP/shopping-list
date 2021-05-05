import React, { createContext, useState} from 'react'

export const ItemContext = createContext();

export const ItemProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    
    return (
        <ItemContext.Provider
            value={{
                items,
                setItems,
                cartItems,
                setCartItems
            }}
        >
            {children}
        </ItemContext.Provider>
    )
}
