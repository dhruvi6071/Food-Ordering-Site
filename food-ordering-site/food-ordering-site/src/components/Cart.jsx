import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "./store/CartContext";
import { currencyFormatter } from "../util/Formatter";
import Button from "./UI/Button";
import UserProgressContext from "./store/UserProgressContext";
import CartItem from "./UI/CartItem";

// Responsible for displaying cart data.
export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGotoCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Wishlist</h2>
      <ul>
        {cartCtx.items.map((item) => (
          //   <li key={item.id}>
          //     {item.name} - {item.quantity}
          //   </li>
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          ></CartItem>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGotoCheckout}>Go to CheckOut</Button>
        )}
      </p>
    </Modal>
  );
}
