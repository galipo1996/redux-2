import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './Carts'
import QuantityReducer from './Quantity'
const Store = configureStore({
  reducer: { cart: CartReducer, quantity: QuantityReducer },
})
export default Store
