import logo from '../assets/logo.jpg';
import Button from './UI/Button';
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img  src={logo}/>
        <h1>Foody Moody</h1>
      </div>
      <nav>
        <Button textOnly>Wishlist(0)</Button>
      </nav>
    </header>
  );
}
