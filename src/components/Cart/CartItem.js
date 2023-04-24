import classes from './CartItem.module.css'
import { useDispatch } from 'react-redux'
import { QuantityAction } from '../../Store/Quantity'
const CartItem = (props) => {
  const { title, quantity, price, id } = props.item
  console.log(id)
  const total = price * quantity
  const dispatch = useDispatch()
  const addItem = () => {
    dispatch({ type: QuantityAction.addItem, payload: { title, price, id } })
  }
  const removeItem = () => {
    dispatch({ type: QuantityAction.removeItem, payload: id })
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
