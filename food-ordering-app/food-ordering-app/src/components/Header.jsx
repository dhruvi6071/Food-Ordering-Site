import image from '../assets/logo.jpg';
import Button from './UI/Button';
export default function Header() {
    return <header id='main-header'>
        <div id='title'>
            <img src={image} alt="logo" />
            <h1>Moody Foody</h1>

        </div>
        <nav>
            <Button textOnly>Wish to Eat!</Button>
        </nav>
    </header>
}