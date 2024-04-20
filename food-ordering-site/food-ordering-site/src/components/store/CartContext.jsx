import { createContext } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

function CartContextProvider({children}) {
    return <CartContext.Provider>{children}</CartContext.Provider>
}