import { useReducer } from "react";
import { createContext } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

//Goal of this function is to update the state and action property tell how to update a state. 
function cartReducer(state, action) {
    if(action.type === 'ADD_ITEM') {
        //Update the state to add meal to the cart.
    }

    if(action === 'REMOVE_ITEM'){
        //Remove item from the cart.
    }

    return state;
}

//This function will do the actual data management and state management.
function CartContextProvider({children}) {
    useReducer() ; //This is also a hook that needed to manage the states but it convert complex task into comparatively simple.
    return <CartContext.Provider>{children}</CartContext.Provider> //This tag should be wrapped around any compoenent that need data of cartContext.
}

export default CartContext;