import Card from '../UI/Card'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
const Cart = (props) => {
  const quantity = useSelector((state) => state.quantity.quantity)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {quantity <= 0 ? (
          ''
        ) : (
          <CartItem
            item={{ title: 'Test Item', quantity, total: 18, price: 6 }}
          />
        )}
      </ul>
    </Card>
  )
}

export default Cart
