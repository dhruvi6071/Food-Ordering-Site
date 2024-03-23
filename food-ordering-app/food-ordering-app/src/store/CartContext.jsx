import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

//Goal of this function is to update the state and action property tell how to update a state.
function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    //Update the state to add meal to the cart.
    // state.item.push(action.item); //With this line we have like 10 times like to that item therefore use another way.
      const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'REMOVE_ITEM') {
    //Remove item from the cart.
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];
    //To remove the whole dish from the cart if it is selected once only.
      if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } 
     // To update quantity if it is more than one time and we need to remove it.
      else {     
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  return state;
}
//This function will do the actual data management and state management.
export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;