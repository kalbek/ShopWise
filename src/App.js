import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { calculateTotals, increase } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}
export default App;
