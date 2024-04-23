import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { itemAction } from "../../Store/cartItemReducer";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;
  const addhandler = () => {
    dispatch(itemAction.additem({ id, title, price }));
  };
  const removehandler = () => {
    dispatch(itemAction.removeitem(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total} <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removehandler}>-</button>
          <button onClick={addhandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
