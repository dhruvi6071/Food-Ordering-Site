import { createContext, useReducer, useState } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

//Goal of this function is to return updated state.
function cartReducer(state, action) {
  if (action.type == "ADD_ITEM") {
    //Update the state.
    // state.item.push(action.item)  // push will change the state before executing which can lead some serious problems

    //findIndex is an inbuilt function java used to find if item is already present or not and return index of it.
    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if(existingCartItemIndex > -1){
        const existingItem = state.items[existingCartItemIndex];
        const updatedItems = {
            ...existingItem, // Item exist kare chhe aetle ... thi spread thai ne badho data aavi jase.
            quantity: existingItem.quantity + 1
        
        };
        updatedItems[existingCartItemIndex] = updatedItems;
    }
    else{
        updatedItems.push({...action.item, quantity: 1}); // item already chhe nai list ma aetle push kari dese item ne.
    }
    return {...state, items: updatedItems};
  }
  if (action.type == "REMOVE_ITEM") {
    //Remove item
  }
}

export function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] }); // This is used instead of useState bcz it manages state management ouside the component.
  return <CartContext.Provider>{children}</CartContext.Provider>; //This component should be wrapped around any component that need access to the given data.
}

export default CartContext;
