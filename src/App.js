import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(getCartItems("random"));
  }, [dispatch]);

  if (isLoading) {
    return (
      <>
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </>
    );
  }

  return (
    <>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  );
}
export default App;
