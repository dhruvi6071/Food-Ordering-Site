import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

//Goal of this function is to return updated state.
function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    //Update the state.
    // state.item.push(action.item)  // push will change the state before executing which can lead some serious problems

    //findIndex is an inbuilt function java used to find if item is already present or not and return index of it.
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItems = {
        ...existingItem, // Item exist kare chhe aetle ... thi spread thai ne badho data aavi jase.
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItems;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 }); // item already chhe nai list ma aetle push kari dese item ne.
    }
    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    //Remove item
    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.id
    );

    //Here we don't need to check weather item exist in to cart or not bcz we remove from the cart directly therefore we just need to check quantity of the item.
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];
    if (existingCartItem.quantity === 1) {
      // Remove whole item from cart
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
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

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] }); // This is used instead of useState bcz it manages state management ouside the component.

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  ); //This component should be wrapped around any component that need access to the given data.
}

export default CartContext;
