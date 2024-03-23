import image from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import { useContext } from 'react';
export default function Header() {

    const CartCtx = useContext(CartContext);
    const totalCartItems = CartCtx.items.reduce((totalNumberOfItem, item) => {
        return totalNumberOfItem + item.quantity;
    }, 0);

    return <header id='main-header'>
        <div id='title'>
            <img src={image} alt="logo" />
            <h1>Moody Foody</h1>

        </div>
        <nav>
            <Button textOnly>Wish to Eat!({totalCartItems})</Button>
        </nav>
    </header>
}