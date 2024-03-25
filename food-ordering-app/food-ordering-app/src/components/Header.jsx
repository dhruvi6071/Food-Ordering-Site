import image from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";
import UserProgressContext from "../store/UserProgressContext.jsx";
export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItem, item) => {
    return totalNumberOfItem + item.quantity;
  }, 0);

  function handleShowCart() {

    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={image} alt="logo" />
        <h1>Moody Foody</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Wish to Eat!({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
