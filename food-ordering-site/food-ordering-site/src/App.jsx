import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./components/store/CartContext";
import UserProgressContext from "./components/store/UserProgressContext";
import { UserProgressContextProvider} from "./components/store/UserProgressContext";
function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
      
      <Header></Header>
      <Meals></Meals>
      <Cart></Cart>
      <CheckOut></CheckOut>
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
