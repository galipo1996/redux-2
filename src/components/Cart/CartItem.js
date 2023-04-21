import classes from './CartItem.module.css'
import { useDispatch } from 'react-redux'
import { QuantityAction } from '../../Store/Quantity'
const CartItem = (props) => {
  const { title, quantity, price } = props.item
  const total = price * quantity
  const dispatch = useDispatch()
  const addItem = () => {
    dispatch({ type: QuantityAction.addItem })
  }
  const removeItem = () => {
    dispatch({ type: QuantityAction.removeItem })
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItem}>-</button>
          <button onClick={addItem}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
