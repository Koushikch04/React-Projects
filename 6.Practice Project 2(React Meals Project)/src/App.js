import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartShown, setCartShown] = useState(false);
  console.log("Component re-rendered");
  const showCartHandler = () => {
    console.log("before set");
    setCartShown(true);
    console.log("after set");
  };
  const hideCartHandler = () => {
    setCartShown(false);
  };
  console.log("Last");
  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}
export default App;
