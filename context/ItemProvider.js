import React, { createContext, useState} from 'react'

export const ItemContext = createContext();

export const ItemProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [orders, setOrders] = useState([
        // {
        //     "id": 1,
        //     "items": [
        //         {
        //             "item": "Banana",
        //             "qty": 1,
        //             "price": 5
        //         },
        //         {
        //             "item": "Mango",
        //             "qty": 2,
        //             "price": 10
        //         }
        //     ],
        //     "status": "WAITING FOR PAYMENT",
        //     "totalPrice": 15
        // },
        // {
        //     "id": 2,
        //     "items": [
        //         {
        //             "item": "Chocolate",
        //             "qty": 3,
        //             "price": 9
        //         },
        //     ],
        //     "status": "PROCESSING",
        //     "totalPrice": 9
        // },
    ]);
    
    return (
        <ItemContext.Provider
            value={{
                items,
                setItems,
                cartItems,
                setCartItems,
                orders,
                setOrders
            }}
        >
            {children}
        </ItemContext.Provider>
    )
}
