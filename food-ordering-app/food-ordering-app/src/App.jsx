import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartData.jsx";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header></Header>
        <Meals></Meals>
      </CartContextProvider>
    </>
  );
}

export default App;
