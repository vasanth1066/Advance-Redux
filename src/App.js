import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";

import Notification from "./components/UI/Notification";
import { getCartData } from "./Store/CartDatabase";
import { sendCartData } from "./Store/CartDatabase";

let isInitial = true;

function App() {
  const show = useSelector((state) => state.cart.isCartVisisble);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartitem);
  const notification = useSelector((state) => state.cart.notification);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
