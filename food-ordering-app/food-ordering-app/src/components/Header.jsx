import image from '../assets/logo.jpg';

export default function Header() {
    return <header id='main-header'>
        <div id='title'>
            <img src={image} alt="logo" />
            <h1>Moody Foody</h1>

        </div>
        <nav>
            <button>Wish to Eat!</button>
        </nav>
    </header>
}