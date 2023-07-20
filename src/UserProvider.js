import React, { createContext, useReducer } from 'react'
// import { createContext } from 'react';

export const userContext = createContext();

const initialState = {
    basket: []
}

export const getBasketTotal = (basket) => {
    return (basket?.reduce((amount, item) => item.price + amount, 0))
}

function reducer(state, action) {
    switch (action.type) {
        case 'AD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product(id: ${action.id}) as its not in the basket`)
            }

            return {
                ...state,
                basket: newBasket
            }

        default:
            return state
    }
}


function UserProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <userContext.Provider value={[state, dispatch]}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider;

