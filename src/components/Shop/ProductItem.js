import Card from '../UI/Card'
import classes from './ProductItem.module.css'
import { useDispatch } from 'react-redux'
import { QuantityAction } from '../../Store/Quantity'
const ProductItem = (props) => {
  const { title, price, description, id } = props
  const dispatch = useDispatch()
  const addItem = () => {
    dispatch({
      type: QuantityAction.addItem,
      payload: { title, price, id },
    })
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  )
}

export default ProductItem
