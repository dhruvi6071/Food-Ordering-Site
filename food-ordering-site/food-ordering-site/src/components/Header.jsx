import logo from '../assets/logo.jpg';

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img  src={logo}/>
        <h1>Foody Moody</h1>
      </div>
      <nav>
        <button>Wishlist(0)</button>
      </nav>
    </header>
  );
}
