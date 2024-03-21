import { useReducer } from "react";
import { createContext } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

//Goal of this function is to update the state and action property tell how to update a state.
function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    //Update the state to add meal to the cart.
    // state.item.push(action.item); //With this line we have like 10 times like to that item therefore use another way.
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItem = [...state.item];
    if (existingCartItemIndex > -1) {
      const existingItem = state.item[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItem[existingCartItemIndex] = updatedItem;
    } else {
      updatedItem.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItem };
  }

  if (action === "REMOVE_ITEM") {
    //Remove item from the cart.
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.item[existingCartItemIndex];
    //To remove the whole dish from the cart if it is selected once only.
    if (existingCartItem.quantity === 1) {
      const updatedItem = [...state.item];
      updatedItem.splice(existingCartItemIndex, 1);
    }
    // To update quantity if it is more than one time and we need to remove it.
    else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
    }
  }

  return state;
}

//This function will do the actual data management and state management.
function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { item: [] }); //This is also a hook that needed to manage the states but it convert complex task into comparatively simple.
  
  const cartContext = {
    items: cart.item
  };

  function addItem(item) {
    dispatchCartAction({type: 'ADD_ITEM', item)
  }
   
  function removeItem(id) {
    dispatchCartAction({type: 'REMOVE_ITEM', id})
  }

  const cartContext = {
    items: cart.item,
    addItem,
    removeItem
  }
  return <CartContext.Provider>{children}</CartContext.Provider>; //This tag should be wrapped around any compoenent that need data of cartContext.
}

export default CartContext;
