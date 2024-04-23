import classes from "./CartButton.module.css";
import { CartAction } from "../../Store/cartReducer";

import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const handler = () => {
    dispatch(CartAction.toogle());
  };

  const totalqnty = useSelector((state) => state.cartitem.totalQuantity);

  return (
    <button className={classes.button} onClick={handler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalqnty}</span>
    </button>
  );
};

export default CartButton;
