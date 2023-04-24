import Card from '../UI/Card'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const Cart = (props) => {
  const SUM = useSelector((state) => state.quantity.totalQuantity)
  console.log(SUM)
  const items = useSelector((state) => state.quantity.items)
  const List = items.map((item) => {
    return (
      <CartItem
        item={{
          title: item.title,
          quantity: item.quantity,
          price: item.price,
          id: item.id,
        }}
      />
    )
  })
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{SUM <= 0 ? '' : List}</ul>
    </Card>
  )
}

export default Cart
