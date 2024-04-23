import classes from "./CartButton.module.css";
import { CartAction } from "../../Store/cartReducer";

import { useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const handler = () => {
    dispatch(CartAction.toogle());
  };

  return (
    <button className={classes.button} onClick={handler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
