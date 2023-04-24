import classes from './CartButton.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../../Store/Carts'

const CartButton = (props) => {
  const quantity = useSelector((state) => state.quantity.totalQuantity)
  const dispatch = useDispatch()
  const toogleCart = () => {
    dispatch({ type: cartAction.Tooggle })
  }
  return (
    <button onClick={toogleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  )
}

export default CartButton
